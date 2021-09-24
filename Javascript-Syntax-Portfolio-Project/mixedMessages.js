const trafficConditions = {
    density: ['Light', 'Heavy', 'Medium','Rush Hour'],
    weather:['Rainy','Sunny', 'Snowy', 'Cloudy'],
    delay: ['no', 'an hour', 'a 2 hour', ' a 30 min'],
    selectRandom(){
        let densityRand = this.density[Math.floor(Math.random() * this.density.length)]
        let weatherRand = this.weather[Math.floor(Math.random() * this.weather.length)]
        let delayRand = this.delay[Math.floor(Math.random() * this.delay.length)]
        return `Traffic is currently ${densityRand}, with ${delayRand} delay. The weather is ${weatherRand}`
    },
};

console.log(trafficConditions.selectRandom())