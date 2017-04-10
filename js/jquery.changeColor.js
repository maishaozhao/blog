/**
 * Created by Administrator on 2017/2/5.
 */
$.fn.changeColor = function (color){

    // 在这个插件中,当前对象用this来表示，此时的this不再是dom对象，而是jQuery

    // 根据传入的color的值，进行修改不同的颜色
    // jQuery中的插件也好，还是自定义的jQuery插件也好，只要是依赖于jQuery，都还得使用原来的api
    this.css("backgroundColor",color);
}