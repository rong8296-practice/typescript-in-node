// import {platform} from 'os'
// console.log(platform())

import osName from './my-mod'
console.log('osName', osName)


import osname from 'os-name'
console.log('osname()', osname())

class Student {
  fullName: string
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
      this.fullName = firstName + " " + middleInitial + " " + lastName
  }
}

interface Person {
  firstName: string
  lastName: string
}

function greeter(person : Person) {
  return "Hello, " + person.firstName + " " + person.lastName
}

let user = new Student("Jane", "M.", "User")

console.log(user.middleInitial)
console.log(greeter(user))

enum Colors {red = -1, green, blue = -2, yellow = 0}

// const Color: Colors = Colors.green
console.log('Color', Colors.red, Colors.green, Colors.blue, Colors.yellow)
console.log('reverse Color', Colors[-1], Colors[0], Colors[-2], Colors[0])

// let strLength: number = (<string>'52').length

function greet(someone: {name: string}) {
  console.log('greet', `Hello ${someone.name}`)
}

greet({name: 'someone\'s name'})

interface i1 {
  [x: number]: string
  [y: string]: string
}

const i1o: i1 = {
  0: '0',
  [Number('2')]: '2',
  '1': '1'
}

console.log('i1o', i1o)

interface i2 {
  readonly name: string
  age?: number
  gender?: boolean
}

const i2o: i2 = {
  name: 'name'
}

console.log('i2o', i2o)

const i2o2: i2 = {
  name: 'i2o2',
  gender: false
}
console.log('i2o2', i2o2)


interface if1 {
  (p1: string, p2: number): boolean
}

const ifo: if1 = (str, len) => str.length === len

console.log('ifo(\'str\', 3)', ifo('str', 3))
console.log('ifo(\'str\', 4)', ifo('str', 4))

interface idxi {
  readonly [x: number]: string | boolean | number
  [x: string]: string | number | boolean
}

const idxio: idxi = {
  0: 0,
  1: '1',
  'a': true
}
console.log('idxio', idxio, typeof idxio[0], typeof idxio[1], typeof idxio.a)
idxio.a = false
// idxio[1] = 0
console.log('idxio', idxio, typeof idxio[0], typeof idxio[1], typeof idxio.a)
