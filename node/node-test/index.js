var klass=require('./klass')

klass.add("Laiie",['白富美','高富帅'])

exports.add=function(kalsses){
	kalsses.forEach(function(item,index){
		var _klass=item
		var teacherName=item.teacherName
		var students=item.students

		klass.add(teacherName,students)
	})
}