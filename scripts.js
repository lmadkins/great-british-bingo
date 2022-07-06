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

const gameRestart = document.querySelector('#gameRestart')
// ^ will use this later when adding a popup to confirm starting a new game

const renderNewGame = document.querySelector('.renderGameBtn')
const cardSquares = document.querySelectorAll('.square')

////////////////////////////////
// store data
let squareOpts = ['A bake collapses/breaks', 'Baker helps another baker', "Bakers haven't heard of something before", '"Dry"', '"Even layering"', 'Flavors are not coming through', '"Flavors are too strong"', '"Good/beautiful sponge"', 'Handshake from Paul', 'Hosts wearing costumes', 'Hot day in the tent', '"I\'ve never made this before"', 'Innuendo', '"It looks a mess/It could be neater"', '"It looks bad but the flavors are good"', '"It looks plain/ underwhelming"', '"It tastes good but the textures are wrong"', 'Joke about Paul', '"Overproved"', "Paul question's someone's choice", 'Raw', 'Recipe from a relative', '"Rubbery"', '"Soggy bottom"', 'Someone makes a mistake and starts over', '"Stodgy"', '"Textures are wrong"', 'Two or more people have similar themes/ideas/flavors', '"Underbaked"', '"Underproved"', 'Uneven distribution of filling', '"Uneven layering"']

//if want to re-sort items in array alphabetically:
// let alphArr = squareOpts.sort((a, b) => a.localeCompare(b))
// console.log(alphArr)

////////////////////////////////



function handleSquareClick () {
  this.classList.toggle('marked')

  checkWin()
}

function checkWin () {
  //Element.matches()?
  // MVP: alert, ask to play again
  // stretch: modal/effects,
  if (
    cardSquares[0].classList.contains('marked') && 
    cardSquares[1].classList.contains('marked') && 
    cardSquares[2].classList.contains('marked') && 
    cardSquares[3].classList.contains('marked') && 
    cardSquares[4].classList.contains('marked')) {
      console.log('bingo!')
    } 
    else if (
      cardSquares[5].classList.contains('marked') && 
      cardSquares[6].classList.contains('marked') && 
      cardSquares[7].classList.contains('marked') && 
      cardSquares[8].classList.contains('marked') && 
      cardSquares[9].classList.contains('marked')) {
      console.log('bingo!')
    } 
    else if (
      cardSquares[10].classList.contains('marked') && 
      cardSquares[11].classList.contains('marked') && 
      cardSquares[12].classList.contains('marked'))  
      && cardSquares[13].classList.contains('marked') && 
      cardSquares[14].classList.contains('marked')){
      console.log('bingo!')
    } 
    else if (
      cardSquares[15].classList.contains('marked') && 
      cardSquares[16].classList.contains('marked') && 
      cardSquares[17].classList.contains('marked') && 
      cardSquares[18].classList.contains('marked') && 
      cardSquares[19].classList.contains('marked')) {
      console.log('bingo!')
    } 
    else if (
      cardSquares[20].classList.contains('marked') && 
      cardSquares[21].classList.contains('marked') && 
      cardSquares[22].classList.contains('marked') && 
      cardSquares[23].classList.contains('marked') && 
      cardSquares[24].classList.contains('marked')) {
        console.log('bingo!')
      } 
      else if (
        cardSquares[0].classList.contains('marked') && 
        cardSquares[5].classList.contains('marked') && 
        cardSquares[10].classList.contains('marked') && 
        cardSquares[15].classList.contains('marked') && 
        cardSquares[20].classList.contains('marked')) {
          console.log('bingo!')
        } 
        else if (
          cardSquares[1].classList.contains('marked') && 
          cardSquares[6].classList.contains('marked') && 
          cardSquares[11].classList.contains('marked') && 
          cardSquares[16].classList.contains('marked') && 
          cardSquares[21].classList.contains('marked')) {
            console.log('bingo!')
          } 
          else if (
            cardSquares[2].classList.contains('marked') && 
            cardSquares[7].classList.contains('marked') && 
            cardSquares[12].classList.contains('marked') && 
            cardSquares[17].classList.contains('marked') && 
            cardSquares[22].classList.contains('marked')) {
              console.log('bingo!')
            } 
            else if (
              cardSquares[3].classList.contains('marked') && 
              cardSquares[8].classList.contains('marked') && 
              cardSquares[13].classList.contains('marked') && 
              cardSquares[18].classList.contains('marked') && 
              cardSquares[23].classList.contains('marked')) {
                console.log('bingo!')
              } 
              else if (
                cardSquares[4].classList.contains('marked') && 
                cardSquares[9].classList.contains('marked') && 
                cardSquares[14].classList.contains('marked') && 
                cardSquares[19].classList.contains('marked') && 
                cardSquares[24].classList.contains('marked')) {
                  console.log('bingo!')
                } 
}
// Winning combinations:
// sq0 && sq1 && sq2 && sq3 && sq4
// sq5 && sq6 && sq7 && sq8 && sq9
// sq10 && sq11 && sq12 && sq13 && sq14
// sq15 && sq16 && sq17 && sq18 && sq19
// sq20 && sq21 && sq22 && sq23 && sq24
// sq0 && sq5 && sq10 && sq15 && sq20
// sq1 && sq6 && sq11 && sq16 && sq21
// sq2 && sq7 && sq12 && sq17 && sq22
// sq3 && sq8 && sq13 && sq18 && sq23
// sq4 && sq9 && sq14 && sq19 && sq24

  // rendering 
  function renderNew () {

    for (let i = 0; i < cardSquares.length; i++) {
      cardSquares[i].classList.remove('marked')
    }

    let newArray = squareOpts.sort(() => Math.random() - 0.5)
  
    sq1.innerText = newArray[0]
    sq2.innerText = newArray[1]
    sq3.innerText = newArray[2]
    sq4.innerText = newArray[3]
    sq5.innerText = newArray[4]
    sq6.innerText = newArray[5]
    sq7.innerText = newArray[6]
    sq8.innerText = newArray[7]
    sq9.innerText = newArray[8]
    sq10.innerText = newArray[9]
    sq11.innerText = newArray[10]
    sq12.innerText = newArray[11]
    sq13.innerText = newArray[12]
    sq14.innerText = newArray[13]
    sq15.innerText = newArray[14]
    sq16.innerText = newArray[15]
    sq17.innerText = newArray[16]
    sq18.innerText = newArray[17]
    sq19.innerText = newArray[18]
    sq20.innerText = newArray[19]
    sq21.innerText = newArray[20]
    sq22.innerText = newArray[21]
    sq23.innerText = newArray[22]
    sq24.innerText = newArray[23]
    sq25.innerText = newArray[24]
    }

    // initializing function 
function initGameView () {
  // entry view classlist add hide, main game view classlist add hide
  // class hidden 
  entryPageContainer.classList.add('hidden')
  mainGameContainer.classList.remove('hidden')

  renderNew()
  }

////////////////////////////////
//Attach event listeners

initGameBtn.addEventListener('click', initGameView)
// ^ hide entry, load game, render new bingo card

renderNewGame.addEventListener('click', renderNew)
// ^ render new bingo card

gameRestart.addEventListener('click', renderNew)
// ^ restart button, renders new card and removes any marked styles

document.querySelectorAll('.square').forEach(cardSquares => cardSquares.addEventListener('click', handleSquareClick))
// ^ on clicking a square, add a marker to it