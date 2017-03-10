// Example to show how generators can hand off delegation to other generators.
function* create3To4Counter() {
	yield 3
	return 4
}

function* createCounter() {
	yield 1
	yield 2
	const four = yield* create3To4Counter()
	console.log(four)
	yield 5
}

for (let i of createCounter()) {
	console.log(i)
}
