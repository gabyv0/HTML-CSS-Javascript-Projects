const flowerList = ['hyacinth', 'daisy', 'tulip', 'windflower', 'rose',
    'lily', 'sunflower', 'pansy', 'poinsettia'];

// current word to guess, chosen randomly using random num generator
let currWord = flowerList[Math.floor(Math.random() * flowerList.length)];
let currWordList= currWord.split('');   // splits currWord into individual letters in an array
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
    } else {
        numGuesses--;
        numGuessesP.innerText = numGuesses;
        if (numGuesses === 0) {
            alert('Game Over');
            gameOver();
        }
        console.log(numGuesses); //DELETE check    
    }

}

document.addEventListener('keypress', game);

//game over if numGuesses hits 0, resets game except for numWins
const gameOver = function() {
    currWord = flowerList[Math.floor(Math.random() * flowerList.length)];
    currWordList= currWord.split('');   
    underscoreList = []; 
    numGuesses = 15;    
    guessedLettersList = [];
    underscoreMaker();  
    underscoresP.innerText = underscoreList;
    numGuessesP.innerText = 15;
    guessedLetsP.innerText = guessedLettersList;

    console.log(currWord); //DELETE
    console.log(currWordList);  //DELETE
    console.log(underscoreList); //DELETE
}






