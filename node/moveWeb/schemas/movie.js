var mongoose = require('mongoose')   //引入建模工具模块
//调用方法
var MovieSchema = new mongoose.Schema({
	doctor:String,
	title:String,
	language:String,
	country:String,
	summary:String,
	flash:String,
	poster:String,
	year:Number,
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
})

//为模式添加方法，存储数据前调用方法
MovieSchema.pre('save',function(next){
	if(this.isNew) {
		this.meta.createAt = this.meta.undateAt = Date.now()
	}
	else{
		this.meta.updateAt = Date.now()
	}

	next()  //将存储流程进行下去
})

//静态方法
MovieSchema.statics = {
	fetch: function(cb) {
		return this
		.find({})
		.sort('meta.undateAt')
		.exec(cb)
	},
	findById: function(id,cb) {
		return this
		.findOne({_id:id})
		.exec(cb)
	}
}

//导出模式
module.exports = MovieSchema