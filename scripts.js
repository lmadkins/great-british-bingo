// Cached element references

const initGameBtn = document.querySelector('#gameStart')
//hide entry view, load main view, render game
const entryPageContainer = document.querySelector('#entry-page-container')
const mainGameContainer = document.querySelector('#main-game-container')


// const gameRestart = document.querySelector('#gameRestart')
// ^ will use this later when adding a popup to confirm starting a new game

const renderNewGame = document.querySelector('.renderGameBtn')
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

function renderNew () {
// add as parameter to newGameBtn event listener
console.log('loaded new game')
}

function initGameView () {
// entry view classlist add hide, main game view classlist add hide
// class hidden 
entryPageContainer.classList.add('hidden')
mainGameContainer.classList.remove('hidden')
renderNew()
}

//Attach event listeners

initGameBtn.addEventListener('click', initGameView)
// ^ hide entry, load game, render new bingo card

renderNewGame.addEventListener('click', renderNew)
// ^ render new bingo card

document.querySelectorAll('.square').forEach(cardSquares => cardSquares.addEventListener('click', handleSquareClick))
// ^ on clicking a square, add a marker to it