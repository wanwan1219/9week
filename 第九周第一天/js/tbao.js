/**
 * Created by 000 on 2017/9/18.
 */
(function(){
    //rem();
    //window.onResize=function(){
    //    rem();
    //};
    //function rem(){
    //    var ww=document.documentElement.clientWidth;
    //    if(ww>540){
    //        ww=540
    //    }
    //    document.documentElement.style.fontSize=ww/5.4+"px";
    //}
    (function(num){
        var resizeEvt="orientationchanged"in window?"orientationchange":"resize",
            doc=document.documentElement,
            recalc=function(){
                var clientWidth=doc.clientWidth;
                if(!clientWidth) return;
                if(clientWidth>num){
                    clientWidth=num
                }
                doc.style.fontSize=100*(clientWidth/num)+"px";
            };
        if(!document.addEventListener) return;
        window.addEventListener("resizeEvt",recalc);
        document.addEventListener("DOMContentLoaded",recalc);
    })(540);
})();
window.onload=function(){
    (function(){
        function cla(a){
            return document.getElementsByClassName(a)
        }
    var ban=cla("banner")[0],
        ul=ban.children[0],
        lis=ul.children,
        len=lis.length,
        img=lis[0].children[0],
        ww=img.offsetWidth,
        hh=img.offsetHeight,
        index= 1,start= 0,end= 0,cha= 0,move= 0,step= 0,fa=true;
        ul.style.height=hh+"px";
        ban.style.height=hh+"px";
        ban.addEventListener("touchstart",function(e){
            start=e.touches[0].pageX;
        });
        ban.addEventListener("touchend",function(e){
           end= e.changedTouches[0].pageX;
            cha=end-start;
            if(cha>1/3*ww&&fa==true){
                fa=false;
                prev();
            }else if(cha<-1/3*ww&&fa==true){
                fa=false;
                next();
            }else{
                ul.style.transition="left .5s linear 0s";
                ul.style.left=-index*ww+"px";
            }
        });
        ban.addEventListener("touchmove",function(e){
           move= e.touches[0].pageX;
            step=move-start;
            ul.style.transition="left .5s linear 0s";
            ul.style.left=-index*ww+step+"px";
        });
        ul.addEventListener("transitionend",function(){
            if(index<=0){
                index=len-2;
            }
            if(index>=len-1){
                index=1;
            }
            ul.style.transition="none";
            ul.style.left=-index*ww+"px";
            fa=true;
        });
        function prev(){
            index--;
            ul.style.transition="left .5s linear 0s";
            ul.style.left=-index*ww+"px";
        }
        function next(){
            index++;
            ul.style.transition="left .5s linear 0s";
            ul.style.left=-index*ww+"px";
        }

    })();
};