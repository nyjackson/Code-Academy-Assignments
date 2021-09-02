const menu = {
    _courses : {
      appetizers:[],
      mains: [],
      desserts: []
    },
  
    get appetizers() {},
    set appetizers(appIn){},
    get mains(){},
    set mains(mainIn){},
    get desserts(){},
    set desserts(dessIn){},
  
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
  addDishToCourse (courseName, dishName, dishPrice){
    const dish = {
      name: dishName, 
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse (courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length)
    return dishes[randomIndex]
  },
  
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers')
    const main = this.getRandomDishFromCourse('mains')
    const dessert = this.getRandomDishFromCourse('desserts')
    const totalPrice = appetizer.price + main.price + dessert.price
  
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} The price is $${totalPrice}.`
  }
  
  };
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', 'Greek Salad', 4.25);
  menu.addDishToCourse('mains', 'Chicken Pad Thai', 14.25);
  menu.addDishToCourse('mains', 'Chicken Pad See Yew', 14.25);
  menu.addDishToCourse('desserts', 'Spanikopita', 10.25);
  menu.addDishToCourse('desserts', 'Apple Pie', 9.25);
  
  
  let meal = menu.generateRandomMeal();
  console.log(meal);