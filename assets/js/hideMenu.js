document.addEventListener("DOMContentLoaded", function () {
const query = new URL(window.location.href).searchParams.get("fromApp");
if (query === "true") {
    const alinks = document.getElementsByTagName("a");
    for (let i = 0; i < alinks.length; i++) {
        var element = alinks[i];
        if (element.href.indexOf(location.hostname) !== -1 && !element.target) {
            var href = element.href;
            if (href.indexOf("#") !== -1) {
                var hrefHash = href.split("#");
                element.setAttribute("href", hrefHash[0] + "?fromApp=true#" + hrefHash[1])
            } else {
                element.setAttribute("href",href + "?fromApp=true")
            }
        }
        
    }
}
},false);