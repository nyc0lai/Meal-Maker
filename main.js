const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
        },

get appetizer() {
    return this._courses.appetizers;
    },

set appetizer(appetizerIn) {
    this._courses.appetizers = appetizerIn;
    },

get main() {
    return this._courses.mains;
    },

set main(mainsIn) {
    this._courses.mains = mainsIn;
    },

get dessert() {
    return this._courses.desserts;
    },

set dessert(dessertsIn) {
    this._courses.desserts = dessertsIn;
    },

get courses() {
    return {
        appetizers: this.appetizer,
        mains: this.main,
        desserts: this.dessert
        }
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
        name: dishName,
        price: dishPrice
        }
        this.courses[courseName].push(dish); 
        },

    getRandomDishFromCourse(courseName){
        let dishes = this.courses[courseName];
        let randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];       
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = (appetizer.price + main.price + dessert.price); 
        return `Masa ta este:\n${appetizer.name}\n${main.name}\n${dessert.name}\nPretul: ${totalPrice.toFixed(2)} lei`;
    }

};

menu.addDishToCourse('appetizers', 'Salata greceasca "Greek" 290gr.', 60);
menu.addDishToCourse('mains', 'Soleancă "Solyanka"', 55);
menu.addDishToCourse('desserts', 'Profiterole сu cremă fiartă și fructe "Profiterolies" 150gr.', 40);

menu.addDishToCourse('appetizers', 'Salata verde cu ton "Tuna" 320gr.', 75);
menu.addDishToCourse('mains', 'Zeamă cu carne de pui "Zeamă"', 45);
menu.addDishToCourse('desserts', 'Desert cu îngheţată de vişine "Cherry mania" 200gr.', 45);

menu.addDishToCourse('appetizers', 'Salata din legume "Fresh salad" 270gr.', 50);
menu.addDishToCourse('mains', 'Borş cu sfeclă "Borsch"', 40);
menu.addDishToCourse('desserts', 'Desert fin şi răcoros pe bază de brînză moale cu vişine "Cheesecake" 175gr.', 40);

menu.addDishToCourse('appetizers', 'Bowl cu somon și mix de salată "Salmon bowl" 330gr.', 105);
menu.addDishToCourse('mains', 'Supă cremă de fasole "Bean cream soup"', 40);
menu.addDishToCourse('desserts', 'Desert italian clasic "Tiramisu" 120gr.', 40);
const meal = menu.generateRandomMeal();
console.log(meal);