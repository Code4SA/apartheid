if (document.location.hostname == "localhost") {
    var baseurl = "";
} else {
    var baseurl = "http://code4sa.org/youthday/";
}
document.write('<div id="code4sa-youthday-index"></div>');
document.write('<script type="text/javascript" src="' + baseurl + 'js/pym.js"></script>');
document.write("<script>var pymParent = new pym.Parent('code4sa-youthday-index', '" + baseurl + "map.html', {});</script>");
