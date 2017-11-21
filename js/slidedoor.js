window.onload=function(){
	var cc=document.getElementsByClassName("ccc")[0];
	var m=cc.getElementsByTagName("img");
	var mWidth=m[0].offsetWidth;
	var dWidth=160;
	var aWidth=mWidth+(m.length-1)*dWidth;
	cc.style.width=aWidth+"px";
	function scc(){for(var i=1;i<m.length;i++){
			m[i].style.left=mWidth+(i-1)*dWidth+'px';
		}}
	scc();
	var moveWidth=mWidth-dWidth;
	for(var i=0;i<m.length;i++){
		(function(i){
			m[i].onmouseover=function(){
				scc();
				for(var j=1;j<=i;j++){
					m[j].style.left=parseInt(m[j].style.left,10)-moveWidth+"px";
				}
			}
		})(i);
	}
	

}



// window.onload=function(){
// 	var cc=document.getElementsByClassName('ccc')[0];
// 	var m=cc.getElementsByTagName('img');
// 	var mWidth=m[0].offsetWidth;
// 	var dWidth=160;
// 	var aWidth=mWidth+(m.length-1)*dWidth;
// 	cc.style.width=aWidth+'px';
// 	function scc(){
// 		for(var i=1;i<m.length;i++){
// 			m[i].style.left=mWidth+(i-1)*dWidth+"px";
// 		}}
// 		scc();
// 	var moveWidth=mWidth-dWidth;
// 	for(var i=0;i<m.length;i++){
// 		(function(i){  //代码执行一次之后，立即调用，避免所有元素全部循环执行完毕
// 			m[i].onmouseover=function(){
// 				scc();
// 				for(var j=1;j<=i;j++){
// 					m[j].style.left=parseInt(m[j].style.left,10)-moveWidth+'px';
// 			}
// 		}
// 	})(i);
// 	}
// }

// window.onload=function(){
// 	var cc=document.getElementsByClassName('ccc')[0];
// 	var m=cc.getElementsByTagName("img");
// 	var mWidth=m[0].offsetWidth;
// 	var dWidth=160;
// 	var aWidth=mWidth+(m.length-1)*dWidth;
// 	cc.style.width=aWidth+"px";
// 	function scc(){for(var i=1;i<m.length;i++){
// 			m[i].style.left=mWidth+(i-1)*dWidth+"px";
// 		}}
// 		scc();

// 	var moveWidth=mWidth-dWidth;
// 	for(var i=0;i<m.length;i++){
// 		(function(i){
// 			m[i].onmouseover=function(){
// 				scc();
// 				for(var j=1;j<=i;j++){
// 					m[j].style.left=parseInt(m[j].style.left,10)-moveWidth+"px";
// 				}
// 			}
// 		})(i);
// 	}

// }