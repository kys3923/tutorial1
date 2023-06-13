// variables
// let x = 'this is variable x' // before ES6

// constant
const z = 'this is constant z'

// operators
let x = '     4      '
let y = 8

let test = y += 1
let test2 = test 

// data types

let string = ''
let number = 0 + ''
let boolean = false // true
let nullValue = null
let arry = []
let object = {
  name: 'John',
  address: '12231 sunset st',

}
let date = Date


function asdfadsf () {
  return 'before ES6'
} // before ES6

const adsfadf = () => {
  return 'after ES6'
}

// String, Number Value 
// slice(start, end)
// substring(start, end)
// replace(subject, replacement)
// toUpperCase()
// toLowerCase()
// concat(string1, string2) => string1string2
// trim, trimStart(), trimEnd()
// charAt(number)
// split('some string')
// let test4 = tempArry.splice(1, 1, '8')
// let slice = tempArry.slice(3)
// let splice = tempArry.splice(1, 2)
// let sort = tempArry2.sort()

// Array Value
let tempArry = ['empty', 8, {name: 'asdf'}, '4']
let tempArry2 = [ '1', 'asdf', 'ddienf', '2']
// push()
const test3 = () => {
  tempArry.pop()
}
test3()

tempArry.forEach((item) => item + 'test') // ES6

// >, <, <=, >=, !=
console.log(tempArry[2].name) //파일 실행기