//防抖函数
var debounce = function(callback,gapTime) {
    var timer = null;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(callback,gapTime);
    }
}
//注意这里监听document的scroll操作来触发函数
var nothing = function () {
    document.getElementById('nothing').onscroll = function () {
        console.log("普通滚动")
    }
}

var debounceScroll = function () {
    document.getElementById('debounce').onscroll = 
        debounce(() => {
            console.log('防抖滚动')
        },300)
}

nothing();

debounceScroll();
