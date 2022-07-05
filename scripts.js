////////////////////////////////
// Cached element references

const initGameBtn = document.querySelector('#gameStart')
//hide entry view, load main view, render game
const entryPageContainer = document.querySelector('#entry-page-container')
const mainGameContainer = document.querySelector('#main-game-container')

// const sq1 = document.querySelector('#sq1')
// const sq2 = document.querySelector('#sq2')
// const sq3 = document.querySelector('#sq3')
// const sq4 = document.querySelector('#sq4')
// const sq5 = document.querySelector('#sq5')
// const sq6 = document.querySelector('#sq6')
// const sq7 = document.querySelector('#sq7')
// const sq8 = document.querySelector('#sq8')
// const sq9 = document.querySelector('#sq9')

// const gameRestart = document.querySelector('#gameRestart')
// ^ will use this later when adding a popup to confirm starting a new game

const renderNewGame = document.querySelector('.renderGameBtn')
const cardSquares = document.querySelectorAll('.square')

////////////////////////////////
// store data
let squareOpts = ['A bake collapses/breaks', 'Baker helps another baker', "Bakers haven't heard of something before", 'Dry', 'Even layering', 'Flavors are not coming through', 'Flavors are too strong', 'Good or beautiful sponge', 'Handshake from Paul', 'Hosts wearing costumes', 'Hot day in the tent', '"I\'ve never made this before"', 'Innuendo', 'It looks a mess/It could be neater', 'It looks bad but the flavors are good', 'It looks plain, underwhelming', 'It tastes good but the textures are wrong', 'Joke about Paul', 'Overproved', "Paul question's someone's choice", 'Raw', 'Recipe from a relative', 'Rubbery', 'Soggy bottom', 'Someone makes a mistake and starts over', 'Stodgy', 'Textures are wrong', 'Two or more people have similar themes/ideas/flavors', 'Underdone or underbaked', 'Underproved', 'Uneven distribution of filling', 'Uneven layering']

//re-sorted alphabetically
// let alphArr = squareOpts.sort((a, b) => a.localeCompare(b))
// console.log(alphArr)

////////////////////////////////
// Event handlers

// initializing function 
function initGameView () {
  // entry view classlist add hide, main game view classlist add hide
  // class hidden 
  entryPageContainer.classList.add('hidden')
  mainGameContainer.classList.remove('hidden')
  renderNew()
  }

// function shuffleArray (){
  let newArray = squareOpts.sort(() => Math.random() - 0.5)

// shuffleArray()
// console.log(shuffleArray())
// console.log(shuffleArray(newArray[0]))
  // rendering 
function renderNew () {
  // console.log(newArray[0], newArray[1], newArray[2], newArray[3], newArray[4], newArray[5], newArray[6], newArray[7], newArray[8])
  sq1.innerText = newArray[0]
  sq2.innerText = newArray[1]
  sq3.innerText = newArray[2]
  sq4.innerText = newArray[3]
  sq5.innerText = newArray[4]
  sq6.innerText = newArray[5]
  sq7.innerText = newArray[6]
  sq8.innerText = newArray[7]
  sq9.innerText = newArray[8]
  // add as parameter to newGameBtn event listener

  }
  renderNew()

function handleSquareClick () {
  // add overlay style to show marked off
  // toggle class?
  // classList.remove/add
  // this.onclick
  console.log('clicked')
  // document.getElementById(myDropdown").classList.toggle("show")
 this.classList.add('marked')
}

function checkWin () {
  //Element.matches()?
  // MVP: alert, ask to play again
  // stretch: modal/effects,
  
}


// Winning combinations:
// sq 1 && sq 2 && sq 3
// sq 4 && sq 5 && sq 6
// sq 7 && sq 8 && sq 9
// sq 1 && sq 4 && sq 7
// sq 2 && sq 5 && sq 8
// sq 3 && sq 6 && sq 9



////////////////////////////////
//Attach event listeners

initGameBtn.addEventListener('click', initGameView)
// ^ hide entry, load game, render new bingo card

renderNewGame.addEventListener('click', renderNew)
// ^ render new bingo card

document.querySelectorAll('.square').forEach(cardSquares => cardSquares.addEventListener('click', handleSquareClick))
// ^ on clicking a square, add a marker to it