/**
 * Created by Administrator on 2017/2/7.
 */
$(function(){
    $("#dadiv>#bx>ul>li").click(function(){
        box=$(this).index();
        $("#dadiv>.qq").eq(box).addClass("xs").siblings().removeClass("xs");
    })
})