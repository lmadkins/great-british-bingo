// Cached element references
const restartBtn = document.querySelector('#restartBtn')
const cardSquares = document.querySelectorAll('.square')

// store data
let squareOpts = []

// Event handlers

// initializing function 
// rendering board with 
const renderCard = (someParameter) => {
  // each one is array value
  //for each?
  // inner text?
  //loop through array - for each? and pick 8 at random
}

function handleSquareClick () {
  // add overlay style to show marked off
  // toggle class?
  // classList.remove/add
  // this.onclick
  console.log('clicked')
  // document.getElementById("myDropdown").classList.toggle("show")
 this.classList.add('marked')
}

function checkWin () {

}

function newGame () {

}

//Attach event listeners
restartBtn.addEventListener('click',  () => console.log('Reset button clicked!'))

document.querySelectorAll('.square').forEach(cardSquares => cardSquares.addEventListener('click', handleSquareClick))