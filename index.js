const {platform} = require('os')
console.log('os.platform()', platform())

function bound(fn, obj) {
  return function(...args) {
    fn.call(obj, ...args)
  }
}

function fn(a, b) {
  console.log('this, a, b', this, a, b)
}

const fnf = bound(fn, {it: 'It is this!'})

fnf('one', 'two')


const mySet = new Set([1, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5])
console.log('mySet', mySet)
console.log(mySet.has(5))
mySet.add({k: 'k'})
mySet.add({k: 'k'})
console.log('mySet', mySet)
console.log(mySet.has({k: 'k'}))
const ok = {ok: 'ok'}
mySet.add(ok)
mySet.add(ok)
console.log('mySet', mySet)
console.log(mySet.has(ok))
console.log(mySet.size)
mySet.add(NaN)
mySet.add(NaN)
console.log('mySet', mySet)
console.log(mySet.has(NaN))
