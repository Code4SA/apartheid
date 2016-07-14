if (document.location.hostname == "localhost") {
    var baseurl = "";
} else {
    var baseurl = "https://static.code4sa.org/apartheid/";
}

var container = document.getElementById('code4sa-apartheid-index');

var pymParentScript = document.createElement( 'script' );
pymParentScript.type = 'text/javascript';
pymParentScript.text = "var pymParent = new pym.Parent('code4sa-apartheid-index', '"
  + baseurl + "index.html', {});";
container.appendChild(pymParentScript);
