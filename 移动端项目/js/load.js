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
        cla(".two .box").addEventListener("touchend",function(){
            if(cla(".two .box").className=="box box1"){
                cla(".two .box").className="box";
            }else{
                cla(".two .box").className="box box1";
            }
        });
        function id(a){
            return document.getElementById(a)
        }
        var user=id("user");
        var password=id("password");
        var submit=id("submit");
        var val=id("val");
        submit.addEventListener("touchend",function(){
            var xhr=new XMLHttpRequest();
            xhr.open("post","ind.php");
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            xhr.send("user="+user.value+"&password="+password.value);
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4){
                    if(xhr.status==200){
                        var kk=xhr.responseText;
                        console.log(kk);
                        if(kk==0){
                            val.innerHTML="账号或密码错误"
                        }else{
                            window.location="index.html";
                            //dl.innerHTML= kk;
                            //form.style.display="none";
                        }
                    }
                }
            }

        });


    }

})();



