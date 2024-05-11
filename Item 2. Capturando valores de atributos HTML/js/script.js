function getAttributes() {
    var l = document.getElementById("w3r");

    var href = l.getAttribute("href");
    var hreflang = l.getAttribute("hreflang");
    var rel = l.getAttribute("rel");
    var target = l.getAttribute("target");
    var type = l.getAttribute("type");

    var attributes = "href: " + href + "\n" +
        "hreflang: " + hreflang + "\n" +
        "rel: " + rel + "\n" +
        "target: " + target + "\n" +
        "type: " + type;

    alert(attributes);
}