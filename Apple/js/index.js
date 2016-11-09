//$(function() {
//    var imgs = $(".banimgs")[0];
//    var as = $("figure", imgs);
//    var btn = $(".btns")[0];
//    var lis = $("li", btn);
//    var box = $(".content")[0];
//    var btnleft = $(".pre")[0];
//    var btnright = $(".next")[0];
//    //var bannerbox = $(".bannerboxs")[0];
//    // var bgcolor = ["red","yellow","black","#ccc"]
//    var now = 0;
//    var next = 0;
//    function ch(type) {
//        type = type || "right";
//        if (type == "left") {
//            next--;
//            if (next <= -1) {
//                next = as.length - 1;
//            }
//            ;
//            as[next].style.left = "-1400px";
//            animate(as[now], {left: 1400});
//        }
//        else if (type == "right") {
//            next++;
//            if (next >= as.length) {
//                next = 0;
//            }
//            as[next].style.left = "1400px";
//            animate(as[now], {left: -1400});
//        }
//        animate(as[next], {left: 0});
//        lis[next].className = "action";
//        lis[now].className = "";
//        // bannerbox.style.background=bgcolor[next];
//        now = next;
//    }
//
//    box.onmouseover = function () {
//        btnleft.style.display = "block";
//        btnright.style.display = "block";
//        clearInterval(t);
//    }
//    box.onmouseout = function () {
//        btnleft.style.display = "none";
//        btnright.style.display = "none";
//        t = setInterval(ch, 2000);
//    }
//    btnleft.onclick = function () {
//        ch("left")
//    }
//
//    btnright.onclick = function () {
//        ch("right")
//    }
//
//    var t = setInterval(ch, 2000);
//
//    for (var i = 0; i < lis.length; i++) {
//        lis[i].aa = i;
//        lis[i].onclick = function () {
//            next = this.aa;
//            as[next].style.left = "1400px";
//            imgs[now].style.left = "0px";
//            animate(as[now], {left: -1400});
//            animate(as[next], {left: 0});
//            lis[next].className = "action";
//            lis[now].className = "";
//            // bannerbox.style.background=bgcolor[next];
//            now = next;
//        }
//    }
//
//})