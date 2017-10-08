/**
 * Created by Administrator on 2017/8/10.
    */
//侧边导航栏
$(function () {
    $(".silder_bar .bar1").on("click", function () {
        $("body,html").animate({
            scrollTop: $(".bg2").offset().top
        }, 300);
    });
    $(".silder_bar .bar2").on("click", function () {
        $("body,html").animate({
            scrollTop: $(".bg3").offset().top
        }, 300);
    });
    $(".silder_bar .bar3").on("click", function () {
        $("body,html").animate({
            scrollTop: $(".bg1").offset().top
        }, 300);
    });
    $(".back_cover").on("click", function () {
        $("body,html").animate({scrollTop: 0}
            , 300)
    });
    //侧边导航栏结束

    //bg2轮播图开始
    w = $(window).width();
    $(".new_section .new_ul li").css("width", w);
    function news(n) {
        $(".new_section .new_ul li").eq(n).fadeIn().siblings().fadeOut();
    };
    var tab = 0;
    $(".new_section .tab_ul li").on("click", function () {
        var index = $(this).index();
        $(this).addClass('con').siblings().removeClass('con');
        news(index);
    });
    $(".new_btn .btnLast").on("click", function () {
        if (tab == 0) {
            tab = 6;
        } else {
            tab--;
        }
        news(tab);
        $(".new_section .tab_ul li").eq(tab).addClass("con").siblings().removeClass("con");
    });
    $(".new_btn .btnNext").on("click", function () {
        if (tab == 6) {
            tab = 0;
        } else {
            tab++;
        }
        news(tab);
        $(".new_section .tab li").eq(tab).addClass("con").siblings().removeClass("con");
    });
//bg2轮播图结束
    //bg1插入视频控制视频播放
    $("#videoBtn").on("click", function () {
        $(".video").css("display", "block");
        $("video").attr("autoplay", "autoplay");
        var txt = '<video controls="controls" autoplay="autoplay">' +
            '<source src="video/zxymc30s.mp4" type="video/mp4">' +
            '</video>'
        $(".video").append(txt);
    });
    //点击关闭视频
    $(".video span").on("click", function () {
        $(".video").css("display", "none");
        $("video").remove();
    })
    //bg1插入视频控制视频结束

    //第二个轮播图开始
    for (var i = 0; i < $(".tab_box li").length;
         i++) {
        $(".tab_box li").eq(i).click(
            function () {
                var index = $(this).index();
                var target = $(".job_ul>li").eq(0).width() * index * (-1);
                $(".job_ul").animate({left: target}, 300);
                $(this).addClass("on").siblings().removeClass("on");
                console.log(2);
            }
        );
    }
    ;

    var setIndex = 0;
    var width = $(".job_ul>li").eq(0).width();

    function jobs(n) {
        var target = width * n * (-1);
        $(".job_ul").animate({
            left: target
        }, 200)
    }

    //左边按钮
    $(".job_btnLeft").click(function () {
        if (setIndex == 0) {
            setIndex = $(".job_ul li").length - 1;
            $(".job_ul")[0].style.left = -6 * width + "px";
            console.log(7 * width);
        }
        setIndex--;
        jobs(setIndex);
        $(".tab_box li").eq(setIndex).addClass("on").siblings().removeClass("on");
    })

    //右边按钮
    $(".job_btnRight").click(function () {
        if (setIndex == $(".job_ul li").length - 1) {
            setIndex = 0;
            $(".job_ul")[0].style.left = 0;
        }
        setIndex++;
        jobs(setIndex);
        if(setIndex == $(".job_ul li").length - 1){
            $(".tab_box li").eq(0).addClass("on").siblings().removeClass("on");
        }
        $(".tab_box li").eq(setIndex).addClass("on").siblings().removeClass("on");

    })


})
//
// bg3轮播图特效
// var jobBox = document.getElementById("job_box");
// var ul = jobBox.children[2];
// var list = ul.children;
// var tabBox = document.getElementById("tab_box");
// var listTwo = tabBox.children[0].children;
// var imgWidth = list[0].offsetWidth;
// var setIndex = 0;
// var jobRight = jobBox.children[1];
// var jobLeft = jobBox.children[0];
// for (var i = 0; i < listTwo.length; i++) {
//     listTwo[i].index = i
//     listTwo[i].onclick = clickHandle;
// }
// function clickHandle() {
//     var index = this.index;
//     var target = index * imgWidth * (-1);
//     getRun(ul, {
//         left: target,
//     })
//     for (var j = 0; j < listTwo.length; j++) {
//         listTwo[j].removeAttribute("class")
//     }
//     this.className = "on";
//     setIndex = this.index;
// }
//
// function run() {
//     if (setIndex == listTwo.length) {
//         setIndex = 0;
//         ul.style.left = 0;
//     }
//     setIndex++;
//     var target = setIndex * imgWidth * (-1);
//     getRun(ul, {
//         left: target,
//     });
//     for (var j = 0; j < listTwo.length; j++) {
//         listTwo[j].removeAttribute("class");
//     }
//     if (setIndex == list.length - 1) {
//         listTwo[0].className = "on";
//     } else {
//         listTwo[setIndex].className = "on";
//     }
// }
// jobRight.onclick = run;
//
//
// jobLeft.onclick = function () {
//     if (setIndex == 0) {
//         setIndex = listTwo.length;
//         ul.style.left = setIndex * imgWidth * (-1) + "px";
//     }
//     setIndex--;
//     var target = setIndex * imgWidth * (-1);
//     getRun(ul, {
//         left: target,
//     });
//     for (var j = 0; j < listTwo.length; j++) {
//         listTwo[j].removeAttribute("class");
//     }
//     listTwo[setIndex].className = "on";
// }
//


