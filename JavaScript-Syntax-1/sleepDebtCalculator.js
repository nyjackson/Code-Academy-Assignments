const getSleepHours = day => {
    day = day.toLowerCase();
    switch (day){
      case 'monday':
      return 8;
      case 'tuesday':
      return 9;
      case 'wednesday':
      return 10;
      case 'thursday':
      return 5;
      case 'friday':
      return 4;
      case 'saturday':
      return 8;
      case 'sunday':
      return 3;
    }
    };
    
    const getActualSleepHours = () =>  8 + 9 + 10 + 5 + 4 + 8 + 3
    
    const getIdealSleepHours = idealHours => {
      return idealHours * 7;
    }
    
    const calculateSleepDebt = () => {
      var actualSleepHours = getActualSleepHours();
      var idealSleepHours = getIdealSleepHours(4);
      if(actualSleepHours === idealSleepHours){
        console.log('You got the perfect amount of sleep!');
      }
      else if(actualSleepHours > idealSleepHours){
        console.log('You got more sleep than needed. You were over by:',actualSleepHours - idealSleepHours,'hours.');
      }
      else{
        console.log('You should get some rest. You were under by:', idealSleepHours - actualSleepHours, 'hours');
      }
    };
    
    calculateSleepDebt();
    