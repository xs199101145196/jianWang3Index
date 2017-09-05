//  左边侧边栏-03的开始

// 推荐服务器轮播图
var recommend = document.getElementById("recommend");
var ul1 = document.getElementById("list03");
var ul1Lis = ul1.children;
var imgWidth1 = ul1Lis[0].offsetHeight;
var picIndex1 = 0;

function autoPlay1() {
    if (picIndex1 == ul1Lis.length - 3) {
        ul1.style.top = 0;
        picIndex1 = 0;
    }
    picIndex1++;
    var target = -picIndex1 * imgWidth1;
    animate(ul1, {
        top: target
    })
}
var timerId1 = null;
timerId = setInterval(function () {
    autoPlay1();
}, 3000)


// -----------------------------中间部分顶部轮播图----------------------------
var box2 = document.getElementById("list-lbt");
var ul2 = box2.children[0];
var ul2Lis = ul2.children;
var ol2 = box2.children[1];

var imgWidth2 = box2.offsetWidth;
var picIndex2 = 0, spanIndex2 = 0;

for (var i = 0; i < ul2Lis.length; i++) {
    var li = document.createElement("li");
    li.setAttribute("index", i);
    ol2.appendChild(li);
}
var ol2Lis = ol2.children;
ol2Lis[0].setAttribute("class", "current");
var li = ul2Lis[0].cloneNode(true);
ul2.appendChild(li);

for (var i = 0; i < ol2Lis.length; i++) {
    ol2Lis[i].onclick = function () {
        for (var j = 0; j < ol2Lis.length; j++) {
            ol2Lis[j].removeAttribute("class");
        }
        this.setAttribute("class", "current");
        var target = -this.getAttribute("index") * imgWidth2;
        animate(ul2, {
            left: target
        });
        spanIndex2 = picIndex2;
    }
}
box2.onmouseover = function () {
    clearInterval(timerId2);
}
box2.onmouseout = function () {
    timerId2 = setInterval(function () {
        autoPlay2();
    }, 5000)
}

function autoPlay2() {
    if (picIndex2 == ul1Lis.length - 1) {
        ul2.style.left = 0;
        picIndex2 = 0;
    }
    picIndex2++;
    var target = -picIndex2 * imgWidth2;
    animate(ul2, {
        left: target
    });

    if (spanIndex2 == ol2Lis.length - 1) {
        ol2Lis[ol2Lis.length - 1].removeAttribute("class");
        spanIndex2 = 0;
    } else {
        ol2Lis[spanIndex2].removeAttribute("class");
        spanIndex2++;
    }
    ol2Lis[spanIndex2].setAttribute("class", "current");
}
var timerId2 = null;
timerId2 = setInterval(function () {
    autoPlay2();
}, 5000)

// -----------------------------中间部分顶部轮播图  结束----------------------------

// -----------------------------左边栏-05-社区推荐 小方块---------------------------
var txt03Box = document.getElementById("txt03")
var lineOne = document.getElementById("line01")
var lineTwo = document.getElementById("line02")
var lineThree = document.getElementById("line03")
var lineFour = document.getElementById("line04")

txt03Box.onmouseover = function () {
    animate(lineOne, {
        'right': -12
    }, function () {
        animate(lineTwo, {
            'top': 12
        }, function () {
            animate(lineThree, {
                'right': 12
            }, function () {
                animate(lineFour, {
                    'bottom': 12
                })
            })
        })
    })
}
txt03Box.onmouseout = function () {
    animate(lineFour, {
        'bottom': 0
    }, function () {
        animate(lineThree, {
            'right': 0
        }, function () {
            animate(lineTwo, {
                'top': 0
            }, function () {
                animate(lineOne, {
                    'right': 0
                })
            })
        })
    })
}
// -----------------------------左边栏-05-社区推荐 小方块---------------------------


// -----------------------------中间部分-03-门派介绍 的开始------------------------







// -----------------------------中间部分-03-门派介绍 的结束------------------------





// -----------------------------------jQuery入口函数的开始--------------------------------------
$(function () {

    // -------------------------左边栏-03-服务器推荐  的开始----------------------------

    $('#left03-service>.l-c-foot>.guide').children().on('mouseover', function () {
        $('#left03-service>.l-c-foot>.guide').children().css({
            'color': '#000',
            'backgroundColor': '#fff'
        })
        $(this).css({
            'color': '#fff',
            'backgroundColor': '#5DB9C4'
        })
    })
    $('#left03-service>.l-c-foot>.guide').children().on('mouseout', function () {
        $('#left03-service>.l-c-foot>.guide').children().css({
            'color': '#000',
            'backgroundColor': '#fff'
        })
    })

    // -------------------------左边栏-03-服务器推荐  的结束----------------------------

    // -------------------------左边栏-05-社区推荐 的开始------------------------------- 

    $('#list05-community .list05-top').children().on('click', function () {
        $('#list05-community .list05-top').children().css({
            'color': '#444',
            'borderBottom': 'none'
        })
        $(this).css({
            'color': '#E86656',
            'borderBottom': '2px solid #E86656'
        })
        var $target = -$('#list05-bottom').width() * $('#list05-top span').index(this);
        $('#list05-bottom>.bottom-tab').animate({
            left: $target
        })
    })
    // var $line1 = $('#list05-community').children(1).children(1).children().eq(0);
    // var $line2 = $('#list05-community').children(1).children(1).children().eq(1);
    // var $line3 = $('#list05-community').children(1).children(1).children().eq(2);
    // var $line4 = $('#list05-community').children(1).children(1).children().eq(3);
    // $('#list05-community>.txt03').on('mouseover', function () {
    //     $line1.animate({
    //         right: -12
    //     }, 300, function () {

    //         $line2.animate({
    //             top: 12
    //         }, 300, function () {

    //             $line3.animate({
    //                 left: -12
    //             }, 300, function () {

    //                 $line4.animate({
    //                     bottom: 12
    //                 }, 300)
    //             })
    //         })
    //     })
    // })
    // $('#list05-community>.txt03').on('mouseout', function () {
    //     $line4.animate({
    //         bottom: 0
    //     }, 300, function () {

    //         $line3.animate({
    //             left: 0
    //         }, 300, function () {

    //             $line2.animate({
    //                 top: 0
    //             }, 300, function () {

    //                 $line1.animate({
    //                     right: 0
    //                 }, 300)
    //             })
    //         })
    //     })
    // })
    // -------------------------左边栏-05-社区推荐 的结束------------------------------- 

    // -------------------------中间部分-02- 新闻tab栏 的开始-------------------------------
    $('#news-top>ul').children().on('click', function () {
        $('#news-top>ul').children().css({
            'color': '#444',
            'borderBottom': 'none'
        })
        $(this).css({
            "color": "#E86656",
            'borderBottom': '2px solid #E86656'
        })
        var $target = -$('#news-bottom').width() * $('#news-top>ul li').index(this);
        $('#news-bottom>.bottom-list').animate({
            left: $target
        }, 1000);
    })
    // -------------------------中间部分-02- 新闻tab栏 的结束----------------------------------


    // -------------------------中间部分-03- 门派介绍 的开始----------------------------------- 
    $('#list-menpai>.menpai-top>ul').children().on('click', function () {
        $('#list-menpai>.menpai-top>ul').children().css({
            'color': '#444',
            'borderBottom': 'none',
            'zIndex': 0
        })
        $(this).css({
            'color': '#E86656',
            'borderBottom': '2px solid #E86656',
            'zIndex': 1
        })
        // $('#menpai-recommend>ul').children().hide();
        // $('#menpai-recommend>ul').children().eq($(this).index()).show();
        $('#menpai-recommend').children(0).children().eq($(this).index() - 1).children().eq(0).animate({
            left: 590
        }, 500);
        $('#menpai-recommend').children(0).children().eq($(this).index() - 1).children().eq(1).animate({
            left: -295
        }, 500);
        $('#menpai-recommend').children(0).children().eq($(this).index()).children(0).eq(0).animate({
            left: 0
        }, 500);
        $('#menpai-recommend').children(0).children().eq($(this).index()).children(0).eq(1).animate({
            left: 0
        }, 500);
    })





    // -------------------------中间部分-03- 门派介绍 的结束------------------------------------













































})
// ----------------------------------jQuery入口函数的结束结束------------------------------












// -----------------------------中间部分 02 新闻tab栏 结束---------------------------






// 左边侧边栏06 的开始
var leftList06 = document.getElementById("leftList06");
var list06Top = leftList06.children[0];

var list06Bottom01 = leftList06.children[1];
var list06Bottom02 = leftList06.children[2];
var list06Bottom03 = leftList06.children[3];

var leftList06TopBtn01 = list06Top.children[0];
var leftList06TopBtn02 = list06Top.children[1];
var leftList06TopBtn03 = list06Top.children[2];

var list06Bottom01Txt05 = leftList06.children[1].children[4];
var list06Bottom01Txt06 = leftList06.children[1].children[5];

list06Bottom01Txt05.onmouseover = function () {
    list06Bottom01Txt06.style.display = "block";
}
list06Bottom01Txt05.onmouseout = function () {
    list06Bottom01Txt06.style.display = "none";
}


var flag = true;
leftList06TopBtn01.onclick = function () {
    // list06Bottom01.style.opacity = 1;
    // list06Bottom01.style.zIndex = 3;
    if (flag) {
        animate(list06Bottom01, {
            opacity: 1,
            zIndex: 3
        }, function () {
            flag = ture;
        })
        flag = false;
    }

    list06Top.children[0].style.borderBottom = "3px solid #E86656";
    list06Top.children[0].style.color = "#E86656";

    list06Bottom02.style.opacity = 0;
    list06Bottom02.style.zIndex = 0;
    list06Top.children[1].style.borderBottom = "none";
    list06Top.children[1].style.color = "#444";

    list06Bottom03.style.opacity = 0;
    list06Bottom03.style.zIndex = 0;
    list06Top.children[2].style.borderBottom = "none";
    list06Top.children[2].style.color = "#444";
}


leftList06TopBtn02.onclick = function () {
    list06Bottom01.style.opacity = 0;
    list06Bottom01.style.zIndex = 0;
    list06Top.children[0].style.borderBottom = "none";
    list06Top.children[0].style.color = "#444";

    // list06Bottom02.style.opacity = 1;
    // list06Bottom02.style.zIndex = 3;
    if (flag) {
        animate(list06Bottom02, {
            opacity: 1,
            zIndex: 3
        }, function () {
            flag = true;
        })
        flag = false;
    }

    list06Top.children[1].style.borderBottom = "3px solid #E86656";
    list06Top.children[1].style.color = "#E86656";

    list06Bottom03.style.opacity = 0;
    list06Bottom03.style.zIndex = 0;
    list06Top.children[2].style.borderBottom = "none";
    list06Top.children[2].style.color = "#444";
}


leftList06TopBtn03.onclick = function () {
    list06Bottom01.style.opacity = 0;
    list06Bottom01.style.zIndex = 0;
    list06Top.children[0].style.borderBottom = "none";
    list06Top.children[0].style.color = "#444";

    list06Bottom02.style.opacity = 0;
    list06Bottom02.style.zIndex = 0;
    list06Top.children[1].style.borderBottom = "none";
    list06Top.children[1].style.color = "#444";

    // list06Bottom03.style.opacity = 1;
    // list06Bottom03.style.zIndex = 3;

    if (flag) {
        animate(list06Bottom03, {
            opacity: 1,
            zIndex: 3
        }, function () {
            flag = true;
        })
        flag = false;
    }
    list06Top.children[2].style.borderBottom = "3px solid #E86656";
    list06Top.children[2].style.color = "#E86656";
}






