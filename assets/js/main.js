////////////////////////////////////////////////////////////////////////
$(function() {
    $("header nav.js-nav li").each(function() {
        elt = $(this);
        linkElt = elt.find("a");
        if (location.pathname == "/" || location.pathname == "") {
            location.pathname = "/index";
        }
        if(endsWith(linkElt.attr("href"), location.pathname)) {
            linkElt.replaceWith(linkElt.text());
        }
    });
});

////////////////////////////////////////////////////////////////////////
function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}