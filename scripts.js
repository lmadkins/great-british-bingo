// Cached element references
const restartBtn = document.querySelector('#restartBtn')
const cardSquares = document.querySelectorAll('.square')

// initializing function 
// rendering board with 
function renderCard () {
  // each one is array value
  //for each?
  // inner text?

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

let squareOpts = []

//Attach event listeners
restartBtn.addEventListener('click',  () => console.log('Reset button clicked!'))

document.querySelectorAll('.square').forEach(cardSquares => cardSquares.addEventListener('click', handleSquareClick))