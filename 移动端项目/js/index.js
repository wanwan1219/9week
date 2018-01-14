/**
 * Created by 000 on 2017/9/21.
 */

    window.onload=function(){
        function cla(e){
            return document.getElementsByClassName(e)
        }
        function id(a){
            return document.getElementById(a);
        }
        (function(){
            var resizeEvt='orientationchange' in window ? 'orientationchange':'resize',
                ban=cla("banner")[0],
                ul=ban.children[0],
                ol=ban.children[1],
                ulLis=ul.children,
                olLis=ol.children,
                len=ulLis.length,
                w=ban.offsetWidth,
                index= 1,start= 0,end= 0,move= 0,cha= 0,step= 0,fa=true,k=0;
            var timer=setInterval(next,1500);
            window.addEventListener(resizeEvt,function(){
                w=ban.offsetWidth;
            });
            ban.addEventListener("touchstart",function(e){
                start= e.touches[0].pageX;
                clearInterval(timer);
            });
            ban.addEventListener("touchend",function(e){
                end= e.changedTouches[0].pageX;
                cha=end-start;
                if(cha>1/3*w&&fa==true){
                    fa=false;
                    prev();
                }else if(cha<-1/3*w&&fa==true){
                    fa=false;
                    next();
                }else{
                    ul.style.transition="left .5s linear 0s";
                    ul.style.left=-index*w+"px";
                }
                timer=setInterval(next,1500)
            });
            ban.addEventListener("touchmove",function(e){
                move= e.touches[0].pageX;
                step=move-start;
                ul.style.left=-index*w+step+"px";
            });
            ul.addEventListener("transitionend",function(){
                if(index<=0){
                    index=len-2;
                }
                if(index>=len-1){
                    index=1;
                }
                ul.style.transition="none";
                ul.style.left=-index*w+"px";
                fa=true;
            });
            function prev(){
                index--;
                ul.style.transition="left .5s linear 0s";
                ul.style.left=-index*w+"px";
                k--;
                if(k<0){
                    k=len-3;
                }
                col()
            }
            function next(){
                index++;
                ul.style.transition="left .5s linear 0s";
                ul.style.left=-index*w+"px";
                k++;
                if(k>len-3){
                    k=0;
                }
                col();
            }
            function col(){
                for(var m=0;m<len-2;m++){
                    olLis[m].className=""
                }
                olLis[k].className="col";
            }
        })();

        (function(){
            var hour=id("time_h"),
                minute=id("time_m"),
                second=id('time_s');
            setInterval(function(){
                timer(21)
            },1000);

            function timer(number){
                var time=new Date();
//        console.log(time);
                /*获取系统的时间*/
                var h=time.getHours();
                var m=time.getMinutes();
                var s=time.getSeconds();
                /*从中把时分秒提取出来*/
                var end=number*60*60;
                /*知道要结束的时间并换算成秒*/
                var start=h*60*60+m*60+s;
                /*把系统提取的当前时间转换成秒*/
                var cha=end-start;
                /*拿未来的时间减去现在的时间，剩下的就是剩余的时间*/
                var  hh=parseInt(cha/3600);
                var  mm=parseInt(cha%3600/60);
                var  ss=parseInt(cha%3600%60);

                hour.value=hh;
                minute.value = mm;
                second.value = ss;
            }
        })();
        (function(){
            var first=cla("first-bot")[0],
                ul=first.children[0],
                maxWw=ul.offsetWidth-first.offsetWidth,
                left=0, start= 0,move= 0,step= 0,end=0;
            first.addEventListener("touchstart",function(e){
                start=e.touches[0].pageX;
                left=ul.offsetLeft;
            });
            first.addEventListener("touchmove",function(e){
                move= e.touches[0].pageX;
                step=move-start;
                console.log(step);
                ul.style.left=left+step+"px";
            });
            first.addEventListener("touchend",function(){
                if( parseInt(ul.style.left)>0){
                    ul.style.left=0+"px";
                }
                if( parseInt(ul.style.left)<-maxWw){
                    ul.style.left=-maxWw+"px"
                }
            })
        })();
        (function(){
            var index=0;
            var tt=0;
            $(".like .more").get(0).addEventListener("touchend",function(){
                index++;
                if(index<3){
                    ajax();
                    $(".bottom").hide();
                }
                if(index==2){
                    $(".bottom").show();
                    $(".like .more").hide()
                }
            });
            ajax();
            function ajax(){
                var xhr=new XMLHttpRequest();
                xhr.open("get","js/package.json");
                xhr.send(null);
                xhr.onreadystatechange=function(){
                    if(xhr.readyState==4){
                        if(xhr.status==200){
                            var list=JSON.parse(xhr.responseText);
                            if(index==0){
                                $(".like .like-content").html("");/*清空里面的内容*/
                            }
                            var data=list[index].data.list;
                            for(var i=0;i<data.length;i++){
                                var item=$("#item").html().replace("$img$",data[i].coverImg);//获取#item内部的元素
                                $(".like .like-content").append(item);
                            }
                        }
                    }
                }
            }

        })();
        (function(){
            function cla(a){
                var len=document.querySelectorAll(a).length;
                if(len>1){
                    return document.querySelectorAll(a);
                }else{
                    return document.querySelector(a);
                }
            }

            //console.log(cla(".like .more"));

        })();
    };
