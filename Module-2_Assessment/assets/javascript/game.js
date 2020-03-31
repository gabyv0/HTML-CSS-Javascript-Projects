const flowerList = ['hyacinth', 'daisy', 'tulip', 'windflower', 'rose',
    'lily', 'sunflower', 'pansy','orchid', 'carnation', 'iris', 'violet',
    'dahlia', 'lilac', 'peony', 'hydrangea'];

// current word to guess, chosen randomly using random num generator
let currWord = flowerList[Math.floor(Math.random() * flowerList.length)];
let currWordList= currWord.split('');   // splits currWord into individual letters in an array
let underscoreList = []; // array of underscores same length as currWord
let numGuesses = 15;    // number of guesses left
let guessedLettersList = [];    // letters guessed already
let guessedLetters= ''; //for display on HTML
let numWins = 0;    // number of won games


let numWinsP = document.querySelector('#numberOfWins');
let underscoresP = document.querySelector('#underscores');
let correctWordP = document.querySelector('#correctWord');
let numGuessesP = document.querySelector('#numberOfGuesses');
let guessedLetsP = document.querySelector('#guessedLetters');

// populate underscoreList with correct number of underscores
const underscoreMaker = function() {
    for(let i = 0; i < currWord.length; i++) {
        underscoreList.push('_');
    }
    return underscoreList;
}

// initialize display before game starts
underscoreMaker();
numGuessesP.innerText = 15;
numWinsP.innerText = 0;
underscoresP.innerText = underscoreList.join(' ');

const game = function(event) {
    let eventKey = event.key.toLowerCase(); 

    //check if guessed letter has already been guessed
    if(guessedLettersList.includes(eventKey) === false) {
        guessedLettersList.push(eventKey);
        guessedLetters += ` ${eventKey}`;
        guessedLetsP.innerText = guessedLetters;

        if (currWordList.includes(eventKey) === false) {
            numGuesses--;
            numGuessesP.innerText = numGuesses;
            underscoresP.innerText = underscoreList.join(' ');
        }
    }

    //check if guessed letter is correct
    if (currWordList.includes(eventKey)) {
        for(let i = 0; i < currWordList.length; i++) {
            if (eventKey === currWordList[i]) {
                underscoreList[i] = eventKey;
                console.log(underscoreList); 
                underscoresP.innerText = underscoreList.join(' ');
            }
        }
        winOrlose();    
    } else {  
        winOrlose();
    }
}

// check if game has been won or lost yet
const winOrlose = function() {
    if(underscoreList.includes('_') === false) {
        numWins++;
        numWinsP.innerText = numWins;
        new Audio("assets/sounds/yay.mp3").play();
        underscoresP.innerText = underscoreList.join(' ');
        alert(`You won! :D \nIt was ${currWord}! `);
        reset();
    }

    if (numGuesses === 0) {
        new Audio("assets/sounds/oh-no.mp3").play();
        alert(`You lost! :( \nThe word was ${currWord}.`);
        reset(); 
    }
}

// reset all game variables, except for number of wins
const reset = function() {
    currWord = flowerList[Math.floor(Math.random() * flowerList.length)];
    currWordList= currWord.split('');   
    underscoreList = []; 
    numGuesses = 15;    
    guessedLettersList = [];
    guessedLetters= '';

    underscoreMaker();  

    underscoresP.innerText = underscoreList.join(' ');
    numGuessesP.innerText = 15;
    guessedLetsP.innerText = guessedLetters;
}

document.addEventListener('keypress', game);

