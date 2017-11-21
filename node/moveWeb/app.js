var express = require('express')     // 加载express模块
var path = require('path')
var mongoose = require('mongoose')
var _ = require('underscore')
var Movie = require('./models/movie')
var serveStatic = require('serve-static')
var bodyParser = require('body-parser')
var port = process.env.PORT || 3000  // 设置端口 默认3000
var app = express()                  // 启动一个web服务器

mongoose.connect('mongodb://localhost/imooc')

app.set('views','./views/pages')			// 置视图的根目录
app.set('view engine','pug')		// 置模块的默认引擎  jade
// app.use(bodyParser.urlencoded())
app.use(serveStatic('bower_components'))
// app.use(express.static(path.join(__dirname,'bower_components')))
app.listen(port)					// 听端口

console.log('imooc started on port ' + port)

// 在这个入口里编写路由，才能访问到首页
// 页面路由 express
// index page
app.get('/',function(req,res){   // /路由规则
	Movie.fetch(function(err,movies){
		if(err){
			console.log(err)
		}
		
		res.render('index',{
			title:'imooc 首页',
			movies: movies
		})
	})
})

// detail page 详情页
app.get('/movie/:id',function(req,res){
	var id = req.params.id

	Movie.findById(id,function(err,movie){
		res.render('detail',{
			title: 'imooc '+ movie.title,
			movie: movie
		})
	})
})

// admin page
app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title: 'imooc 后台录入页',
		movie: {
			title: '',
			doctor: '',
			country: '',
			year: '',
			poster: '',
			flash: '',
			summary: '',
			language: ''
		}
	})
})

//admin update movie
app.get('/admin/update/:id',function(req,res){
	var id = req.params.id

	if(id){
		Movie.findById(id,function(err,movie){
			res.render('admin',{
				title: 'imooc 后台更新页',
				movie: movie
			})
		})
	}
})

//表单提交后电影数据的存储 
//添加路由 admin post movie
//拿到从录入页post来的数据
app.post('/admin/movie/new',function(res,req) {
	var id = req.body.movie._id
	var movieObj = req.body.movie
	var _movie

	if(id!=='undefined'){
		Movie.findById(id,function(err,movie){
			if(err){
				console.log(err)
			}
			else{
				_movie = _.extend(movie,movieObj)
				_movie.save(function(err,movie){
					if(err){
						console.log(err)
					}
					res.redirect('/movie/'+movie._id)
				})
			}
		})
	}
	else{
		_movie = new Movie({
			doctor: movieObj.doctor,
			title: movieObj.title,
			country: movieObj.country,
			language: movieObj.language,
			year: movieObj.year,
			poster: movieObj.poster,
			summary: movieObj.summary,
			flash: movieObj.flash
		})

		_movie.save(function(err,movie){
			if(err){
				console.log(err)
			}
			res.redirect('/movie/'+movie._id)
		})
	}
})


// list page
app.get('/admin/list',function(req,res){
	Movie.fetch(function(err,movies){
		if(err){
			console.log(err)
		}

		res.render('list',{
			title:'imooc 列表页',
			movies: movies
		})
	})
})