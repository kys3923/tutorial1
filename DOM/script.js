// DOM = Document Object Model

let display = document.getElementById('displayValue')
let startButton = document.getElementById('startButton')
let stopButton = document.getElementById('stopButton')

// cookie, localStorage-JSON only

let sampleJSON = {
  name: 'John',
  lastName: 'Smith'
}

let JSONObject = JSON.stringify(sampleJSON)

console.log(JSONObject)

const saveToLocal = (e) => {
  sessionStorage
  localStorage.setItem('name', sampleJSON.name)
  localStorage.setItem('lastName', sampleJSON.lastName)
}

// const displayIncrement = (e) => {
//   e.preventDefault()
//   let number = Number(display.innerText)
//   number += 1
//   display.innerText = number
// }

// const interval = setInterval(() => {
//     let number = Number(display.innerText)
//     number += 1
//     display.innerText = number
//   }, 1000)


const autoIncrement = (e, functionName) => {
  e.preventDefault()
  let timer = setInterval(() => {
    let number = Number(display.innerText)
    number += 1
    display.innerText = number
  }, 1000)
  if(functionName === 'clear') {
    console.log('asdfasdf')
    clearInterval(timer)
  }
}

startButton.addEventListener('click', (e) => saveToLocal(e, 'timer'))
stopButton.addEventListener('click', (e) => autoIncrement(e, 'clear'))

document.addEventListener('DOMContentLoaded', () => {
  // JS 
  // let test1 = document.getElementById('test1')
  // let test2 = document.getElementsByClassName('test2') // better choice
  // test2[0].innerHTML = 'modified'
  // test1.innerHTML= 'ayasydasd'
  // console.log(test1, test2)
  // let paragraph = document.querySelector('p')
  // paragraph.style.color='blue'
  // let inputBox = document.getElementById('inputBox')
  // inputBox.value = 'asdfasdf'
  // let eventBox1 = document.getElementById('box1Event')
  // let eventBox2 = document.getElementById('box2Event')
  // eventBox1.addEventListener('click', (e) => {
  //   // e.preventDefault()
  //   console.log('box1 clicked')
  // })
  // eventBox1.addEventListener('mouseover', (e) => {
  //   console.log('box1 mouse pointer entered')
  // })
  // eventBox1.addEventListener('mouseout', (e) => {
  //   console.log('box1 mouse pointer exited')
  // })
  // eventBox2.addEventListener('click', (e) => {
  //   e.preventDefault()
  //   console.log('box2 clicked')
  // })
})