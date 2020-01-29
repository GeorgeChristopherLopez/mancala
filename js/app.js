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

// putting the li's into a board array in the proper order
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
  

    pScore.innerHTML = `Player Score: ${arrayValue[6]}`;
    cScore.innerHTML = `Computer Score: ${arrayValue[13]}`;
}




// CONTROLLER FUNCTION
board.addEventListener('click', e => {
    let extraTurn = false;
    // SIDE CHECKER
    let currentSide;
    let oppositeSide;
    let currentMankala;
    let turn;


    if (pTurn.classList.contains('turn')) {
        currentSide = playerPits;
        currentMankala = playerMankala;
        oppositeSide = computerPits;
        turn = "player";

    } else {
        currentSide = computerPits;
        currentMankala = computerMankala;
        oppositeSide = playerPits;
        turn = "computer";
    }
    let thisArr = Array.from(currentSide.querySelectorAll('li'));
    let otherArr = Array.from(oppositeSide.querySelectorAll('li'));
    // CLICK CHECKER
    let lastDrop;
    let lastDropValue;
    let opLastDrop;
    let opLastDropValue;
    let clicked = event.target;
    console.log(clicked.parentElement);

    if (array.includes(clicked)  && clicked.classList.contains('mankala') == false && clicked.parentNode == currentSide) {
        let i = array.indexOf(clicked);
      
        if (arrayValue[i] > 0) {
            let temp = arrayValue[i];
            for (let z = 1; temp > 0; z++) {
                if ((i + z) == 14) {
                    z = -i;
                }
                temp + z+1;
                temp--;
           
                lastDropValue = arrayValue[i + z];
            }


            // board value math
            for (let y = 1; arrayValue[i] > 0; y++) {
                if ((i + y) == 14) {
                    y = -i;
                }
                arrayValue[i + y]++;
                arrayValue[i]--;
                lastDrop = array[i + y];
            }

               
                console.log(otherArr);
                if (thisArr.includes(lastDrop)) {
                    opLastDrop = otherArr[thisArr.indexOf(lastDrop)];
                    let indexOfOppDrop = array.indexOf(opLastDrop);
                    let indexOfLastDrop = array.indexOf(lastDrop);
                  /*  if (turn === "player") {

                        switch (indexOfOppDrop) {
                            case 0:
                                indexOfOppDrop = 12;
                                break;
                            case 1:
                                indexOfOppDrop = 11;
                                break;
                            case 2:
                                indexOfOppDrop = 10;
                                break;
                            case 3:
                                indexOfOppDrop = 9;
                                break;
                            case 4:
                                indexOfOppDrop = 8;
                                break;
                            case 5:
                                indexOfOppDrop = 7;
                                break;
                            default:
                                return indexOfOppDrop;
                        }
                    }*/
                    console.log('index of last drop', indexOfLastDrop);
                    console.log('last drop', lastDrop);
                    console.log('last drop value', lastDropValue);
                    console.log('last drop value AFTER', arrayValue[array.indexOf(lastDrop)]);
                    console.log('oplastdrop', opLastDrop);
                    console.log('indexof opp drop', indexOfOppDrop);
                    opLastDropValue = arrayValue[indexOfOppDrop];
                    console.log('oplastdrop value', opLastDropValue);

                    if (lastDropValue == 0 && thisArr.includes(lastDrop)) {

                        if (opLastDropValue > 0 && otherArr.includes(opLastDrop)) {
                     
                            console.log('morepoints baby!')
                            arrayValue[indexOfLastDrop] += arrayValue[indexOfOppDrop];
                            arrayValue[indexOfOppDrop] = 0;
                            arrayValue[array.indexOf(currentMankala)] += arrayValue[indexOfLastDrop];
                            arrayValue[indexOfLastDrop] = 0;
                        }

                    }




                }
                if (lastDrop == currentMankala) {
                    extraTurn = true;
                    console.log('extra turn');
                }
            
            if (!extraTurn) {
                pTurn.classList.toggle('turn');
                cTurn.classList.toggle('turn');
            }
            //VIEW update display
            displayUpdate();
        }

       
           
    };
});

// init
displayUpdate();
//testing
console.log(board);
console.log(array);
console.log(pcPits);
