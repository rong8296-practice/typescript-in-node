import {platform} from 'os'
console.log(platform())


import osname from 'os-name'
console.log(osname())

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
// let strLength: number = (<string>'52').length