const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
        },

    addDishToCourse(courseName, dishName, dishPrice){
        const dish = {
        name = dishName,
        price = dishPrice
        }
        this._courses[courseName].push(dish); 
        },

    getRandomDishFromCourse(courseName){
        let dishes = Object.keys(this._courses);
        
    },

get courses (){
    return this._courses;
    },
get appetizers (){
    return this._courses.appetizers;
    },
set appetizers (value) {
    this._courses.appetizers = value;
    },
get mains (){
    return this._courses.mains;
    },
set mains (value) {
    this._courses.mains = value;
    },
get desserts (){
    return this;
    },
set desserts (value) {
    this._courses.desserts = value;
    }
};

//addDishToCourse(mains, borsh, 25);