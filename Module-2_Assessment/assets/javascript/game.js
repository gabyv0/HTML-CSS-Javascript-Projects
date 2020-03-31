const flowerList = ['hyacinth', 'daisy', 'tulip', 'windflower', 'rose',
    'lily', 'sunflower', 'pansy','orchid', 'carnation', 'iris', 'violet',
    'dahlia', 'lilac', 'peony', 'hydrangea'];

// current word to guess, chosen randomly using random num generator
let currWord = flowerList[Math.floor(Math.random() * flowerList.length)];
let currWordList= currWord.split('');   // splits currWord into individual letters in an array
let correctGuessesCounter = 0; // to later check if all correct guesses made
let underscoreList = []; // array of underscores same length as currWord
let numGuesses = 15;    // number of guesses left
let guessedLettersList = [];    // letters guessed already
let numWins = 0;    // number of won games

let numWinsP = document.querySelector('#numberOfWins');
let underscoresP = document.querySelector('#underscores');
let correctWordP = document.querySelector('#correctWord');
let numGuessesP = document.querySelector('#numberOfGuesses');
let guessedLetsP = document.querySelector('#guessedLetters');

console.log(currWord); //DELETE, just checking if it works
console.log(currWordList); //DELETE

// populate underscoreList with correct number of underscores
const underscoreMaker = function() {
    for(let i = 0; i < currWord.length; i++) {
        underscoreList.push('_');
    }
    return underscoreList;
}

console.log(underscoreMaker()); //DELETE check, make sure to ADD TO GAME
numGuessesP.innerText = 15;
numWinsP.innerText = 0;
underscoresP.innerText = underscoreList;


const game = function(event) {
    console.log(event.key); //DELETE check

    //if guessed letter not already guessed
    if(guessedLettersList.includes(event.key) === false) {
        guessedLettersList.push(event.key);
        guessedLetsP.innerText = guessedLettersList;
    }
    console.log(guessedLettersList); //DELETE check

    //if guessed letter is correct
    if (currWordList.includes(event.key)) {
        for(let i = 0; i < currWordList.length; i++) {
            if (event.key === currWordList[i]) {
                underscoreList[i] = event.key;
                console.log(underscoreList); //DELETE
                underscoresP.innerText = underscoreList;
            }
        }
        winOrlose();   
    } else {
        numGuesses--;
        numGuessesP.innerText = numGuesses;
        underscoresP.innerText = underscoreList;
        winOrlose();
        console.log(numGuesses); //DELETE check    
    }

}

document.addEventListener('keypress', game);

const winOrlose = function() {
    if(underscoreList.includes('_') === false) {
        numWins++;
        numWinsP.innerText = numWins;
        alert('You won!');
        reset();
    }

    if (numGuesses === 0) {
        alert('You lost! :( ')
        reset();
        console.log(currWord); //DELETE
        console.log(currWordList);  //DELETE
        console.log(underscoreList); //DELETE
    }
}


const reset = function() {
    currWord = flowerList[Math.floor(Math.random() * flowerList.length)];
    currWordList= currWord.split('');   
    underscoreList = []; 
    numGuesses = 15;    
    guessedLettersList = [];
    correctGuessesCounter = 0;

    underscoreMaker();  

    underscoresP.innerText = underscoreList;
    numGuessesP.innerText = 15;
    guessedLetsP.innerText = guessedLettersList;
}



