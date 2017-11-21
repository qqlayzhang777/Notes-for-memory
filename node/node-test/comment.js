var http = require('http')
var querystring = require('querystring')
var postData = querystring.stringify({
	'content' : '一起期待下一期的课程',
	'cid': 348
})

var options = {
	hostname:'www.imooc.com',
	port:80,
	path:'/course/docomment',
	method:'POST',
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'PHPSESSID=iokd7rnrfgsngc9dvcmk8gpgm2; imooc_uuid=2acc9faa-9e16-4953-ac18-54fe43bc518f; imooc_isnew=1; imooc_isnew_ct=1503184066; loginstate=1; apsid=IyYTc2N2M3ZGQzYjkxNGNjYTQ3OGI2OGE1YzI4OGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDgxNTAxMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxNTk3MTk0OTg0QHFxLmNvbQAAAAAAAAAAAAAAAAAAADExNzVmMDhmNzVlZTNjZWZlNmM0MTdhNjA0ZjAyZDY0HMWYWRzFmFk%3DY2; last_login_username=1597194984%40qq.com; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1503184071; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1503187293; cvde=5998c4c20a5dd-48',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/comment/348',
		'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}


var req = http.request(options,function(res){
	console.log('Status: ' + res.statusCode)
	console.log('headers: ' + JSON.stringify(res.headers))
	// console.log('headers: ' + res.headers)

	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk))
		console.log(typeof chunk)
		console.log(chunk instanceof Object)
	})

	res.on('end',function(){
		console.log('评论完毕！')
	})

})

req.on('error',function(e){
	console.log('Error: ' + e.message)
})

req.write(postData)

req.end()
