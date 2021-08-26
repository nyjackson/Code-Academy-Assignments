let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 9);

const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

const compareGuesses = (userGuess, compGuess, secretTarget) => {
    let uTargetDist = getAbsoluteDistance(userGuess, secretTarget);
    let cTargetDist = getAbsoluteDistance(compGuess, secretTarget);
    if (userGuess < 10 && userGuess > -1) {
        if (uTargetDist < cTargetDist || uTargetDist === cTargetDist) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        alert('Number out of range! Select one from 0 - 9.');
    }
};

const updateScore = winner => winner === 'human' ? humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;
