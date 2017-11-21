var pet={
	words:'...',
	speak:function(say){
		console.log(say+' '+this.words)
	}
}

// pet.speak('Speak')

var dog={
	words:'Wang'
}

pet.speak.call(dog,'Speak')   //call使this指向了dog对象

// pet.speak.apply(dog,['Speak'])

//通过call、apply这种改变this上下文的特性，可以方便的实现继承

function Pet(words){
	this.words=words
	this.speak=function(){
		console.log(this.words)
	}
}

function Dog(words){
	Pet.call(this,words)
}

var dog=new Dog('Wang')

dog.speak()













