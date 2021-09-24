const trafficConditions = {
    density: ['Light', 'Heavy', 'Medium','Rush Hour'],
    weather:['Rainy','Sunny', 'Snowy', 'Cloudy'],
    delay: ['no', 'an hour', 'a 2 hour', 'a 30 min'],
    selectRandom(arr){
        return arr[Math.floor(Math.random() * arr.length)]
    },
    getRandSentence(){
        return `Traffic is currently ${this.selectRandom(this.density)}, with ${this.selectRandom(this.delay)} delay. \nThe weather is ${this.selectRandom(this.weather)}.`
    }
};

console.log(trafficConditions.getRandSentence())