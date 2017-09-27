// rem布局适配
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

document.addEventListener('DOMContentLoaded', function() {
    //loading 加载中
    var loadDom = document.createElement("div");
    loadDom.className = "zui-loading";
    loadDom.innerHTML = '<div class="zui-toast"><i class="zui-loading-icon"></i><p class="zui-loading-content">loading</p></div>';
    document.body.appendChild(loadDom);
    setTimeout(function() {
        loadDom.parentNode.removeChild(loadDom);
    }, 500);
}, false);