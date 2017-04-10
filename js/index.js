/**
 * Created by 代明 on 2017/2/7.
 */
window.onload=function () {
    var box=document.getElementById("box")
    var ul=document.getElementById("dul")
    var lis=ul.children
    var imgwidth=box.offsetWidth
    var right=document.getElementById("dmr")
    var left=document.getElementById("dml")
    var index=0
    var timId=null
      var pic=0
    timId= setInterval(playNext,2000)
    function playNext() {
        if (pic == lis.length - 1) {
            pic = 0;
            ul.style.left = "0px"; // 迅速的让ul恢复到原来的位置，进行下一次的轮播
        }
        pic++;
        var target = -pic * imgwidth;
        animate(ul, target);
        //10 让小方块的背景颜色和按钮的单击同步

    }
    index=pic;
    right.onclick=function () {
        playNext();
    }
    left.onclick=function () {
        if (pic == 0) {
            pic = lis.length - 1;
            ul.style.left = -imgwidth * (lis.length - 1) + 'px';
        }
        pic--;
        var target = -pic * imgwidth;
        animate(ul, target);
    }
    box.onmouseover=function () {
        clearInterval(timId)
    }
    box.onmouseout=function () {
        timId= setInterval(playNext,2000)
    }

    function animate(obj, target) {
        clearInterval(obj.timerId); // 清空当前对象里面的定时器，保证当前对象在移动的时候，只开启一个定时器
        obj.timerId = setInterval(function () {
            var leader = obj.offsetLeft;
//          console.log("leader" + "========" + leader);
            var step = 20;
            step = leader < target ? step : -step;
            if (Math.abs(leader - target) > Math.abs(step)) {
                leader = leader + step;
                obj.style.left = leader + 'px';
//            console.log("加了步长之后的leader" + "======" + leader);
            } else {
                clearInterval(obj.timerId);// 清除当前对象的定时器
                obj.style.left = target + 'px';  // 在最后的位置不足一个步长的时候，直接设置为目标位置即可
            }
        }, 15);
    }
}