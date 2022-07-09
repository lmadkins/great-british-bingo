const cardSquares = document.querySelectorAll('.square')

////////////////////////////////
// store data
let squareOptions = ['A bake collapses/breaks', 'Baker helps another baker', "Bakers haven't heard of something before", '"Dry"', '"Even layering"', 'Flavors are not coming through', '"Flavors are too strong"', '"Good/beautiful sponge"', 'Handshake from Paul', 'Hosts wearing costumes', 'Hot day in the tent', '"I\'ve never made this before"', 'Innuendo', '"It looks a mess/It could be neater"', '"It looks bad but the flavors are good"', '"It looks plain/ underwhelming"', '"It tastes good but the textures are wrong"', 'Joke about Paul', '"Overproved"', "Paul question's someone's choice", 'Raw', 'Recipe from a relative', '"Rubbery"', '"Soggy bottom"', 'Someone makes a mistake and starts over', '"Stodgy"', '"Textures are wrong"', 'Two or more people have similar themes/ideas/flavors', '"Underbaked"', '"Underproved"', 'Uneven distribution of filling', '"Uneven layering"']


////////////////////////////////

function handleSquareClick (e) {
  e.target.classList.toggle('marked')
  checkBingo()
}

//   // for (let i = 0; i> cardSquares.length; i++) {
//     if (cardSquares[combination[i]].classList.contains('marked')) {
//   console.log('bingo')
//     }
//   }
// }
//   checkWin([0,1,2,3,4])
function checkBingo () {
    const verifyCombo = (combo) => {
        for (const sqIndex of combo) {
            if (!cardSquares[sqIndex].classList.contains('marked')) {
                return false
            }
        }

        return true
    };
    const bingoWinningCombos = [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 15],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24]
    ];

    const winners = bingoWinningCombos.filter(verifyCombo)

    if (winners.length > 0) {
        alert(`
            Bingo! You won with the following combinations:
            
            ${winners.map(v => v.toString()).join('\n    ')}
            
            Would you like to play again?
        `)
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
    let randomOptions = squareOptions.sort(() => Math.random() - 0.5)

  cardSquares.forEach((e,i) => {
      if(!e.classList.contains('free')){
          e.innerText = randomOptions[i]
          e.classList.remove('marked')
      }
  })
}

    // initializing function 
function initGameView () {
  // entry view classlist add hide, main game view classlist add hide
  // class hidden
  document.querySelector('#entry-page-container').classList.add('hidden')
  document.querySelector('#main-game-container').classList.remove('hidden')

  renderNew()
}

////////////////////////////////
//Attach event listeners

document.querySelector('#gameStart').addEventListener('click', initGameView)
// ^ hide entry, load game, render new bingo card
document.querySelector('.renderGameBtn').addEventListener('click', renderNew)
// ^ render new bingo card
document.querySelector('#gameRestart').addEventListener('click', renderNew)
// ^ restart button, renders new card and removes any marked styles
document.querySelectorAll('.square').forEach((e) => {e.addEventListener('click', handleSquareClick)})
// ^ on clicking a square, add a marker to it