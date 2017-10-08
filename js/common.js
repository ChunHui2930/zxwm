

    function getStyle(element,property) {
        if(window.getComputedStyle){
            return window.getComputedStyle(element,null)[property]
        }else{
            return element.currentStyle[property];
        }

    }

    function getRun(element,obj,callback) {
        // console.log(123);
        clearInterval(element.timer);
        element.timer=setInterval(function () {
            var flag=true;
            for (var property in obj){
                if(property=="opacity"){
                    var target=obj[property]*100;
                    var value=parseInt(getStyle(element,property)*100);
                    var step=(target-value)/10;
                    step=step>0?Math.ceil(step):Math.floor(step);
                    value+=step;
                    value=value/100;
                    element.style[property]=value;
                }
                    else if(property=="zIndex"){
                    var target=obj[property];
                    var value=target;
                    element.style[property]=target;
                }else {
                    var target=obj[property];
                    var value=parseFloat(getStyle(element,property));
                    var step=(target-value)/5;
                    step=step>0?Math.ceil(step):Math.floor(step);
                    value+=step;
                    element.style[property]=value+"px";

                }
                if(target!=value){
                    // console.log(1);
                    flag=false;
                }
            }
            if(flag){
                clearInterval(element.timer);
                callback&&callback();
            }
        },50)
    }

