(()=>{var A={2546:(A,e,t)=>{"use strict";t.r(e)},445:(A,e,t)=>{"use strict";t.r(e)},4157:(A,e,t)=>{"use strict";t.r(e)},7761:(A,e,t)=>{"use strict";t.r(e)},9412:(A,e,t)=>{"use strict";t.r(e)},400:(A,e,t)=>{"use strict";t.r(e)},9286:(A,e,t)=>{"use strict";t.r(e)},2590:(A,e,t)=>{"use strict";t.r(e)},8853:(A,e,t)=>{var n={"./bootstrap/bootstrap.min.css":2546,"./home_style.css":445,"./img_gallery.css":4157,"./jquery.fancybox.min.css":7761,"./modal-video.min.css":9412,"./personal.css":400,"./style.css":9286};function o(A){var e=s(A);return t(e)}function s(A){if(!t.o(n,A)){var e=new Error("Cannot find module '"+A+"'");throw e.code="MODULE_NOT_FOUND",e}return n[A]}o.keys=function(){return Object.keys(n)},o.resolve=s,A.exports=o,o.id=8853}},e={};function t(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return A[n](s,s.exports,t),s.exports}t.o=(A,e)=>Object.prototype.hasOwnProperty.call(A,e),t.r=A=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},(()=>{var A;(A=t(8853)).keys().forEach(A),t(2590),function(A){"use strict";function e(A,e,n){var o=function(A){if(window.sessionStorage){var e=window.sessionStorage.getItem(A+"Support");if("false"===e||"true"===e)return"true"===e}return null}(A);if(null===o){var s=new Image;return s.onload=s.onerror=function(){n(A,2===s.height)},void(s.src=e)}t(A,o)}function t(e,t){if(t){var n=A.documentElement;n.classList?n.classList.add("webp"===e?"webp":"avif"):n.className+=" "+e=="webp"?"webp":"avif",window.sessionStorage.setItem(e+"Support",!0)}else window.sessionStorage.setItem(e+"Support",!1)}e("webp","data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA",t),e("avif","data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAF0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgS0AAAAAABNjb2xybmNseAACAAIAAIAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAGVtZGF0EgAKBzgAPtAgIAkyUBAAAPWc41TP///4gHBX9H8XVK7gGeDllq8TYARA+8Tfsv7L+zPE24eIoIzE0WhHbrqcrTK9VEgEG/hwgB5rdCbvP8g3KYPdV88CvPJnptgQ",t)}(document);let e=document.getElementsByClassName("to-top");if(e[0]){e[0].onclick=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?e[0].style.display="block":e[0].style.display="none"}}window.onbeforeunload=()=>{for(const A of document.getElementsByTagName("form"))A.reset()};let n=1;function o(A){c(n+=A)}c(n);const s=document.getElementById("prev");document.getElementById("next").addEventListener("click",(()=>{o(1)})),s.addEventListener("click",(()=>{o(-1)}));const r=document.getElementsByClassName("current-slide");for(i=0;i<r.length;i++)r[i].addEventListener("click",l(i));function l(A){return()=>{c(n=A+1)}}function c(A){var e,t=document.getElementsByClassName("mySlides"),o=document.getElementsByClassName("demo"),s=document.getElementById("caption");for(A>t.length&&(n=1),A<1&&(n=t.length),e=0;e<t.length;e++)t[e].style.display="none";for(e=0;e<o.length;e++)o[e].className=o[e].className.replace(" active","");t[n-1].style.display="block",o[n-1].className+=" active",s.innerHTML=o[n-1].alt}})()})();