const bar = require('./bar')
let count = 1

module.exports = function() {
	count++
	console.log('count is' + count)
}