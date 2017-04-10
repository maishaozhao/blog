/**
 * Created by Mshanzhao on 2017/2/8.
 */
$(function(){
    $(".con ul li").hover(function(){
        $(this).stop().animate({"width":"699px"},500).siblings().stop().animate({"width":"99px"},500);
    },function(){
        $(".con ul li").stop().animate({"width":"199px"},500)
    })
})