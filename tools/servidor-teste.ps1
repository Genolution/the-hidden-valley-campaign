<#
  Servidor HTTP local para testes (sem Node): serve a pasta do repositório em http://localhost:<Port>/
  e simula a função do servidor /api/chat (GET = chat configurado; POST = registra o corpo em -Log e responde ok).
  Arquivos de teste podem ficar fora do repositório: /__test/<arquivo> é servido de -TestDir.
  Não aplica os cabeçalhos do _headers. Encerra sozinho depois de -Minutes.

  Uso (rodar em segundo plano):
    powershell -NoProfile -ExecutionPolicy Bypass -File tools\servidor-teste.ps1 -Root . -TestDir <pasta> -Log <arquivo.log>
  Depois: Edge headless em http://localhost:8765/guia-reino/index.html?mestre (ou /__test/<página>.html).
#>
param([string]$Root, [string]$TestDir, [int]$Port = 8765, [int]$Minutes = 15, [string]$Log = (Join-Path $env:TEMP "api-chat.log"))
$l = New-Object System.Net.HttpListener
$l.Prefixes.Add("http://localhost:$Port/")
$l.Start()
$end = (Get-Date).AddMinutes($Minutes)
$types = @{ '.html'='text/html; charset=utf-8'; '.js'='text/javascript; charset=utf-8'; '.mjs'='text/javascript; charset=utf-8'; '.css'='text/css; charset=utf-8'; '.json'='application/json' }
while ((Get-Date) -lt $end) {
  $ctx = $l.GetContextAsync()
  while (-not $ctx.Wait(500)) { if ((Get-Date) -ge $end) { break } }
  if (-not $ctx.IsCompleted) { break }
  $c = $ctx.Result; $req = $c.Request; $res = $c.Response
  $path = [Uri]::UnescapeDataString($req.Url.AbsolutePath)
  try {
    if ($path -eq '/api/chat') {
      $body = ''
      if ($req.HttpMethod -eq 'POST') { $sr = New-Object IO.StreamReader($req.InputStream, [Text.Encoding]::UTF8); $body = $sr.ReadToEnd() }
      Add-Content -Path $Log -Value ("$($req.HttpMethod) $body") -Encoding UTF8
      $out = if ($req.HttpMethod -eq 'GET') { '{"ok":true,"providers":{"discord":true}}' } else { '{"ok":true}' }
      $b = [Text.Encoding]::UTF8.GetBytes($out); $res.ContentType = 'application/json'
    } else {
      if ($path -eq '/') { $path = '/guia-reino/index.html' }
      if ($path.StartsWith('/__test/')) { $f = Join-Path $TestDir ($path.Substring(8).Replace('/', '\')) }
      else { $f = Join-Path $Root ($path.TrimStart('/').Replace('/', '\')) }
      if (-not (Test-Path $f -PathType Leaf)) { $res.StatusCode = 404; $b = [Text.Encoding]::UTF8.GetBytes('404') }
      else { $b = [IO.File]::ReadAllBytes($f); $ext = [IO.Path]::GetExtension($f); if ($types[$ext]) { $res.ContentType = $types[$ext] } }
    }
    $res.OutputStream.Write($b, 0, $b.Length)
  } catch { $res.StatusCode = 500 }
  $res.Close()
}
$l.Stop()
