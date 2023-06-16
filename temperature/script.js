
// declare
let input = document.getElementsByClassName('typeInput')[0]
let convertBtn = document.getElementById('convertButton')
let clearBtn = document.getElementById('clearButton')
let resultTxt = document.getElementsByClassName('resultText')[0]
let Cel = document.getElementById('Cel')
let Far = document.getElementById('Far')
let selectedTempType = ''
let reusltValue = ''

const convertTemperature = (temperature) => {
  if(temperature === 'cel') {
    let inputtedValue = Number(input.value)
    let tempResult = (inputtedValue * 9/5) + 32
    reusltValue = tempResult.toFixed(2)
  }
  if(temperature === 'far') {
    let inputtedValue = Number(input.value)
    let tempResult = (inputtedValue - 32) * 5/9
    reusltValue = tempResult.toFixed(2)
  }
}

document.querySelector('form').addEventListener('click', (e) => {
  e.preventDefault()

  convertBtn.addEventListener('click', async (e) => {
    // validate
    if(!Cel.checked && !Far.checked) {
      return window.alert('please select option')
    }
    if(Cel.checked) {
      selectedTempType = 'cel'
    }
    if(Far.checked) {
      selectedTempType = 'far'
    }
    await convertTemperature(selectedTempType)
    resultTxt.innerHTML = reusltValue
    if(Number(reusltValue) > 100 && Far.checked) {
      resultTxt.style.color = 'red'
    }
    if(Number(reusltValue) < 0 && Far.checked) {
      resultTxt.style.color = 'blue'
    }
    if(Number(reusltValue) > 212 && Cel.checked) {
      resultTxt.style.color = 'red'
    }
    if(Number(reusltValue) < 32 && Cel.checked) {
      resultTxt.style.color = 'blue'
    }
  })
  
  clearBtn.addEventListener('click', (e) => {
    input.value = ''
  })
})


