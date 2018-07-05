//节流函数
function throttle(fn, gapTime = 1500) {
    let lastTime = null;

    return function () {
        let nowTime = new Date();

        if (nowTime - lastTime > gapTime || !lastTime) {
            // 通过 apply 改变函数内部 this 指向
            fn.apply(this, arguments);
            lastTime = nowTime;
        }
    };
}

var nothing = function () {
    document.getElementById('nothing').onscroll = function () {
        console.log("普通滚动")
    }
}

var throttleScroll = function () {
    document.getElementById('throttle').onscroll = 
        throttle(() => {
            console.log('节流滚动')
        },300)
}

nothing();

throttleScroll();
