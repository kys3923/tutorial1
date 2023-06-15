// variables
// let x = 'this is variable x' // before ES6

// constant
// const z = 'this is constant z'

// operators
// let x = '     4      '
// let y = 8

// let test = y += 1
// let test2 = test 

// data types

// let string = ''
// let number = 0 + ''
// let boolean = false // true
// let nullValue = null
// let arry = []
// let object = {
//   name: 'John',
//   address: '12231 sunset st',

// }
// let date = new Date()


// function asdfadsf () {
//   return 'before ES6'
// } // before ES6

// const adsfadf = () => {
//   return 'after ES6'
// }

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
// let tempArry = ['empty', 8, {name: 'asdf'}, '4']
// let tempArry2 = [ '1', 'asdf', 'ddienf', '2']
// let tempArry3 = []
// push()
// const test3 = () => {
//   tempArry.pop()
// }
// test3()

// tempArry.forEach((item) => item + 'test') // ES6

// >, <, <=, >=, !=

//getTime = miliseconds since 1-1 1970
// UTC - time format, easy to read
// ISO - JS standard format

// let pi = Math.PI
// let sqrt = Math.LN10

// let tempNumer = 24.123123
// let tempNumer2 = 14.123123
// let formattedNumber = Math.random()
// let tempObj = {asdf: 'asdf'}

// if?
// if (tempNumer > tempNumer2) {
//   console.log('temp number is greater')
// } 
// if (tempNumer < tempNumer2) {
//   console.log('temp number is smaller')
// }

// console.log(typeof(tempObj))

// let tempDay

// switch (new Date().getDay()) {
//   case 0:
//     tempDay = 'Sunday';
//     break;
//   case 1:
//     tempDay = 'Monday';
//     break;
//   case 2:
//     tempDay = 'Tuesday';
//     break;
//   case 3:
//     tempDay = 'WED';
//     break;
//   case 4:
//     tempDay = 'THU';
//     break;
//   case 5:
//     tempDay = 'FRI';
//     break;
//   case 66:
//     tempDay = 'SAT';
//     break;
// }

let tempArry = [
  1,
  3,
  4, 
  8,
]

// for (let i = 0; i < tempArry.length; i++) {
//   tempArry[i] += Math.PI
// }



let person = { name: 'John', familyName: 'Smith', age: 43 }
let result = ''
let result2 = person.familyName + person.age
let result3 = 0
// tempArry.Map((eachValue) => {
  //   result3 += eachValue
  // })
  
  // for(let key in person) {
    //   result += person[key]
    // }
    
    // let i = 0;
    // let resultText = 0
    // while (animals[i]) {
    //   if(animals[i] < 6) {
    //     break;
    //   } else {
    //     resultText += animals[i]
    //     i++
    //   }
    // }
    
    // ES6 loop
    // forEach
    // Map
    // find
    // filter
    
    // type string 3 = Number '3' // true, string  == Number // false
let animals = [3, 5, 3, 7, 8]
    
// let foundNumber1 = animals.find((eachValue) => eachValue === 3)
let filteredNumber = animals.filter((eachValue) => eachValue !== 3)


console.log(filteredNumber, animals)
 //파일 실행

 let newArry = []

 sorting // alphabetical, date, number value