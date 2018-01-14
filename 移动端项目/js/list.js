/**
 * Created by 000 on 2017/9/25.
 */
(function(){
    window.onload=function(){
        function cla(a){
            var len=document.querySelectorAll(a).length;
            if(len>1){
                return document.querySelectorAll(a);
            }else{
                return document.querySelector(a);
            }
        }
        var i=0;
        var leftLis=cla(".con .left ul li");
        var rightLis=cla(".con .right ol li");
        var fa=true;
        var ol=cla(".con .right ol");
        var height1=cla(".con .right ol li")[0].offsetHeight;
        for(i=0;i<15;i++){
            leftLis[i].index=i;/*js中没有内置index属性 需要手动去绑定*/
            leftLis[i].addEventListener("touchend",function(){
                if(fa){
                    for(var j=0;j<15;j++){
                        rightLis[j].style.display="none";
                        leftLis[j].className="";
                    }
                    rightLis[this.index].style.display="block";
                    ol.style.top=0;
                    height1=rightLis[this.index].offsetHeight;
                    cha1=height1-hh;
                    leftLis[this.index].className="col";
                }
            })
        }
        var left=cla(".con .left");
        var right=cla(".con .right");
        var header=cla(".header");
        var ul=cla(".con .left ul");
        var start= 0,move= 0,step=0;
        var start1= 0,move1= 0,step1=0;
        var height=ul.offsetHeight;
        var top=0;
        var top1=0;
        var htmlHh=document.documentElement.clientHeight;
        var headerHh=header.offsetHeight;
        var hh=htmlHh-headerHh;
        var cha=height-hh;
        var cha1=height1-hh;
        left.style.height=hh+"px";
        right.style.height=hh+"px";
        left.addEventListener("touchstart",function(e){
            start= e.touches[0].pageY;
            top=ul.offsetTop;
        });
        left.addEventListener("touchmove",function(e){
            move= e.touches[0].pageY;
            step=move-start;
            ul.style.top=top+step+"px";
            if(parseInt(ul.style.top)>0){
                ul.style.top=0+"px";
            }
            if(parseInt(ul.style.top)<-cha){
                ul.style.top=-cha+"px";
            }
            fa=false;
        });
        left.addEventListener("touchend",function(e){
            fa=true;

        });



        right.addEventListener("touchstart",function(e){
            start1= e.touches[0].pageY;
            top1=ol.offsetTop;
        });
        right.addEventListener("touchmove",function(e){
            move1= e.touches[0].pageY;
            step1=move1-start1;
            ol.style.top=top1+step1+"px";
        });
        right.addEventListener("touchend",function(e){
            if(parseInt(ol.style.top)>0){
                ol.style.top=0+"px";
            }
            if(parseInt(ol.style.top)<-cha1){
                ol.style.top=-cha1+"px";
            }
            move1=0;
            step1=0;
        });


    }
})();