if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

// import css
function requireAll_css(r) { r.keys().forEach(r); }
requireAll_css(require.context('./css', true, /\.css$/i));

//#region apply webp class when supported (backgrounds)
!(function (document) {
    "use strict";
    var webpImage,
        avifImage =
            "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAF0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgS0AAAAAABNjb2xybmNseAACAAIAAIAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAGVtZGF0EgAKBzgAPtAgIAkyUBAAAPWc41TP///4gHBX9H8XVK7gGeDllq8TYARA+8Tfsv7L+zPE24eIoIzE0WhHbrqcrTK9VEgEG/hwgB5rdCbvP8g3KYPdV88CvPJnptgQ",
        webpClass = "webp",
        avifClass = "avif";
    function alreadyTested(format) {
        if (window.sessionStorage) {
            var test = window.sessionStorage.getItem(format + "Support");
            if ("false" === test || "true" === test) return "true" === test;
        }
        return null;
    }
    function testFormat(format, imageSrc, callback) {
        var tested = alreadyTested(format);
        if (null === tested) {
            var image = new Image();
            return (
                (image.onload = image.onerror = function () {
                    callback(format, 2 === image.height);
                }),
                void (image.src = imageSrc)
            );
        }
        addClass(format, tested);
    }
    function addClass(format, support) {
        if (support) {
            var el = document.documentElement;
            el.classList ? el.classList.add("webp" === format ? "webp" : "avif") : (el.className += " " + format == "webp" ? "webp" : "avif"), window.sessionStorage.setItem(format + "Support", !0);
        } else window.sessionStorage.setItem(format + "Support", !1);
    }
    testFormat("webp", "data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA", addClass), testFormat("avif", avifImage, addClass);
})(document);
//#endregion

//#region scroll to top button
// Get the button
let mybutton = document.getElementsByClassName("to-top");
if(mybutton[0]) {
    mybutton[0].onclick = topFunction;
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton[0].style.display = "block";
        } else {
            mybutton[0].style.display = "none";
        }
    }
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
//#endregion