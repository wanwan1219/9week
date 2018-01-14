/**
 * Created by 000 on 2017/9/20.
 */
(function(num){
    var resizeEvt="orientationchange" in window ? "orientationchange":"resize",
        doc = document.documentElement,
        recalc = function () {
            var clientWidth = doc.clientWidth;
            if (!clientWidth) return;
            if (clientWidth > num) {
                clientWidth = num
            }
            doc.style.fontSize = 100 * (clientWidth / num) + "px";
        };
    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt,recalc);
    document.addEventListener("DOMContentLoaded", recalc);
})(640);