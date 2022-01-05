//强引用
/*

let key = [1, 2, 3]
let arr = [
	[key, 1]
]
key = null
console.log(arr)*/
global.gc()
let key = {a: 1}
let map = new Map()
map.set(key, 22)
key = null
console.log(map.entries())