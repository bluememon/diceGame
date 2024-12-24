const dice1 = document.querySelector('#dice1');
const dice2 = document.querySelector('#dice2');
const dice3 = document.querySelector('#dice3');
const rollButton = document.querySelector('#rollButton');

const rollDices = (event) => {
    rollMe(dice1);
    rollMe(dice2);
    rollMe(dice3);
};

const rollMe = (diceElement = '') => {
    diceElement.classList.remove('left');
    diceElement.classList.remove('right');
    diceElement.classList.remove('center');
    diceElement.classList.remove('neutro');

    const randomResult = Math.floor(Math.random() * 6);
    let response = null;
    switch (randomResult) {
        case 0:
            response = 'left'; 
            diceElement.classList.add('left');
        break;
        case 1:
            response = 'right';  
            diceElement.classList.add('right');
        break;
        case 2:
            response = 'left';  
            diceElement.classList.add('left');
        break;
        case 3:
            response = 'right';  
            diceElement.classList.add('right');
        break;
        case 4:
            response = 'center';  
            diceElement.classList.add('center');
        break;
        case 5:
            response = 'neutro';
            diceElement.classList.add('neutro');
        break;
    }
    // return response;
};

rollButton.addEventListener('mousedown', rollDices);