/**
 * Created by Administrator on 2017/2/5.
 */
$.fn.changeColor = function (color){

    // ����������,��ǰ������this����ʾ����ʱ��this������dom���󣬶���jQuery

    // ���ݴ����color��ֵ�������޸Ĳ�ͬ����ɫ
    // jQuery�еĲ��Ҳ�ã������Զ����jQuery���Ҳ�ã�ֻҪ��������jQuery��������ʹ��ԭ����api
    this.css("backgroundColor",color);
}