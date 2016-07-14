if (document.location.hostname == "localhost") {
    var baseurl = "";
} else {
    var baseurl = "https://static.code4sa.org/apartheid/";
}

var container = document.getElementById('code4sa-apartheid-index');

var pymScript = document.createElement( 'script' );
pymScript.type = 'text/javascript';
pymScript.src = baseurl + 'js/pym.js';
container.appendChild(pymScript);
