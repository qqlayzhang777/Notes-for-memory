
function myReady(fn){

	//对于现代浏览器，对DOMContentLoaded事件的处理采用标准的事件绑定方式
	if(document.addEventListener){
		document.addEventListener("DOMContentLoaded", fn, false);
	}else{
		IEContentLoaded(fn);
	}

	//IE下模拟DOMContentLoaded
	function IEContentLoaded(fn){
		var d = window.document;
		var done = false;

		//定义用户的回调函数init(),来保证fn的回调函数只执行一次
		var init = function(){
			if(!done){
				done = true;
				fn();
			}
		};

		(function(){
			try{
				// DOM树未创建完之前调用doScroll会抛出错误
				d.documentElement.doScroll('left');
			}catch(e){
				//延迟再试一次~
				setTimeout(arguments.callee, 50);
				return;
			}
			//直到没有错误时，就表示DOM树创建完毕，然后立即执行用户回调
			init();
		})();

		//监听document的加载状态
		d.onreadystatechange = function(){
			//判断如果用户是在domReady之后绑定的函数，就立刻执行
			if(d.readyState == 'complete'){
				d.onreadystatechange = null;
				init();
			}
		}
	}
}