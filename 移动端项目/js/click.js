/**
 * Created by 000 on 2017/9/27.
 */
var kk={};/*object 对象 里面是键值对 属性名：值*/
//var=[];/*数组 里面是 数字或者字符串的集合*/
kk.tap=function(objDom,callback){
    /*1.不能滑动
     * 2.响应需要在一定的时间完成 150ms*/
    var isMove=false;/*记录是否滑动过*/
    var startTime=0;
    objDom.addEventListener('touchstart',function(e){
        console.time('end');/*计时开始的一个声明 end*/
        startTime=Date.now();/*取到1970年到现在这一刻的毫秒ms值*/
    });
    objDom.addEventListener('touchmove',function(e){
        isMove=true;
        /*节流阀 只要move了 就不当作点击事件了*/
    });
    objDom.addEventListener('touchend',function(e){
        console.timeEnd('end');/*计时结束的时候 打印出时间差 end 单位毫秒*/
        /*isMove是false
         * 并且 响应时间在150ms内
         * 这就是一个模拟封装的tap事件的所有条件*/
        if(!isMove && (Date.now()-startTime)<150){
            callback && callback(e);
            /*没有触发move事件 并且时间差小于150ms*/
        }
        /*注意要重置*/
        isMove=false;
        startTime=0;
    })
}