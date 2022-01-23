window.addEventListener('load',function() {
    function animate(obj, target) {

        // 先清除以前的定时器，只保留当前的一个定时器执行
        let a = 0.1;
        let v = 0;
        let pathLength =target-window.scrollY;
        let changeV = pathLength * 0.49+window.scrollY;
        let mubiao = window.scrollY;
        clearInterval(obj.timer);

        obj.timer = setInterval(function () {
            if (window.scrollY <= changeV) {
                v = v + a;
            } else {
                v = v - a;
                if (v <= 1) {
                    v = 1;
                    mubiao = Math.floor(mubiao);

                }
            }
            if (window.scrollY >= target) {
                clearInterval(obj.timer);
            }

            mubiao = mubiao + v;
            window.scrollTo(0, mubiao)
        }, 7);
    }
    
})