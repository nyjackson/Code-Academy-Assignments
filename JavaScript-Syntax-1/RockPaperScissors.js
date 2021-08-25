const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock'){
    return userInput;
    }
    else if(userInput === 'paper'){
    return userInput;
    
    }
    else if(userInput === 'scissors'){
    return userInput;
    
    }
    else if(userInput === 'bomb'){
      return userInput;
    }
    else{
      console.log('Error: Incorrect selection.');
    }
    
    };
    
    const getComputerChoice = () => {
      let compChoice = Math.floor(Math.random() * 3);
      if(compChoice === 0){
        return 'rock';
      }
      else if(compChoice === 1){
        return 'paper';
      }
      else{
        return 'scissors';
      }
    };
    
    const determineWinner = (userChoice, computerChoice) => {
      if(userChoice === 'bomb'){
        return 'You Win. Computer Loses';
      }
      else if(userChoice === computerChoice){
        return 'Tie';
      }
      else if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
          return 'You Lose. Computer Wins.';
        }
        else{
          return 'You Win. Computer Loses';
        }
      }
      else if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
          return 'You Lose. Computer Wins.';
        }
        else if(computerChoice === 'rock'){
          return 'You Win. Computer Loses';
        }
      }
      else if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
           return 'You Lose. Computer Wins';
        }
        else if(computerChoice === 'paper'){
           return 'You Win. Computer Loses.';
        }
      }
    };
    
    const playGame = () => {
      var userChoice = getUserChoice('scissors');
      console.log('You chose: ' + userChoice);
      var compChoice = getComputerChoice();
      console.log('Computer chose: ' + compChoice);
      console.log(determineWinner(userChoice,compChoice));
    };
    
    playGame();