// Checagem de sintaxe via Windows Script Host (JScript): só compila, não executa.
// Uso: cscript //nologo tools\jscheck.js <arquivo.js> [<arquivo.js> ...]
var bad = 0;
for (var i = 0; i < WScript.Arguments.length; i++) {
  var path = WScript.Arguments(i);
  var st = new ActiveXObject("ADODB.Stream");
  st.Type = 2; st.Charset = "utf-8"; st.Open(); st.LoadFromFile(path);
  var src = st.ReadText(); st.Close();
  try { new Function(src); WScript.Echo("OK    " + path); }
  catch (e) { bad++; WScript.Echo("ERRO  " + path + " :: " + e.message); }
}
WScript.Quit(bad ? 1 : 0);
