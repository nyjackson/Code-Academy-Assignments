const team = {
    _players : [{
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11
  },
  {
    firstName: 'Terry',
    lastName: 'Walter',
    age: 13
  },
  {
    firstName: 'Sunny',
    lastName: 'Kendreck',
    age: 10
  }],
    _games:[{
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
  },{
    opponent: 'Conco',
    teamPoints: 20,
    opponentPoints: 27
  },{
    opponent: 'Pirates',
    teamPoints: 89,
    opponentPoints: 27
  }],
  
  get players(){return this._players},
  get games(){return this._games},
  
  addPlayer(firstName, lastName, age){
    let player = {
      firstName, lastName, age
    }
  this._players.push(player)
  },
  
  addGame(oppoName, teamPoints, oppoPoints){
    let game = {
      oppoName, teamPoints, oppoPoints
    }
    this._games.push(game)
  }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa','Leslie',44);
  team.addPlayer('Bugs','Bunny',76);
  team.addGame('Toqitos',100,101)
  
  console.log(team.players)
  console.log(team.games)