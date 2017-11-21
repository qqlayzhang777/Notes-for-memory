// var obj=document.getElementsByTagName('tag');   常用的DOM0级
var eventUtil={
    //跨浏览器事件处理程序
    //添加句柄
    addHandler:function(element,type,handler){
        if(element.addEventListener){           //支持DOM2事件处理
            element.addEventListener(type,handler,false);//false阻止冒泡
        }else if(element.attachEvent){          //支持IE事件处理
            element.attachEvent('on'+type,handler);
        }else{
            element['on'+type]=handler;         //不支持DOM2和IE
        }
    },
    //删除句柄
    removeHandler:function(element,type,handler){
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent(type,handler);
        }else{
            element['on'+type]=null;
        }
    },
    getEvent:function(event){           //获取事件
        return event?event:window.event;     //DOM2和IE区分event
    },
    getType:function(event){            //获取事件类型
        return event.type;
    },
    getElement:function(event){        //获取元素
        return event.target || event.srcElement; //DOM2和IE区分
    },
    preventDefault:function(event){    //阻止默认事件，如a的超链接
        if(event.preventDefault){
            event.preventDefault();          //DOM2
        }else{
            event.returnValue=false;         //IE
        }
    },
    stopPropagation:function(event){   //阻止冒泡事件
        if(event.stopPropagation){
            event.stopPropagation();         //DOM2
        }else{
            event.cancelBubble=true;         //IE
        }
    },
    getByClass:function(className,parent){  //封装获取元素的class for IE
        var oParent=parent?document.getElementById(parent):document,
            eles=[],
            elements=oParent.getElementsByTagName('*');

        for(var i=0,l=elements.length;i<l;i++){
            if(elements[i].className==className){
                eles.push(elements[i]);
            }
        }
        return eles;
    }
}

//鼠标拖拽对话框事件js
// window.onload=drag;

// function drag(){
    ////获取数组的值 className
//  var oTitle=eventUtil.getByClass('className','parent')[0]; 
//  oTitle.onmousedown=fnDown;
// }

// function fnDown(event){
//  event=eventUtil.getEvent(event);
//  var oDrag=document.getElementById('loginPanel'),
//      //光标按下时光标和面板之间的距离
//      disX=event.clientX-oDrag.offsetLeft,
//      disY=event.clientY-oDrag.offsetTop;
//  //移动
//  document.onmousemove=function(event){   //document移动事件  鼠标拖拽对话框
//      event=eventUtil.getEvent(event); //event=event || window.event;
//      fnMove(event,disX,disY);
//  }
//  document.onmouseup=function(){      //释放鼠标
//      document.onmousemove=null;
//      document.onmouseup=null;
//  }  
// }
// function fnMove(e,posX,posY){
//  var oDrag=document.getElementById('loginPanel'),
//      l=e.clientX-posX,
//      t=e.clientY-posY，
//      winW=document.documentElement.clientWidth || document.body.clientWidth,
//      winH=document.documentElement.clientHeight || document.body.clientHeight,
//      maxW=winW-oDrag.offsetWidth,
//      maxH=winH-oDrag.offsetHeight;
//      if(l<0){
//          l=0;
//      }else if(l>maxW){
//          l=maxW;
//      }
//      if(t<0){
//          t=0;
//      }else if(t>maxH){
//          t=maxH;
//      }
//      oDrag.style.left=l+"px";
//      oDrag.style.top=t+"px";
// }




