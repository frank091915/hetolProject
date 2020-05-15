module.exports = function refreshRem (win) {
    console.log('refreshRem')
    var tid;
    function refreshRem() {
        var designSize = 1920; // 设计图尺寸
        var html = document.documentElement;
        var wW = html.clientWidth; // 窗口宽度
        var rem = wW * 100 / designSize;
        document.documentElement.style.fontSize = rem + 'px';
    }

    win.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);
};