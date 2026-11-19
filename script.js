const board = document.getElementById('board');
const squares = document.getElementsByClassName('square');
const players = ['X', 'O'];
let activePlayer = players[0];
const endText = document.createElement('h3');
endText.textContent = `Now it's X's turn!`;
endText.style.marginTop = '30px';
endText.style.textAlign = 'center';
endText.style.fontFamily = 'Prompt';
endText.style.fontWeight = 500;
endText.style.fontSize = '20px';
endText.style.color = '#ffffff';
board.after(endText);

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]


for(let i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', () => {
        if(squares[i].textContent !== ''){
            return
        }
        squares[i].textContent = activePlayer
        if(checkWin(activePlayer)) {
            endText.textContent=`Game is over! ${activePlayer} wins!`
            return
        }
        if(checkTie()) {
            endText.textContent= `Game is tied!`
            return
        }
        activePlayer = (activePlayer === players[0]) ? players[1] : players[0] 
        if(activePlayer == players[0]) {
            endText.textContent= `Now it's X's turn!`
        } else {
            endText.textContent= `Now it's O's turn!`
        }     
    })   
}

function checkWin(activePlayer) {
  for(let i = 0; i < winCombos.length; i++) {
    let combo = winCombos[i];
    if (squares[combo[0]].textContent === activePlayer &&
       squares[combo[1]].textContent === activePlayer &&
       squares[combo[2]].textContent === activePlayer) {
      return true;
       }
  }
    return false;
}

function checkTie() {
  for(let i = 0; i < squares.length; i++) {
    if (squares[i].textContent === '') {
      return false;
    }
  }
  return true;
}

function restartButton() {
   for(let i = 0; i < squares.length; i++) {
        squares[i].textContent = ""
    }
    endText.textContent=`Now it's X's turn!`
    activePlayer = players[0]
}

