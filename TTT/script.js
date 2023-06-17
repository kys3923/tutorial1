// declare
let cells = document.querySelectorAll('.cell')
let turnText = document.getElementById('turnText')
let cell1 = document.getElementById('box1')
let cell2 = document.getElementById('box2')
let cell3 = document.getElementById('box3')
let cell4 = document.getElementById('box4')
let cell5 = document.getElementById('box5')
let cell6 = document.getElementById('box6')
let cell7 = document.getElementById('box7')
let cell8 = document.getElementById('box8')
let cell9 = document.getElementById('box9')
let restartBtn = document.getElementsByClassName('restartBtn')

// variables
let nextTurn = true;

const turnChanger = () => {
  nextTurn = !nextTurn
  nextTurn ? turnText.innerText = 'Turn for O' : turnText.innerText = 'Turn for X'
}

// gamefunction

// disable 
const disableGame = () => {
  for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = () => {
      return false
    }
  }
}

// win conditions - (123, 147, 159, 258, 357, 369, 456, 789)
const checkWin = () => {
  console.log(cell1, 'checking')
  if(cell1.innerHTML === 'O' && cell2.innerHTML === 'O' && cell3.innerHTML === 'O' || cell1.innerHTML === 'O' && cell4.innerHTML === 'O' && cell7.innerHTML === 'O' || cell1.innerHTML === 'O' && cell5.innerHTML === 'O' && cell9.innerHTML === 'O' || cell2.innerHTML === 'O' && cell5.innerHTML === 'O' && cell8.innerHTML === 'O' || cell3.innerHTML === 'O' && cell5.innerHTML === 'O' && cell7.innerHTML === 'O' || cell3.innerHTML === 'O' && cell6.innerHTML === 'O' && cell9.innerHTML === 'O' || cell4.innerHTML === 'O' && cell5.innerHTML === 'O' && cell6.innerHTML === 'O' || cell7.innerHTML === 'O' && cell8.innerHTML === 'O' && cell9.innerHTML === 'O') {
    disableGame()
    turnText.innerHTML = 'Player O wins!'
  } else if (cell1.innerHTML === 'X' && cell2.innerHTML === 'X' && cell3.innerHTML === 'X' || cell1.innerHTML === 'X' && cell4.innerHTML === 'X' && cell7.innerHTML === 'X' || cell1.innerHTML === 'X' && cell5.innerHTML === 'X' && cell9.innerHTML === 'X' || cell2.innerHTML === 'X' && cell5.innerHTML === 'X' && cell8.innerHTML === 'X' || cell3.innerHTML === 'X' && cell5.innerHTML === 'X' && cell7.innerHTML === 'X' || cell3.innerHTML === 'X' && cell6.innerHTML === 'X' && cell9.innerHTML === 'X' || cell4.innerHTML === 'X' && cell5.innerHTML === 'X' && cell6.innerHTML === 'X' || cell7.innerHTML === 'X' && cell8.innerHTML === 'X' && cell9.innerHTML === 'X') {
    disableGame()
    turnText.innerHTML = 'Player X wins!'
  } else {
    turnChanger()
  }
}

const game = () => {
  for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = () => {
      if(cells[i].innerHTML !== 'O' && cells[i].innerHTML !== 'X') { 
        if(nextTurn) {
          cells[i].innerHTML = 'O'
          // Check if game finished
          checkWin()
        } else {
          cells[i].innerHTML = 'X'
          // check if game finished
          checkWin()
        }
      }
    }
  }
}

game()

restartBtn[0].addEventListener('click', (e) => {
  window.location.reload()
})