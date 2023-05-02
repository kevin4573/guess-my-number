'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};
const bodyColor = function(color){
    document.querySelector('body').style.backgroundColor = color
};
const title = function(h1){
    document.querySelector('h1').textContent = h1;
};
const number = function(number){
    document.querySelector('.number').textContent = number;
};
const number1 = document.querySelector('.number');

//--------------------------------------------------START-----------------------------------------------------------------------------------
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    //SI NO HAY ENTRADA
    if (!guess) {
        displayMessage('❗Por favor ingrese un número correcto❗');
    //SI ADIVINAS EL NUMERO SECRETO   
    }else if (guess === secretNumber){
        displayMessage (`Felicidades número ${secretNumber} 🍀 correcto!`);
        bodyColor ('green')
        number(secretNumber);
        title ('Adivinaste el número 🤯')
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
    //SI EL NUMERO ES MUY ALTO O BAJO PARA SER ADIVINADO
    }else if (guess !== secretNumber){
        if (score > 1){
            displayMessage(guess > secretNumber ? `El número ${guess} esta por encima del número secreto 📈` : `El número ${guess} esta por debajo del número secreto 📉`);
            score -- ; 
            document.querySelector('.score').textContent = score;
        }
    //SI PIERDES POR NUMERO ALTO 
        else {
            displayMessage( `Perdiste 💢`);
            bodyColor('red');
            document.querySelector('.score').textContent = 0;
            number('👾');
            title('Ups suerte para la próxima 🤡');
        }
    }
});
//-----------------------------FUNCTION BTN AGAIN-------------------------------------------------------------------------------------------------------------------------------------------------------------------

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage ('Start guessing...');
    title ('Adivina el número!')
    document.querySelector('.score').textContent = score;
    number ('?');
    document.querySelector('.guess').value = '';
    bodyColor ('#222');
    document.querySelector('.number').style.width = '15rem';
  });








