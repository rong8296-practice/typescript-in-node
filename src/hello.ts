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


interface clock {
  currentTime: Date
  setTime(d: Date): void
}

class Clock implements clock {
  currentTime: Date
  constructor(y: number, m: number, d: number) {
    this.currentTime = new Date(y, m, d)
  }
  setTime(d: Date) {
    this.currentTime = d
  }
}

const clocko = new Clock(2018, 11, 2)
console.log('clocko', clocko)

interface nc {
  new (p1: string): nci
}

interface nci {
  s: string
  log(): void
}

class classnc implements nci {
  s: string
  constructor(s: string) {
    this.s = s
  }
  log() {
    console.log('this.s is', this.s);
  }
}

function createnc(ctor: nc, s: string): nci {
  return new ctor(s)
}

const nco = createnc(classnc, 'str')
nco.log()


interface a1 {
  do(s: string): string
}

interface a2 {
  s: string
}

interface a3 extends a1, a2 {
  name: string
}

const a3o: a3 = {
  do(s) {
    return s + s
  },
  s: 'str',
  name: 'a3o'
}

console.log('a3o.do(a3o.name)', a3o.do(a3o.name))

interface c {
  (n: number): number
  do(n: number): number
  who: string
}

const co: c = function(n) {
  return n
}
co.who = 'who'
co.do = function(n) {
  return n * 2
}
console.log('co.who', co.who)
console.log('co.do(co(3))', co.do(co(3)))

class Control {
  private state: number
  constructor(state: number) {
    this.state = state
  }
  read(): number {
    return this.state
  }
}

interface Selectable extends Control {
  select(n: number): number[]
}

class Button extends Control implements Selectable {
  select(n: number) {
    return [n, n]
  }
}

const btn = new Button(0)

console.log('btn.select(btn.read())', btn.select(btn.read()))


;(function(): void {

  class A {
    // name: string
    // constructor(name: string) {
    //   this.name = name
    // }
    shout(): void {
      console.log('shouting')
    }
  }

  class AA extends A {
    read(): string {
      return 'AA'
    }
  }

  const aao: AA = new AA()
  console.log('aao.read()', aao.read())
  aao.shout()

})()

;(function(): void {

  class A {
    private name: string
    protected age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
    readName(): string {
      return this.name
    }
  }

  class AA extends A {
    constructor(name: string, age: number) {
      super(name, age)
    }
    readAge(): number {
      return this.age
    }
    // readName(): string {
    //   return this.name // 属性“name”为私有属性，只能在类“A”中访问。
    // }
  }

  const ao: A = new A('yaah', 28)
  const aao: AA = new AA('yooh', 82)

  console.log('ao.readName()', ao.readName())

  // console.log(ao.name) // 属性“name”为私有属性，只能在类“A”中访问。
  // console.log(aao.name) // 属性“name”为私有属性，只能在类“A”中访问。
  // console.log(aao.age) // 属性“age”受保护，只能在类“A”及其子类中访问。
  console.log('aao.readAge()', aao.readAge())
  // console.log(ao.name)

})()

;(function(): void {

  class A {
    private _name: string
    constructor(name: string) {
      this._name = name + '-ctor'
    }
    getOrgName(): string {
      return this._name
    }
    get name(): string {
      return this._name.split('-')[0]
    }
    set name(name: string) {
      this._name = name + '-by-set'
    }
  }

  const ao: A = new A('ao')
  console.log('ao.getOrgName()', ao.getOrgName())
  console.log('ao.name', ao.name)

  ao.name = 'new'
  console.log('ao.getOrgName()', ao.getOrgName())
  console.log('ao.name', ao.name)


})()

;(function(): void {

  class A {
    private _name: string
    constructor(name: string) {
      this._name = name + '-ctor'
    }
    getOrgName(): string {
      return this._name
    }
    get name(): string {
      return this._name.split('-')[0]
    }
    // set name(name: string) {
    //   this._name = name + '-by-set'
    // }
  }

  const ao: A = new A('ao')
  console.log('ao.getOrgName()', ao.getOrgName())
  console.log('ao.name', ao.name)

  // ao.name = 'new' // Cannot assign to 'name' because it is a read-only property.
  // console.log('ao.getOrgName()', ao.getOrgName())
  // console.log('ao.name', ao.name)


})()

;(function(): void {

  class A {
    constructor(
      readonly name: string,
      readonly age: number
    ) {}
  }

  const ao: A = new A('nao', 28)
  console.log('ao.name, ao.age', ao.name, ao.age)
  // ao.name = 'new ao' // Cannot assign to 'name' because it is a read-only property.



})()

;(function(): void {

  class A {
    static count: number = 0
    constructor(
      readonly name: string,
      readonly age: number
    ) {
      A.count++
    }
  }

  const a1: A = new A('a1', 1)
  const a2: A = new A('a2', 2)
  const a3: A = new A('a2', 3)
  console.log('a1, a2, a3', a1, a2, a3)
  console.log('A.count', A.count)
  console.log('a2', a2)

})()

;(function(): void {

  abstract class A {
    constructor(private name: string) {}
    abstract readName(): string
    readOrgName(): string {
      return this.name
    }
  }

  class AA extends A {
    nameAA: string
    constructor(name: string, nameAA: string) {
      super(name)
      this.nameAA = nameAA
    }
    readName(): string {
      // return this.name // 属性“name”为私有属性，只能在类“A”中访问。
      return 'Cant\'t read name, it\'s private'
    }
    readNameAA(): string {
      return this.nameAA
    }
  }

  const aa: AA = new AA('A', 'AA')
  console.log('aa.readNameAA()', aa.readNameAA())
  console.log('aa.readName()', aa.readName())
  console.log('aa.readOrgName()', aa.readOrgName())

})()

;(function(): void {
  class Greeter {
    static standardGreeting = "Hello, there";
    constructor(public greeting?: string) {}
    greet() {
      if (this.greeting) {
        return "Hello, " + this.greeting;
      }
      else {
        return Greeter.standardGreeting;
      }
    }
  }

  let greeter1: Greeter;
  greeter1 = new Greeter();
  console.log(greeter1.greet());

  let greeterMaker: typeof Greeter = Greeter;
  greeterMaker.standardGreeting = "Hey there!";

  let greeter2: Greeter = new greeterMaker();
  console.log(greeter2.greet());
})()

;(function(): void {
  function yoyo(this: any, age: number): void {
    console.log(age)
  }

  yoyo.apply({name: 'yoyoname'}, [28])
})()

;(function(): void {
  function fn(s: string): number
  function fn(s: number): string
  function fn(s: any): any {
    const type: string = typeof s
    switch(type) {
      case 'string':
        return s.length
      break;
      case 'number':
        return s.toString()
      break;
      default:
        return 'you got a message'
      break;
    }
  }

  console.log('fn(3)', fn(3))
  console.log('fn(\'three\')', fn('three'))


  interface ifn {
    (p1: string): number
    (p1: number): string
    (p1: any): any
  }

  const fn2: ifn = function(s: any): any {
    const type: string = typeof s
    switch(type) {
      case 'string':
        return s.length
      break;
      case 'number':
        return s.toString()
      break;
      default:
        return s
      break;
    }
  }

  console.log('fn2([2])', fn2([2]))
  console.log('fn2(2)', fn2(2))
  console.log('fn2(\'two\')', fn2('two'))

  function doThat(this: any, n: number): string {
    return `this.str.length === n => ${this.str.length === n}`
  }

  console.log('doThat.call({str: \'str\'}, 3)', doThat.call({str: 'str'}, 3))


})()
