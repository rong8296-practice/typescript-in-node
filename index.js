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
