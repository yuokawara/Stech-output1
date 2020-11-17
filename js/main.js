
    let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.value = 'Hello';
guessField.focus();

function checkGuess() {
    alert('ここに好きな文字を入れてください');
}
guessSubmit.addEventListener('click', checkGuess);


function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = '前回の予想: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = '正解！！';
        lastResult.getElementsByClassName.baclgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = '不正解！！';
        lastResult.style.baclgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = '小さすぎ！！もっと大きいよ！'
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = '大きすぎ！！もっと小さいよ！！';
    } 
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();

}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = '新しく始める';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame () {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
