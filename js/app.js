let board = document.querySelector('.board');
let pits = Array.from(document.querySelectorAll('li'));
let playerMankala = document.getElementById('player-mankala');
let computerMankala = document.getElementById('computer-mankala');

let arrayValue = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0];


// putting the li's into an array in the proper order
let array = Array.from( document.querySelector('.player-pits').getElementsByTagName('li'));
array.push(playerMankala);

let pcPits = Array.from(document.querySelector('.computer-pits').getElementsByTagName('li')).reverse();
pcPits.push(computerMankala);

for (pit of pcPits) {
    array.push(pit);
}



// starting value
let displayUpdate = () => {
    for (let x = 0; x < array.length; x++) {
        array[x].innerHTML = `<div class="container">${arrayValue[x]}</div>`;
    }

}

displayUpdate();

board.addEventListener('click', e => {
    let clicked = event.target;
    if (array.includes(clicked) && clicked.classList.contains('mankala')==false) {
        let i = array.indexOf(clicked);
        if (arrayValue[i] > 0) {
            for (let y = 1; arrayValue[i] > 0; y++) {
                if ((i + y) == 14) {
                   
                    y = -i;
                }
                arrayValue[i + y]++; 
                arrayValue[i]--;
                console.log(arrayValue[i]);
            }
        }
        displayUpdate();
    };
});


console.log(board);
console.log(array);
console.log(pcPits);