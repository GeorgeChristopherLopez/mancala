// Elements
let board = document.querySelector('.board');
let pits = Array.from(document.querySelectorAll('li'));
let playerMankala = document.getElementById('player-mankala');
let computerMankala = document.getElementById('computer-mankala');
let playerPits = document.querySelector('.player-pits');
let computerPits = document.querySelector('.computer-pits');
let cTurn = document.querySelector('.cTurn');
let pTurn = document.querySelector('.pTurn');
let cScore = document.querySelector('.cScore');
let pScore = document.querySelector('.pScore');


// board values
let arrayValue = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0];


// putting the li's into an array in the proper order
let array = Array.from( document.querySelector('.player-pits').getElementsByTagName('li'));
array.push(playerMankala);

let pcPits = Array.from(document.querySelector('.computer-pits').getElementsByTagName('li')).reverse();
pcPits.push(computerMankala);

for (pit of pcPits) {
    array.push(pit);
}



// VIEW UPDATE display
let displayUpdate = () => {
    for (let x = 0; x < array.length; x++) {
        array[x].innerHTML = `<div class="container">${arrayValue[x]}</div>`;
    }
    pTurn.classList.toggle('turn');
    cTurn.classList.toggle('turn');

    pScore.innerHTML = `Player Score: ${arrayValue[6]}`;
    cScore.innerHTML = `Computer Score: ${arrayValue[13]}`;
}

displayUpdate();



// CONTROLLER FUNCTION
board.addEventListener('click', e => {
    // SIDE CHECKER
    let currentSide;
    pTurn.classList.contains('turn') ? 
        currentSide = playerPits :
        currentSide = computerPits;

    // CLICK CHECKER
    let clicked = event.target;
    if (array.includes(clicked) && clicked.classList.contains('mankala') == false && clicked.parentNode == currentSide) {
        let i = array.indexOf(clicked);
        if (arrayValue[i] > 0) {
            for (let y = 1; arrayValue[i] > 0; y++) {
                if ((i + y) == 14) {
                   
                    y = -i;
                }
                arrayValue[i + y]++; 
                arrayValue[i]--;
            }
        }


        displayUpdate();
    };
});


console.log(board);
console.log(array);
console.log(pcPits);