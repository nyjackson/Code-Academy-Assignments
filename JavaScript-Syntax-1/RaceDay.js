let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 18;

if(runnerAge > 18 && registeredEarly){
  raceNumber+=1000;
}

if(runnerAge > 18 && registeredEarly){
  console.log('Early adults race at 9:30 am. \nYour race number is: ' + raceNumber);
}

else if(runnerAge > 18 && !registeredEarly){
  console.log('Late adults run at 11:00 am \nYour race number is: ' + raceNumber);
}

else if(runnerAge < 18){
console.log('Youth registrants run at 12:30 pm (regardless of registration) \nYour race number is: ' + raceNumber);
}

else{
  console.log('See the registration desk');
}
