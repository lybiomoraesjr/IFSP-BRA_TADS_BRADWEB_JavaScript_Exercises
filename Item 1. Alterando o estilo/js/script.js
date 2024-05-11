var isStyleChanged = false;

function js_style() {
    var t = document.getElementById("text");

    if (isStyleChanged) {
        t.style.fontFamily = "";
        t.style.fontSize = "";
        t.style.color = "";
        isStyleChanged = false;
    } else {
        t.style.fontFamily = "Cursive";
        t.style.fontSize = "20px";
        t.style.color = "red";
        isStyleChanged = true;
    }
}