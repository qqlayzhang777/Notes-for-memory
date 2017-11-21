var student=require('./student')
var teacher=require('./teacher')

teacher.add('Scott')

function add(teacherName,students){
	teacher.add(teacherName)

	students.forEach(function(item,index){
		student.add(item)
	})
}

exports.add=add   	//若想模块成为一个传统的实例，用这个

// module.exports=add  
//如果想要你的模块成为一个特别的对象类型，用这个