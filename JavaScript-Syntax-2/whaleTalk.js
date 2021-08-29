let input = 'Another one bites the dust';
input = input.toLowerCase()
const vowels = ['a','e','i','o','u'];

let resultArray = [];
for(let i = 0; i < input.length;i++){
  //console.log(input[i]);
  for (let j = 0; j < vowels.length; j++){
    if(input[i] === vowels[j]){
      resultArray.push(vowels[j].toUpperCase());
    }
  }
  if(input[i] === 'e'){
      resultArray.push(input[i].toUpperCase());
    }
  else if(input[i] === 'u'){
      resultArray.push(input[i].toUpperCase());
    }
}

console.log(resultArray.join(""))