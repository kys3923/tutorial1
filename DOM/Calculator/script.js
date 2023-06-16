
// declares
let inputtedValue = document.getElementsByClassName('inputtedValue')
let resultValue = document.getElementsByClassName('result')
let number1 = document.getElementsByClassName('Num1')[0]
let number2 = document.getElementsByClassName('Num2')[0]
let number3 = document.getElementsByClassName('Num3')[0]
let number4 = document.getElementsByClassName('Num4')[0]
let number5 = document.getElementsByClassName('Num5')[0]
let number6 = document.getElementsByClassName('Num6')[0]
let number7 = document.getElementsByClassName('Num7')[0]
let number8 = document.getElementsByClassName('Num8')[0]
let number9 = document.getElementsByClassName('Num9')[0]
let number0 = document.getElementsByClassName('Num0')[0]
let commaButton = document.getElementsByClassName('comma')[0]
let equalButton = document.getElementsByClassName('equal')[0]
let plusButton = document.getElementsByClassName('plus')[0]
let minusButton = document.getElementsByClassName('minus')[0]
let multiplyButton = document.getElementsByClassName('multiply')[0]
let divideButton = document.getElementsByClassName('divide')[0]
let clearButton = document.getElementsByClassName('clear')[0]

let tempInput = ''
let tempFirstInput = ''
let tempOperator = ''
let tempSecondInput = ''

const InputEvent = (e, input, type) => {
  e.preventDefault()
  if(type === 'numbers') {
    if(tempOperator === '') {
      tempFirstInput = tempFirstInput + input
    } else {
      tempSecondInput = tempSecondInput + input
    }
  }
  if(type === 'operator') {
    tempOperator = input
  }

  tempInput = tempFirstInput + ' ' + tempOperator + ' ' + tempSecondInput
  inputtedValue[0].innerHTML = `input: ${tempInput}`
}

const Calculate = (e) => {
  e.preventDefault()
  if(tempFirstInput === '' || tempOperator === '' || tempSecondInput === '') {
    return
  }
  let calculatedValue
  if(tempOperator === '+') {
    calculatedValue = Number(tempFirstInput) + Number(tempSecondInput)
  }
  if(tempOperator === '-') {
    calculatedValue = Number(tempFirstInput) - Number(tempSecondInput)
  }
  if(tempOperator === '*') {
    calculatedValue = Number(tempFirstInput) * Number(tempSecondInput)
  }
  if(tempOperator === '/') {
    calculatedValue = Number(tempFirstInput) / Number(tempSecondInput)
  }

  // checking decimal places

  if(calculatedValue === Math.floor(calculatedValue)) {
    resultValue[0].innerHTML = calculatedValue    
  } else {
    resultValue[0].innerHTML = calculatedValue.toFixed(3)
  }
}

const clearValues = (e) => {
  e.preventDefault()
  tempInput = ''
  tempFirstInput = ''
  tempOperator = ''
  tempSecondInput = ''
  inputtedValue[0].innerHTML = 'input:'
  resultValue[0].innerHTML = ''
}

number1.addEventListener('click', (e) => InputEvent(e, '1', 'numbers'))
number2.addEventListener('click', (e) => InputEvent(e, '2', 'numbers'))
number3.addEventListener('click', (e) => InputEvent(e, '3', 'numbers'))
number4.addEventListener('click', (e) => InputEvent(e, '4', 'numbers'))
number5.addEventListener('click', (e) => InputEvent(e, '5', 'numbers'))
number6.addEventListener('click', (e) => InputEvent(e, '6', 'numbers'))
number7.addEventListener('click', (e) => InputEvent(e, '7', 'numbers'))
number8.addEventListener('click', (e) => InputEvent(e, '8', 'numbers'))
number9.addEventListener('click', (e) => InputEvent(e, '9', 'numbers'))
commaButton.addEventListener('click', (e) => InputEvent(e, '.', 'numbers'))
plusButton.addEventListener('click', (e) => InputEvent(e, '+', 'operator'))
minusButton.addEventListener('click', (e) => InputEvent(e, '-', 'operator'))
multiplyButton.addEventListener('click', (e) => InputEvent(e, '*', 'operator'))
divideButton.addEventListener('click', (e) => InputEvent(e, '/', 'operator'))
equalButton.addEventListener('click', (e) => Calculate(e))
clearButton.addEventListener('click', (e) => clearValues(e))