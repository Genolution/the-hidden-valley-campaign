<#
  Verificação do Guia do Reino (sem Node/Python; usa JScript do Windows + Edge headless).

  1. Checa a sintaxe de assets/app.js e data/*.js.
  2. Abre index.html?check no Edge headless e lê o relatório do selfCheck()
     (referências [[tipo:id]] quebradas, summary/text faltando, etapas sem atividade).
  3. Opcional: -Screenshot "#/estruturas" salva um PNG da rota (para conferência visual).

  Uso:
    powershell -NoProfile -ExecutionPolicy Bypass -File tools\verificar.ps1
    powershell -NoProfile -ExecutionPolicy Bypass -File tools\verificar.ps1 -Screenshot "#/estruturas" -Out C:\temp\st.png
  Sai com código 1 se houver erro de sintaxe ou problema no relatório.
#>
param(
  [string]$Screenshot = '',
  [string]$Out = '',
  [int]$Width = 1500,
  [int]$Height = 1100
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$app = Join-Path $root 'guia-reino'
$tmp = Join-Path $env:TEMP 'guia-reino-verificar'
New-Item -ItemType Directory -Force $tmp | Out-Null
$fail = $false

# 1. Sintaxe
$files = @((Join-Path $app 'assets\app.js'), (Join-Path $app 'assets\editor.js')) + @(Get-ChildItem (Join-Path $app 'data') -Filter *.js | ForEach-Object FullName)
& cscript //nologo (Join-Path $PSScriptRoot 'jscheck.js') @files
if ($LASTEXITCODE -ne 0) { $fail = $true }

# Edge headless
$edge = @("${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe", "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe") |
  Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $edge) { Write-Warning 'Edge não encontrado; pulando selfCheck/screenshot.'; if ($fail) { exit 1 } else { exit 0 } }
$base = ([Uri](Join-Path $app 'index.html')).AbsoluteUri
$prof = Join-Path $tmp 'edge-profile'

# 2. selfCheck
$domFile = Join-Path $tmp 'dom.html'
Start-Process -FilePath $edge -Wait -WindowStyle Hidden -RedirectStandardOutput $domFile -RedirectStandardError (Join-Path $tmp 'edge-err.txt') -ArgumentList @(
  '--headless=new', '--disable-gpu', "--user-data-dir=`"$prof`"", '--virtual-time-budget=3000', '--dump-dom', "`"$base`?check#/turno`"")
$dom = Get-Content $domFile -Raw -Encoding UTF8
$m = [regex]::Match($dom, '<pre id="selfcheck">([\s\S]*?)</pre>')
if (-not $m.Success) {
  Write-Host 'ERRO  selfCheck não rodou (app.js quebrou em tempo de execução?)' -ForegroundColor Red
  $fail = $true
} else {
  $rep = [System.Net.WebUtility]::HtmlDecode($m.Groups[1].Value) | ConvertFrom-Json
  $counts = ($rep.counts.PSObject.Properties | ForEach-Object { "$($_.Name)=$($_.Value)" }) -join ' '
  Write-Host "Entidades: $counts"
  Write-Host "Campanha ($(@($rep.campaign).Count)): $(@($rep.campaign) -join ', ')"
  Write-Host "  inativos/ocultos ($(@($rep.campaignInactive).Count)): $(@($rep.campaignInactive) -join ', ')"
  foreach ($k in 'missingRefs', 'noSummary', 'noText', 'stepsWithoutActivities', 'activitiesWithUnknownStep', 'duplicateIds', 'campaignUnknownKeys') {
    $v = $rep.$k
    $n = if ($v -is [array]) { $v.Count } else { @($v.PSObject.Properties).Count }
    if ($n) { $fail = $true; Write-Host "PROBLEMA $k ($n):" -ForegroundColor Yellow; $v | ConvertTo-Json -Depth 5 | Write-Host }
    else { Write-Host "OK    $k" }
  }
}

# 3. Screenshot opcional
if ($Screenshot) {
  if (-not $Out) { $Out = Join-Path $tmp 'screenshot.png' }
  Start-Process -FilePath $edge -Wait -WindowStyle Hidden -RedirectStandardError (Join-Path $tmp 'edge-err.txt') -ArgumentList @(
    '--headless=new', '--disable-gpu', "--user-data-dir=`"$prof`"", "--window-size=$Width,$Height", '--virtual-time-budget=3000',
    "--screenshot=`"$Out`"", "`"$base$Screenshot`"")
  Write-Host "Screenshot: $Out"
}

if ($fail) { exit 1 } else { exit 0 }
