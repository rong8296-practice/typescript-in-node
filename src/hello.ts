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
