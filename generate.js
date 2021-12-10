/*
function* genDemo() {
	console.log('开始第一段')
	let a = yield 'generator 1'
	console.log(a)

	console.log('开始第二段')
	yield 'generator 2'
}

const gen = genDemo()
let next = gen.next(1)
while (!next.done) {
	console.log(next)
	next = gen.next(2)
}*/

//foo函数
/*
function* foo() {
	let response1 = yield fetch('https://www.geekbang.org')
	console.log('response1')
	console.log(response1)
	let response2 = yield fetch('https://www.geekbang.org/test')
	console.log('response2')
	console.log(response2)
}

//执行foo函数的代码
let gen = foo()
function getGenPromise(gen) {
	return gen.next().value
}
getGenPromise(gen).then((response) => {
	console.log('response1')
	console.log(response)
	return getGenPromise(gen)
}).then((response) => {
	console.log('response2')
	console.log(response)
})*/

async function foo() {
	console.log('foo')
	return await 100
}
async function bar() {
	console.log('bar start')
	let a = await foo()
	console.log(a)
	console.log('bar end')
}
console.log('script start')
setTimeout(function () {
	console.log('setTimeout')
}, 0)
bar();
new Promise(function (resolve) {
	console.log('promise executor')
	resolve();
}).then(function () {
	console.log('promise then')
})
console.log('script end')