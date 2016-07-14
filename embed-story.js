if (typeof(code4SAEmbedInjected) === 'undefined') {
  var code4SAEmbedInjected = false;
}

if (!code4SAEmbedInjected) {
  if (typeof(console) !== 'undefined')
    console.log("embed's first run");
  if (document.location.hostname == "localhost") {
      var baseurl = "";
  } else {
      var baseurl = "https://static.code4sa.org/apartheid/";
  }
  document.write('<div id="code4sa-apartheid-index"></div>');

  var container = document.getElementById('code4sa-apartheid-index');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  document.write('<script type="text/javascript" src="' + baseurl + 'js/pym.js"></script>');
  document.write("<script>var pymParent = new pym.Parent('code4sa-apartheid-index', '" + baseurl + "index.html', {});</script>");

  var code4SAEmbedInjected = true;
} else {
  if (typeof(console) !== 'undefined')
    console.log("already embedded");
}
