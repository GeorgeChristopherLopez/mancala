let board = document.querySelector('.board');
let pits = document.querySelectorAll('li');
let playerMankala = document.getElementById('player-mankala-container');
let computerMankala = document.getElementById('computer-mankala');
pits.forEach(pit => {
    pit.innerHTML = `<div class="container"><img style="height:100%; width: 100%;" src="./img/4gems.png"></div>`;
})

playerMankala.innerHTML = `<div class="container"><img style="height:100%; width: 100%;" src="./img/4gems.png"></div>`;

computerMankala.innerHTML =`<div class="container"><img style="height:100%; width: 100%;" src="./img/4gems.png"></div>`
console.log(board);