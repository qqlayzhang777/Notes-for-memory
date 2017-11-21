window.onload=function(){
	// var move=document.getElementsByClassName('move')[0];
	// var li=move.getElementsByTagName('li');
	// for(var i=0;i<li.length;i++){
	// 	this.timemove=null;
	// 	li[i].onmouseover=function(){
	// 		var This=this;
	// 		startMove(this,{width:160,height:80,opacity:100})
			
	// 	}
	// 	li[i].onmouseout=function(){
	// 		var This=this;
	// 		startMove(this,{opacity:30},function(){
	// 			startMove(This,{"height":50},function(){
	// 				startMove(This,{'width':130})
	// 			})
	// 		});
	// 	}
	// }
}
// var timemove=null;
//move框架
//js部分
function startMove(obj,json,fn){
	clearInterval(obj.timemove);
	obj.timemove=setInterval(function(){
		var flag=true;
		for(var attr in json){
			var getSty=null;
			if(attr=='opacity'){
				getSty=Math.round(parseFloat(getStyle(obj,attr))*100);
			}else{
				getSty=parseInt(getStyle(obj,attr));
			}		
			var speed=(json[attr]-getSty)/8;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(getSty!=json[attr]){
				flag=false;	
			}
			if(attr=="opacity"){
				obj.style[attr]='alpha(opacity:'+(getSty+speed)+')';  //针对IE
				//针对firefox/chrome
				obj.style[attr]=(getSty+speed)/100;
			}else{
				obj.style[attr]=getSty+speed+"px";
			}
		}
		if(flag){
			clearInterval(obj.timemove);
			if(fn){
				fn();
			}
		}
	},20)
}

//获取行内样式js函数
function getStyle(obj,attr){	
	if(obj.currentStyle){    //针对IE浏览器
		return obj.currentstyle[attr];
	}else{      //针对火狐firefox浏览器
		return getComputedStyle(obj,false)[attr];
	}	
}

//jQuery部分







