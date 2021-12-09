/*
console.log(name) //undefined
foo() //foo
bar() // error
console.log(name2) // error
var name = 'aa' // 注意和let的区别
let name2 = '333'
let bar = function() {
	console.log('bar')
}

function foo () {
	console.log('foo')
}*/

/*
var myObj = {
  name : "极客时间", 
  showThis: function(){
    console.log(this)
    var bar = ()=>{
      this.name = "极客邦"
      console.log(this)
    }
    bar()
  }
}
myObj.showThis()
console.log(myObj.name)
console.log(global.name)
*/

 
var bar = () => {
	console.log(this) // {}
}

bar()

showName()
var showName = function() { 
	console.log(2)
}

function showName() { 
	console.log(1)
}

showName()
