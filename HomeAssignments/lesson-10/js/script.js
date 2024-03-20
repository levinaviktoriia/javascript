"use strict"
function generateNumbers(countNumb, minNumb, maxNumb) {
	let arr = []
	for (let i = 0; i < countNumb; i++) {
		let numb = minNumb + Math.floor(Math.random() * (maxNumb - minNumb + 1))
		arr.push(numb)
	}
	return arr
}