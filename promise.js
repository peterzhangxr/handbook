// 手写Promise
const MyPromoise = require('./MyPromise')

//基本使用
/*
const promise = new Promise((resolve, reject) => {
	console.log('pending')
})

promise.then((res) =>{
	console.log(res)
}, (err) => {
	console.log(err)
})*/

/*
const p2 = new MyPromoise((resolve, reject) => {
	resolve('success')
	console.log(11)
	throw new Error('ddd')
})
const p3 = p2.then((res) =>{
	console.log(res)
}, (error) => {
	console.log(error)
})
*/
//面试题 疑惑 0 1 2 3 4 5 6????
/*
Promise.resolve().then(() => {
	console.log(0);
	return Promise.resolve(4);
}).then((res) => {
	console.log(res)
})

Promise.resolve().then(() => {
	console.log(1);
}).then(() => {
	console.log(2);
}).then(() => {
	console.log(3);
}).then(() => {
	console.log(5);
}).then(() =>{
	console.log(6);
})*/

/*
MyPromoise.resolve().then(() => {
	console.log(0);
	return MyPromoise.resolve(4);
}).then((res) => {
	console.log(res)
})

MyPromoise.resolve().then(() => {
	console.log(1);
}).then(() => {
	console.log(2);
}).then(() => {
	console.log(3);
}).then(() => {
	console.log(5);
}).then(() =>{
	console.log(6);
})*/

/*
function executor(resolve, reject) {
	let rand = Math.random();
	console.log(1)
	console.log(rand)
	if (rand > 0.5)
			resolve()
	else
			reject()
}
var p0 = new Promise(executor);

var p1 = p0.then((value) => {
	console.log("succeed-1")
	return new Promise(executor)
})

var p3 = p1.then((value) => {
	console.log("succeed-2")
	return new Promise(executor)
})

var p4 = p3.then((value) => {
	console.log("succeed-3")
	return new Promise(executor)
})

p4.catch((error) => {
	console.log("error")
})
console.log(2)
*/

/*
Promise.resolve().then(() => {
	console.log(1)
}).then(() => {
	console.log(2)
	throw new Error('12')
}).then(() => {
	console.log(12)
}, () => {
	console.log('12')
}).catch((e) => {
	console.log(e)
}).then(() => {
	console.log(3)
}).finally()
*/
