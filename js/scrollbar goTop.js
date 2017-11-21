myReady(function(){
	var goTop=document.getElementsByClassName('goTop')[0];
	var time=null;
	var scrollControl=true;
	var clientHeight=document.documentElement.clientHeight || document.body.clientHeight;

	window.onscroll=function(){
		var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop>=clientHeight){
			goTop.style.display="block";
		}else{
			goTop.style.display="none";
		}

		if(!scrollControl){
			clearInterval(time);
		}
		scrollControl=false;
	}

	goTop.onclick=function(){
		time=setInterval(function(){
			var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
			var speed=Math.floor(-scrollTop/6);
			document.documentElement.scrollTop=document.body.scrollTop=scrollTop+speed;
			scrollControl=true;
			if(scrollTop==0){
				clearInterval(time);
			}

		},30)

	}

})


// myReady(function(){
// 	var gt=document.getElementsByClassName('goTop')[0];
// 	var time=null; // 存放定时器变量
// 	var scrollControl=true;
// 	var clientHeight=document.documentElement.clientHeight || document.body.clientHeight;

// 	// 滚动条滚动时触发事件 判断在滚动条回到顶部过程用户是否滚动滚轮
// 		window.onscroll=function(){

// 			var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
// 			if(scrollTop>=clientHeight){
// 				gt.style.display="block";
// 			}else{
// 				gt.style.display="none";
// 			}

// 			if(!scrollControl){
// 				clearInterval(time);
// 			}
// 			scrollControl=false;
// 		}


// 	gt.onclick=function(){   // 设置点击事件

// 		// 设置定时器
// 		time=setInterval(function(){
// 			// 获取滚动条顶部高度并做好兼容
// 			var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
// 			var speed=Math.floor(-scrollTop/6);
// 			// 滚动条每次滚动的高度
// 			document.documentElement.scrollTop=document.body.scrollTop = scrollTop + speed;

// 			scrollControl=true;

// 			if(scrollTop==0){
// 				clearInterval(time);
// 			}
// 		},30)
		
// 	}


//  })