window.addEventListener('load', function () {
    var body = document.querySelector('body');
    var vntusVideos = document.querySelector('#vntusvideos');
    var jsMvVideo = document.querySelector('.js-mv-video');
    var mainWrapper = document.querySelector('.main-wrapper');
    var sectionMv = document.querySelector('.section-mv');
    var jsMvVideo = document.querySelector('.js-mv-video')
    var sectionCatch = document.querySelector('.section-catch');
    var layerAnimation = document.querySelector('.layer-animation');
    // console.log(layerAnimation);
    var en = layerAnimation.querySelector('.en');
    var ens = en.querySelectorAll('figure');
    var layerFixed = document.querySelector('.layer-fixed');
    var logo = document.querySelector('.logo');
    var imgs = logo.querySelectorAll('img');
    var btn = document.querySelector('.btn');
    var momentMain01 = document.querySelector('#moment-main-01');
    var momentSub01 = document.querySelector('#moment-sub-01');
    var momentSub02 = document.querySelector('#moment-sub-02');
    var momentSub03 = document.querySelector('#moment-sub-03');
    var txtMoment01 = document.querySelector('#txt-moment-01');

    var reallyMain01 = document.querySelector('#really-main-01');
    var reallySub01 = document.querySelector('#really-sub-01');
    var reallySub02 = document.querySelector('#really-sub-02');
    var reallySub03 = document.querySelector('#really-sub-03');
    var reallySub04 = document.querySelector('#really-sub-04');
    var txtReally01 = document.querySelector('#txt-really-01');

    var emotionMain01 = document.querySelector('#emotion-main-01');
    var emotionSub01 = document.querySelector('#emotion-sub-01');
    var emotionSub02 = document.querySelector('#emotion-sub-02');
    var emotionSub03 = document.querySelector('#emotion-sub-03');
    var txtEmotion01 = document.querySelector('#txt-emotion-01');

    var catch01 = document.querySelector('#catch-01');
    var catch02 = document.querySelector('#catch-02');

    var unmixMain01 = document.querySelector('#unmix-main-01');
    var unmixSub01 = document.querySelector('#unmix-sub-01');
    var unmixSub02 = document.querySelector('#unmix-sub-02');
    var unmixSub03 = document.querySelector('#unmix-sub-03');
    var txtUnmix01 = document.querySelector('#txt-unmix-01');


    var ennuiMain01 = document.querySelector('#ennui-main-01');
    var ennuiSub01 = document.querySelector('#ennui-sub-01');
    var ennuiSub02 = document.querySelector('#ennui-sub-02');
    var ennuiSub03 = document.querySelector('#ennui-sub-03');
    var txtEnnui01 = document.querySelector('#txt-ennui-01');

    var mysticalMain01 = document.querySelector('#mystical-main-01');
    var mysticalSub01 = document.querySelector('#mystical-sub-01');
    var mysticalSub02 = document.querySelector('#mystical-sub-02');
    var mysticalSub03 = document.querySelector('#mystical-sub-03');
    var txtMystical01 = document.querySelector('#txt-mystical-01');

    var arrowPrev = document.querySelector('.js-slider-prev');
    var arrowNext = document.querySelector('.js-slider-next');
    var sliderArrows = document.querySelector('.slider-arrows');
    var swiperWrapper = document.querySelector('.swiper-wrapper');
    var sliderPagination = document.querySelector('.js-slider-pagination');
    var swiperWrapperWidth = swiperWrapper.offsetWidth;

    var mainLine1 = document.querySelector('#main-line1');
    var mainLine2 = document.querySelector('#main-line2');








    // console.log(swiperWrapperWidth);
    // console.log(swiperWrapper.children[0].offsetWidth);

    for (var i = 0; i < swiperWrapper.children.length; i++) {
        var span = document.createElement('span');
        span.setAttribute('index', i);
        sliderPagination.appendChild(span);
        span.addEventListener('click', function () {
            index = this.getAttribute('index');
            var translatex = -index * swiperWrapperWidth;
            swiperWrapper.style.transition = 'all .5s';
            swiperWrapper.style.transform = 'translateX(' + translatex + 'px)';
        })

    }
    sliderPagination.children[0].className = 'swiper-pagination-bullet-active';



    var first = swiperWrapper.children[0].cloneNode(true);
    var last = swiperWrapper.children[(swiperWrapper.children.length - 1)].cloneNode(true);
    // 前后各拷贝一个图片
    swiperWrapper.insertBefore(last, swiperWrapper.children[0]);
    swiperWrapper.appendChild(first);

    // console.log(swiperWrapper.children.length);

    swiperWrapper.addEventListener('mouseenter', function () {
        console.log('鼠标进入');

        clearInterval(timer);
        timer = null;
    })

    swiperWrapper.addEventListener('mouseleave', function () {
        console.log('鼠标离开');

        clearInterval(timer);
        timer = setInterval(function () {
            arrowNext.click();
            // console.log('开始点击');
            // console.log(flag);

        }, 2000);
    })

    sliderArrows.addEventListener('mouseenter', function () {
        // console.log('鼠标进入');
        clearInterval(timer);
        timer = null;
    })

    sliderArrows.addEventListener('mouseleave', function () {
        // console.log('鼠标离开');
        clearInterval(timer);
        timer = setInterval(function () {
            arrowNext.click();

        }, 2000);
    })

    sliderPagination.addEventListener('mouseenter', function () {
        // console.log('鼠标进入');
        clearInterval(timer);
        timer = null;
    })

    sliderPagination.addEventListener('mouseleave', function () {
        // console.log('鼠标离开');
        clearInterval(timer);
        timer = setInterval(function () {
            arrowNext.click();

        }, 2000);
    })

    var index = 0;
    var timer = setInterval(function () {
        arrowNext.click();

    }, 2000);

    var flag = true;

    function change() {
        flag = true;
        // console.log('定时器打开了');
    }
    function change2() {
        flag2 = true;
        // console.log('定时器打开了');
    }
    arrowNext.addEventListener('click', function () {
        // swiperWrapperWidth = swiperWrapper.offsetWidth;
        // console.log('监听到右箭头', flag);

        if (flag) {
            flag = false;
            index++;
            var translatex = -index * swiperWrapperWidth;
            swiperWrapper.style.transition = 'all .5s';
            swiperWrapper.style.transform = 'translateX(' + translatex + 'px)';
            setTimeout(change, 500);
        }
    })

    arrowPrev.addEventListener('click', function () {
        // console.log('监听到左箭头', flag);
        if (flag) {
            flag = false;
            index--;
            var translatex = -index * swiperWrapperWidth;
            swiperWrapper.style.transition = 'all .5s';
            swiperWrapper.style.transform = 'translateX(' + translatex + 'px)';
            setTimeout(change, 500);

        }

    })


    swiperWrapper.addEventListener('transitionend', function () {
        // 无缝滚动
        // console.log(swiperWrapper.children.length);
        // console.log(index);
        swiperWrapperWidth = swiperWrapper.offsetWidth;

        if (index >= swiperWrapper.children.length - 2) {
            index = 0;

            swiperWrapper.style.transition = 'none';
            var translatex = -index * swiperWrapperWidth;
            swiperWrapper.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 1;
            swiperWrapper.style.transition = 'none';
            var translatex = -index * swiperWrapperWidth;
            swiperWrapper.style.transform = 'translateX(' + translatex + 'px)';
        }
        // console.log(index);
        // console.log(swiperWrapper.offsetLeft);



        // 生成导航点
        sliderPagination.querySelector('.swiper-pagination-bullet-active').classList.remove('swiper-pagination-bullet-active');
        sliderPagination.children[index].classList.add('swiper-pagination-bullet-active');
        // flag = true;
        // flag2 = true;
        // console.log('监听过渡');
    });


    // 4. 手指滑动轮播图 
    // 触摸元素 touchstart： 获取手指初始坐标
    var startX = 0;
    var moveX = 0; // 后面我们会使用这个移动距离所以要定义一个全局变量
    // var flag1 = false;
    swiperWrapper.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX;
        // console.log(e.targetTouches);
        // 手指触摸的时候就停止定时器
        clearInterval(timer);
    });
    // 移动手指 touchmove： 计算手指的滑动距离， 并且移动盒子
    swiperWrapper.addEventListener('touchmove', function (e) {
        // 计算移动距离
        moveX = e.targetTouches[0].pageX - startX;
        // 移动盒子：  盒子原来的位置 + 手指移动的距离 
        var translatex = -index * swiperWrapperWidth + moveX;
        // 手指拖动的时候，不需要动画效果所以要取消过渡效果
        swiperWrapper.style.transition = 'none';
        swiperWrapper.style.transform = 'translateX(' + translatex + 'px)';
        
        e.preventDefault(); // 阻止滚动屏幕的行为
    });
    // 手指离开 根据移动距离去判断是回弹还是播放上一张下一张
    swiperWrapper.addEventListener('touchend', function (e) {
            // (1) 如果移动距离大于90像素我们就播放上一张或者下一张
            if (Math.abs(moveX) > 90) {
                // 如果是右滑就是 播放上一张 moveX 是正值
                if (moveX > 0) {
                    index--;
                    var translatex = -index * swiperWrapperWidth;
                    swiperWrapper.style.transition = 'all .5s';
                    swiperWrapper.style.transform = 'translateX(' + translatex + 'px)';
                } else {
                    // 如果是左滑就是 播放下一张 moveX 是负值
                // 如果是左滑就是 播放下一张 moveX 是负值
                index++;
                var translatex = -index * swiperWrapperWidth;
                swiperWrapper.style.transition = 'all .5s';
                swiperWrapper.style.transform = 'translateX(' + translatex + 'px)';
                ;
                }
            } else {
                // (2) 如果移动距离小于90像素我们就回弹
                var translatex = -index * swiperWrapperWidth;
                swiperWrapper.style.transition = 'all .1s';
                swiperWrapper.style.transform = 'translateX(' + translatex + 'px)';
            }
        
        // 手指离开的时候就重新开启定时器
        clearInterval(timer);
        timer = setInterval(function () {
            arrowNext.click();
        }, 2000);
    });

    // 4. 鼠标滑动轮播图 
    // 触摸元素 touchstart： 获取手指初始坐标
    // 后面我们会使用这个移动距离所以要定义一个全局变量
    // var flag2 = true;
    var startX2 = 0;
    swiperWrapper.addEventListener('mousedown', function (e) {
        // var flag2 = false;

            startX2 = e.pageX;
            // 手指触摸的时候就停止定时器
            clearInterval(timer);
            // 移动手指 touchmove： 计算手指的滑动距离， 并且移动盒子
            document.addEventListener('mousemove', move);

    });
    function move(e) {
        // 计算移动距离
        moveX = e.pageX - startX2;
        // 移动盒子：  盒子原来的位置 + 手指移动的距离 
        var translatex = -index * swiperWrapperWidth + moveX;
        // 手指拖动的时候，不需要动画效果所以要取消过渡效果
        swiperWrapper.style.transition = 'none';
        swiperWrapper.style.transform = 'translateX(' + translatex + 'px)';
        // flag2 = true; // 如果用户手指移动过我们再去判断否则不做判断效果
    }

    // 手指离开 根据移动距离去判断是回弹还是播放上一张下一张
    document.addEventListener('mouseup', function () {
        document.removeEventListener('mousemove', move);
        // if (flag2) {
        // flag2 = false;
        console.log('监听到mouseup');
        console.log('监听到', moveX);
        // (1) 如果移动距离大于50像素我们就播放上一张或者下一张
        if (Math.abs(moveX) > 190) {
            // 如果是右滑就是 播放上一张 moveX 是正值
            // swiperWrapper.style.transition = '';

            if (moveX > 0) {
                index--;
                var translatex = -index * swiperWrapperWidth;
                swiperWrapper.style.transition = 'all .5s';
                swiperWrapper.style.transform = 'translateX(' + translatex + 'px)';
            } else {
                // 如果是左滑就是 播放下一张 moveX 是负值
                index++;
                var translatex = -index * swiperWrapperWidth;
                swiperWrapper.style.transition = 'all .5s';
                swiperWrapper.style.transform = 'translateX(' + translatex + 'px)';
                ;
            }
        } else {
            // (2) 如果移动距离小于190像素我们就回弹
            var translatex = -index * swiperWrapperWidth;
            swiperWrapper.style.transition = 'all .1s';
            swiperWrapper.style.transform = 'translateX(' + translatex + 'px)';
        }
        moveX = 0;
        // setTimeout(change2, 500);


        // 手指离开的时候就重新开启定时器
        // clearInterval(timer);
        // timer = setInterval(function () {
        //     arrowNext.click();
        // }, 2000);
        // }
    });






    // 圆圈变化

    // function circleChange() {
    //     for (var i = 0; i < sliderPagination.children.length;i++){
    //         sliderPagination.children[1].className = '';
    //     }
    //     sliderPagination.children[circle].className = 'swiper-pagination-bullet-active';

    // }



    function mvResize() {

        // console.log('重新计算大小');
        sectionMv.style.height = document.documentElement.clientHeight + 'px';
        jsMvVideo.style.height = document.documentElement.clientHeight + 'px';
        swiperWrapperWidth = swiperWrapper.offsetWidth;
        body.style.height = 20300 / 1921 * document.documentElement.clientWidth + 'px';

        // vntusVideos.style.left = 0;
        // vntusVideos.style.top = 0;

        // if (document.documentElement.clientHeight > 900) {

        //     if (1600 / 900 * document.documentElement.clientHeight > document.documentElement.clientWidth) {
        //         vntusVideos.style.left = -(1600 / 900 * document.documentElement.clientHeight - document.documentElement.clientWidth) / 2 + 'px';
        //     }
        // }

        // if (document.documentElement.clientHeight > 1600) {
        //     if (900 / 1600 * document.documentElement.clientWidth > document.documentElement.clientHeight) {
        //         vntusVideos.style.top = -(900 / 1600 * document.documentElement.clientWidth - document.documentElement.clientHeight) / 2 + 'px';
        //     }
        // }

        // 视频居中自适应
        if (document.documentElement.clientHeight * 16 / 9 > document.documentElement.clientWidth) {
            if (document.documentElement.clientHeight >= 900) {
                vntusVideos.style.left = -(16 / 9 * document.documentElement.clientHeight - document.documentElement.clientWidth) / 2 + 'px';
                vntusVideos.style.top = 0;

            } else {
                vntusVideos.style.left = -(1600 - document.documentElement.clientWidth) / 2 + 'px';
                vntusVideos.style.top = -(900 - document.documentElement.clientHeight) / 2 + 'px';
            }

        } else {
            if (document.documentElement.clientWidth >= 1600) {
                vntusVideos.style.top = -(900 / 1600 * document.documentElement.clientWidth - document.documentElement.clientHeight) / 2 + 'px';
                vntusVideos.style.left = 0;

            } else {
                vntusVideos.style.left = -(1600 - document.documentElement.clientWidth) / 2 + 'px';
                vntusVideos.style.top = -(900 - document.documentElement.clientHeight) / 2 + 'px';
            }

        }


        // console.log('这是document.documentElement.clientWidth', document.documentElement.clientWidth);
        // console.log('这是document.documentElement.clientWidth', document.documentElement.clientWidth); console.log('这是document.documentElement.clientHeight', document.documentElement.clientHeight);
        // console.log('这是document.documentElement.clientHeight', document.documentElement.clientHeight);



        // console.log(-(1600/900 * document.documentElement.clientHeight - document.documentElement.clientWidth)/2);
        // jsMvVideo.style.left = document
        // jsMvVideo.style.width = document.documentElement.clientWidth + 'px';
        layerAnimation.style.height = document.documentElement.clientHeight + 'px';
        en.style.top = (document.documentElement.clientHeight / 2 - en.clientHeight) + 'px';

        scrollEvent();


    };

    // 加载页面时的开场动画
    ens[4].addEventListener('animationend',
        function () {
            layerFixed.style.zIndex = 0;
            // layerAnimation.style.backgroundColor = 'transparent';
            // 画面渐出
            layerAnimation.style.opacity = 0;
            logo.style.left = '-0.53125rem'
            // console.log(111111);
            // console.log(layerFixed);



        }
    )
    // ens[0].addEventListener('animationstart', mvResize);
    //左侧图片根据页面滚动变化颜色
    document.addEventListener('scroll', function () {
        let changeHeight = sectionCatch.offsetTop - window.pageYOffset;//下方盒子距离浏览器可视区的高度
        // console.log(changeHeight);
        if (changeHeight <= 200) {
            imgs[0].style.opacity = '0';
            imgs[1].style.opacity = '1';
            mainLine1.style.transform = 'translateY(0)';
            mainLine2.style.transform = 'translateY(0)';

        } else {
            imgs[0].style.opacity = '1';
            imgs[1].style.opacity = '0';
        }
        // if (changeHeight<=0){
        //     mainLine1.style.margin = '0 auto 0 10%';
        //     mainLine2.style.margin = '0 auto 0 10%';
        // }


    })
    mvResize();
    window.addEventListener('resize', mvResize);
    // 下箭头按钮
    btn.addEventListener('click', function () {
        console.log(this);
        mainWrapper.style.transition = 'transform ease 2s';
        window.scrollTo(0, sectionCatch.offsetTop);

    })
    window.addEventListener('transitionend', function () {
        mainWrapper.style.transition = 'transform ease-out .5s';


    })

    window.addEventListener('scroll', scrollEvent);

    // window.addEventListener('scroll', scrollMain(20));
    function scrollMain(wait) {
        // console.log(window.pageYOffset);
        let timeout;

        return function () {
            mainWrapper.style.transition = '';


            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                // func.apply(context)
                console.log(222);
                mainWrapper.style.transition = 'transform ease-out 1s ';
            }, wait);
        }

        // mainWrapper.style.transform = 'translate3d(0px,-' + window.pageYOffset - 100 + 'px,0px)';
        // if (timeout) {
        //     clearTimeout(timeout);
        // }

        // var timeout = setTimeout(function () {
        //     // mainWrapper.style.transition = 'transform ease .5s';
        //     mainWrapper.style.transform = 'translate3d(0px,-' + window.pageYOffset + 'px,0px)';
        // }, 100);
    }


    function scrollEvent() {

        // setTimeout(() => {
        //     // func.apply(context)
        //     console.log(111);
        //     mainWrapper.style.transform = 'translate3d(0px,-' + window.pageYOffset + 'px,0px)';
        //     // mainWrapper.style.transition = 'transform ease 1.5s';
        // }, 180)
        // mainWrapper.style.transition = '';
        // console.log(111);
        // mainWrapper.style.transform = 'translate3d(0px,-' + (window.pageYOffset - 100) + 'px,0px)';
        mainWrapper.style.transform = 'translate3d(0px,-' + window.pageYOffset + 'px,0px)';







        // 第一个图函数
        var scale = document.documentElement.clientWidth / 1920;
        var momentMain01Scroll = 600 * scale;
        var momentSub01Scroll = 800 * scale;
        var momentSub02Scroll = 1500 * scale;
        var momentSub03Scroll = 1700 * scale;
        var txtMoment01Scroll = 1800 * scale;
        var momentFlagScroll1 = 1750 * scale;
        var momentFlagScroll2 = 2600 * scale;
        var momentFlag1 = false;
        var momentFlag2 = false;
        var momentText = document.querySelector('#moment-text');
        console.log();
        if (window.pageYOffset > momentFlagScroll1) {
            momentFlag1 = true;
            momentText.style.transform = 'translate3d(0,0,0)';
        }
        if (momentFlag1) {
            if (window.pageYOffset > momentMain01Scroll) {
                let pathLength = window.pageYOffset - momentMain01Scroll;
                if (pathLength < 4100 * scale) {
                    momentMain01.style.transform = 'translate3d(0px,' + (52.4 * scale - pathLength / 26) + 'px,0px)'
                }
            }

            if (window.pageYOffset > momentSub01Scroll) {
                let pathLength = window.pageYOffset - momentSub01Scroll;
                if (pathLength < 4100 * scale) {
                    momentSub01.style.transform = 'translate3d(0px,' + (82.5 * scale - pathLength / 17) + 'px,0px)'
                }
            }
        }
        if (window.pageYOffset > momentFlagScroll2) {
            momentFlag2 = true;
            momentText.style.transform = 'translate3d(0,0,0)';
        }
        if (momentFlag2) {


            // var momentSub02ScrollTo = window.pageYOffset-momentSub02Scroll;
            if (window.pageYOffset > momentSub02Scroll) {
                let pathLength = window.pageYOffset - momentSub02Scroll;
                if (pathLength < 4100 * scale) {
                    momentSub02.style.transform = 'translate3d(0px,' + (122 * scale - pathLength / 13) + 'px,0px)'
                }
            }

            if (window.pageYOffset > momentSub03Scroll) {
                let pathLength = window.pageYOffset - momentSub03Scroll;
                if (pathLength < 4100 * scale) {
                    momentSub03.style.transform = 'translate3d(0px,' + (306 * scale - pathLength / 6) + 'px,0px)'
                }
            }

            if (window.pageYOffset > txtMoment01Scroll) {
                let pathLength = window.pageYOffset - txtMoment01Scroll;

                if (pathLength < 4100 * scale) {
                    txtMoment01.style.transform = 'translate3d(0px,' + (38.3 - pathLength / 25.7) * scale + 'px,0px)'
                }
            }
        }








        // 第二个图函数
        var reallyMain01Scroll = 2700 * scale;
        var reallySub01Scroll = 2900 * scale;
        var reallySub02Scroll = 3400 * scale;
        var reallySub03Scroll = 3500 * scale;
        var reallySub04Scroll = 3800 * scale;
        var txtReally01Scroll = 3900 * scale;
        var reallyFlagScroll1 = 4000 * scale;
        var reallyFlagScroll2 = 5000 * scale;
        var reallyFlag1 = false;
        var reallyFlag2 = false;
        var reallyText = document.querySelector('#really-text');
        if (window.pageYOffset > reallyFlagScroll1) {
            reallyFlag1 = true;
            reallyText.style.transform = 'translate3d(0,0,0)'
        }

        if (reallyFlag1) {
            if (window.pageYOffset > reallyMain01Scroll) {
                let pathLength = window.pageYOffset - reallyMain01Scroll;
                if (pathLength < 4100 * scale) {
                    reallyMain01.style.transform = 'translate3d(0px,' + (52 * scale - pathLength / 26) + 'px,0px)'
                }
            }

            if (window.pageYOffset > reallySub01Scroll) {
                let pathLength = window.pageYOffset - reallySub01Scroll;
                if (pathLength < 4100 * scale) {
                    reallySub01.style.transform = 'translate3d(0px,' + (81.5 * scale - pathLength / 17) + 'px,0px)'
                }
            }

            if (window.pageYOffset > reallySub02Scroll) {
                let pathLength = window.pageYOffset - reallySub02Scroll;
                if (pathLength < 4100 * scale) {
                    reallySub02.style.transform = 'translate3d(0px,' + (117.7 * scale - pathLength / 12.5) + 'px,0px)'
                }
            }


            if (window.pageYOffset > reallySub03Scroll) {
                let pathLength = window.pageYOffset - reallySub03Scroll;
                if (pathLength < 4100 * scale) {
                    reallySub03.style.transform = 'translate3d(0px,' + (165 * scale - pathLength / 10.2) + 'px,0px)'
                }
            }
        }

        if (window.pageYOffset > reallyFlagScroll2) {
            reallyFlag2 = true;
        }

        if (reallyFlag2) {
            if (window.pageYOffset > reallySub04Scroll) {
                let pathLength = window.pageYOffset - reallySub04Scroll;
                if (pathLength < 4100 * scale) {
                    reallySub04.style.transform = 'translate3d(0px,' + (215 * scale - pathLength / 8.6) + 'px,0px)'
                }
            }

            if (window.pageYOffset > txtReally01Scroll) {
                let pathLength = window.pageYOffset - txtReally01Scroll;
                if (pathLength < 4100 * scale) {
                    txtReally01.style.transform = 'translate3d(0px,' + (38.32 * scale - pathLength / 25.3) + 'px,0px)'
                }
            }
        }



        // 第三个图函数
        var emotionMain01Scroll = 4900 * scale;
        var emotionSub01Scroll = 5000 * scale;
        var emotionSub02Scroll = 5700 * scale;
        var emotionSub03Scroll = 5900 * scale;
        var txtEmotion01Scroll = 6000 * scale;

        var emotionFlagScroll1 = 6200 * scale;
        var emotionFlagScroll2 = 6700 * scale;
        var emotionFlagScroll3 = 7000 * scale;
        var emotionFlag1 = false;
        var emotionFlag2 = false;
        var emotionFlag3 = false;
        var emotionText = document.querySelector('#emotion-text');

        if (window.pageYOffset > emotionFlagScroll1) {
            emotionFlag1 = true;
            emotionText.style.transform = 'translate3d(0,0,0)'
        }

        if (emotionFlag1) {
            if (window.pageYOffset > emotionMain01Scroll) {
                let pathLength = window.pageYOffset - emotionMain01Scroll;
                if (pathLength < 4000 * scale) {
                    emotionMain01.style.transform = 'translate3d(0px,' + (48.5 - pathLength / 26) + 'px,0px)'
                }
            }

            if (window.pageYOffset > emotionSub01Scroll) {
                let pathLength = window.pageYOffset - emotionSub01Scroll;
                if (pathLength < 4000 * scale) {
                    emotionSub01.style.transform = 'translate3d(0px,' + (73.7 * scale - pathLength / 17.5) + 'px,0px)'
                }
            }
        }

        if (window.pageYOffset > emotionFlagScroll2) {
            emotionFlag2 = true;
        }

        if (emotionFlag2) {
            if (window.pageYOffset > emotionSub02Scroll) {
                let pathLength = window.pageYOffset - emotionSub02Scroll;
                if (pathLength < 4000 * scale) {
                    emotionSub02.style.transform = 'translate3d(0px,' + (115.6 * scale - pathLength / 13) + 'px,0px)'
                }
            }

            if (window.pageYOffset > emotionSub03Scroll) {
                let pathLength = window.pageYOffset - emotionSub03Scroll;
                if (pathLength < 4000 * scale) {
                    emotionSub03.style.transform = 'translate3d(0px,' + (203.7 * scale - pathLength / 8.7) + 'px,0px)'
                }
            }


        }

        if (window.pageYOffset > emotionFlagScroll3) {
            emotionFlag3 = true;
        }

        if (emotionFlag3) {
            if (window.pageYOffset > txtEmotion01Scroll) {
                let pathLength = window.pageYOffset - txtEmotion01Scroll;
                if (pathLength < 4000 * scale) {
                    txtEmotion01.style.transform = 'translate3d(0px,' + (33 * scale - pathLength / 26.5) + 'px,0px)'
                }
            }
        }





        // 第四个图函数


        var catch01Scroll = 7200 * scale;
        var catch02Scroll = 8600 * scale;

        var catchFlagScroll1 = 8400 * scale;
        var catchFlag1 = false;
        var catchText = document.querySelector('#catch-text');

        if (window.pageYOffset > catchFlagScroll1) {
            catchFlag1 = true;
            catchText.style.transform = 'translate3d(0, 0, 0)';

        }
        if (catchFlag1) {
            if (window.pageYOffset > catch01Scroll) {
                let pathLength = window.pageYOffset - catch01Scroll;
                if (pathLength < 4100 * scale) {
                    catch01.style.transform = 'translate3d(0px,' + (97.6 * scale - pathLength / 17) + 'px,0px)'
                }
            }

            if (window.pageYOffset > catch02Scroll) {
                let pathLength = window.pageYOffset - catch02Scroll;
                if (pathLength < 4100 * scale) {
                    catch02.style.transform = 'translate3d(0px,' + (239 * scale - pathLength / 8.4) + 'px,0px)'
                }
            }

        }


        // 第五个图函数

        var unmixMain01Scroll = 9000 * scale;
        var unmixSub01Scroll = 9600 * scale;
        var unmixSub02Scroll = 10000 * scale;
        var unmixSub03Scroll = 10300 * scale;
        var txtUnmix01Scroll = 10200 * scale;


        var unmixFlagScroll1 = 10500 * scale;
        var unmixFlagScroll2 = 11000 * scale;
        var unmixFlagScroll3 = 11300 * scale;
        var unmixFlag1 = false;
        var unmixFlag2 = false;
        var unmixFlag3 = false;
        var unmixText = document.querySelector('#unmix-text');

        if (window.pageYOffset > unmixFlagScroll1) {
            unmixFlag1 = true;
            unmixText.style.transform = 'translate3d(0, 0, 0)';

        }

        if (unmixFlag1) {
            if (window.pageYOffset > unmixMain01Scroll) {
                let pathLength = window.pageYOffset - unmixMain01Scroll;
                if (pathLength < 4100 * scale) {
                    unmixMain01.style.transform = 'translate3d(0px,' + (48.6 * scale - pathLength / 27) + 'px,0px)'
                }
            }
        }

        if (window.pageYOffset > unmixFlagScroll2) {
            unmixFlag2 = true;
        }

        if (unmixFlag2) {
            if (window.pageYOffset > unmixSub01Scroll) {
                let pathLength = window.pageYOffset - unmixSub01Scroll;
                if (pathLength < 4100 * scale) {
                    unmixSub01.style.transform = 'translate3d(0px,' + (58.1 * scale - pathLength / 21.5) + 'px,0px)'
                }
            }

            if (window.pageYOffset > unmixSub02Scroll) {
                let pathLength = window.pageYOffset - unmixSub02Scroll;
                if (pathLength < 4100 * scale) {
                    unmixSub02.style.transform = 'translate3d(0px,' + (117.9 * scale - pathLength / 13.5) + 'px,0px)'
                }
            }
        }
        if (window.pageYOffset > unmixFlagScroll3) {
            unmixFlag3 = true;
        }

        if (unmixFlag3) {

            if (window.pageYOffset > unmixSub03Scroll) {
                let pathLength = window.pageYOffset - unmixSub03Scroll;
                if (pathLength < 4100 * scale) {
                    unmixSub03.style.transform = 'translate3d(0px,' + (155.1 * scale - pathLength / 10.8) + 'px,0px)'
                }
            }
            if (window.pageYOffset > txtUnmix01Scroll) {
                let pathLength = window.pageYOffset - txtUnmix01Scroll;
                if (pathLength < 4100 * scale) {
                    txtUnmix01.style.transform = 'translate3d(0px,' + (34.4 * scale - pathLength / 27) + 'px,0px)'
                }
            }
        }




        // 第六个图函数

        var ennuiMain01Scroll = 11300 * scale;
        var ennuiSub01Scroll = 11500 * scale;
        var ennuiSub02Scroll = 12100 * scale;
        var ennuiSub03Scroll = 12300 * scale;
        var txtEnnui01Scroll = 12400 * scale;

        var ennuiFlagScroll1 = 12600 * scale;
        var ennuiFlagScroll2 = 13100 * scale;
        var ennuiFlagScroll3 = 13400 * scale;

        var ennuiFlag1 = false;
        var ennuiFlag2 = false;
        var ennuiFlag3 = false;
        var ennuiText = document.querySelector('#ennui-text');
        if (window.pageYOffset > ennuiFlagScroll1) {
            ennuiFlag1 = true;
            ennuiText.style.transform = 'translate3d(0, 0, 0)';
        }
        if (ennuiFlag1) {
            if (window.pageYOffset > ennuiMain01Scroll) {
                let pathLength = window.pageYOffset - ennuiMain01Scroll;
                if (pathLength < 4000 * scale) {
                    ennuiMain01.style.transform = 'translate3d(0px,' + (48.8 - pathLength / 26.2) + 'px,0px)'
                }
            }
        }
        if (window.pageYOffset > ennuiFlagScroll2) {
            ennuiFlag2 = true;
        }
        if (ennuiFlag2) {
            if (window.pageYOffset > ennuiSub01Scroll) {
                let pathLength = window.pageYOffset - ennuiSub01Scroll;
                if (pathLength < 4000 * scale) {
                    ennuiSub01.style.transform = 'translate3d(0px,' + (72.4 * scale - pathLength / 17.5) + 'px,0px)'
                }
            }
        }

        if (window.pageYOffset > ennuiFlagScroll3) {
            ennuiFlag3 = true;
        }
        if (ennuiFlag3) {
            if (window.pageYOffset > ennuiSub02Scroll) {
                let pathLength = window.pageYOffset - ennuiSub02Scroll;
                if (pathLength < 4000 * scale) {
                    ennuiSub02.style.transform = 'translate3d(0px,' + (117.7 * scale - pathLength / 13.2) + 'px,0px)'
                }
            }
            if (window.pageYOffset > ennuiSub03Scroll) {
                let pathLength = window.pageYOffset - ennuiSub03Scroll;
                if (pathLength < 4000 * scale) {
                    ennuiSub03.style.transform = 'translate3d(0px,' + (207.8 - pathLength / 8.75) + 'px,0px)'
                }
            }
            if (window.pageYOffset > txtEnnui01Scroll) {
                let pathLength = window.pageYOffset - txtEnnui01Scroll;
                if (pathLength < 4000 * scale) {
                    txtEnnui01.style.transform = 'translate3d(0px,' + (34.4 * scale - pathLength / 26.3) + 'px,0px)'
                }
            }
        }





        // 第七个图函数

        var mysticalMain01Scroll = 13500 * scale;
        var mysticalSub01Scroll = 14100 * scale;
        var mysticalSub02Scroll = 14300 * scale;
        var mysticalSub03Scroll = 14900 * scale;
        var txtMystical01Scroll = 14700 * scale;
        var mysticalFlagScroll1 = 14800 * scale;
        var mysticalFlagScroll2 = 15300 * scale;
        var mysticalFlagScroll3 = 15500 * scale;
        var mysticalFlag1 = false;
        var mysticalFlag2 = false;
        var mysticalFlag3 = false;

        var mysticalText = document.querySelector('#mystical-text');


        if (window.pageYOffset > mysticalFlagScroll1) {
            mysticalFlag1 = true;
            mysticalText.style.transform = 'translate3d(0, 0, 0)';

        }

        if (mysticalFlag1) {
            if (window.pageYOffset > mysticalMain01Scroll) {
                let pathLength = window.pageYOffset - mysticalMain01Scroll;
                if (pathLength < 4000 * scale) {
                    mysticalMain01.style.transform = 'translate3d(0px,' + (48.8 - pathLength / 26.2) + 'px,0px)'
                }
            }
        }

        if (window.pageYOffset > mysticalFlagScroll2) {
            mysticalFlag2 = true;

        }
        if (mysticalFlag2) {
            if (window.pageYOffset > mysticalSub01Scroll) {
                let pathLength = window.pageYOffset - mysticalSub01Scroll;
                if (pathLength < 4000 * scale) {
                    mysticalSub01.style.transform = 'translate3d(0px,' + (76.8 * scale - pathLength / 17.5) + 'px,0px)'
                }
            }

            if (window.pageYOffset > mysticalSub02Scroll) {
                let pathLength = window.pageYOffset - mysticalSub02Scroll;
                if (pathLength < 4000 * scale) {
                    mysticalSub02.style.transform = 'translate3d(0px,' + (119.7 * scale - pathLength / 13.2) + 'px,0px)'
                }
            }
        }

        if (window.pageYOffset > mysticalFlagScroll3) {
            mysticalFlag3 = true;

        }

        if (mysticalFlag3) {
            if (window.pageYOffset > mysticalSub03Scroll) {
                let pathLength = window.pageYOffset - mysticalSub03Scroll;
                if (pathLength < 3600 * scale) {
                    mysticalSub03.style.transform = 'translate3d(0px,' + (154.3 * scale - pathLength / 11.0) + 'px,0px)'
                }
            }
            if (window.pageYOffset > txtMystical01Scroll) {
                let pathLength = window.pageYOffset - txtMystical01Scroll;
                if (pathLength < 3700 * scale) {
                    txtMystical01.style.transform = 'translate3d(0px,' + (34.6 * scale - pathLength / 26.3) + 'px,0px)'
                }
            }
        }




    }


    // 根据滚动条位置开始动画





})