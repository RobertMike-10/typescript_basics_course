"use strict";
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5, 5));
console.log(multiply(5));
const pizzas = [
    { name: 'Pepperoni', toppings: ['pepperoni'], quantity: 2 },
    { name: 'Salami', toppings: ['salami'], quantity: 1 },
    { name: 'Supreme', toppings: ['salami', 'pepperoni'], quantity: 3 }
];
//normal function
const mapPizzas = pizzas.map(function (pizza) {
    return pizza.name.toUpperCase();
});
console.log(mapPizzas);
//arrow function
const morePizzas = pizzas.map(pizza => {
    return pizza.quantity += 2;
});
console.log(morePizzas);
//arrow with implicit return
const otherPizzas = pizzas.map(pizza => pizza.name.toLowerCase());
console.log(otherPizzas);
//arrow can't use the scope of this, inherits scope from parent. 
//We have to use pizza instead of this
const pizzaName = {
    name: 'Celestial Flavor',
    getName: () => pizzaName.name
};
console.log(pizzaName.getName());
//creating objects containing others
const pizza = {
    name: 'Pepperoni',
    price: 75.8,
    getName() {
        return this.name;
    }
};
const toppings = ['pepperoni'];
const order = { pizza, toppings };
console.log(order);
function createOrder(pizza, toppings) {
    return { pizza, toppings };
}
console.log(createOrder(pizza, toppings));
//spread parameters
function sumAll(arr) {
    return arr.reduce((prev, next) => prev + next);
}
console.log(sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
function sum(message, ...arr) {
    console.log(message);
    return arr.reduce((prev, next) => prev + next);
}
console.log(sum("Hello", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
//spred on arrays
const ingredients = ['bacon', 'chilli', 'salami', 'pineapple'];
const newIngredient = ['pepperoni'];
const allIngredients = [...ingredients, ...newIngredient];
console.log(allIngredients);
const allIngredients2 = [...newIngredient, ...ingredients];
console.log(allIngredients2);
const mypizza = {
    name: 'Salami'
};
//spread on objects
//spread take the content of the object (properties), then you can use to merge in a new object
const orderNew = Object.assign(Object.assign({}, mypizza), { toppings });
console.log(orderNew);
const finalOrder = Object.assign(Object.assign({}, orderNew), { price: 76.8 });
console.log(finalOrder);
const order2 = Object.assign({}, mypizza, { toppings });
console.log(order2);
//desestructuracion
const miPizza = {
    name: 'Salami',
    toppings: ['pepperoni']
};
console.log("Desestructuracion");
function orderPizza({ name: pName, toppings: pTopics }) {
    console.log(pName, pTopics);
}
orderPizza(miPizza);
function orderPizza2({ name: pName, toppings }) {
    return { pName, toppings, price: 76.9 };
}
const ordenPizza = orderPizza2(miPizza);
console.log(ordenPizza);
const { pName } = orderPizza2(miPizza);
console.log(pName);
//desestructuracion de arrays
const [first, second, third] = ingredients;
console.log(first, second, third);
function logIngredients([first, second, third]) {
    console.log(first, second, third);
}
logIngredients(ingredients);
//any type
let cupon;
cupon = 25;
cupon = '25';
cupon = true;
let selectedTopping = 'pepperoni';
function selectTopping(topping) {
    selectedTopping = topping;
}
selectTopping('bacon');
console.log(selectedTopping);
//function with never
function orderError(error) {
    throw new Error(error);
}
//orderError('Something went worng');
//undefined , null
let coupon = 'pizza25';
let cuponNull = null;
let unedefinedCupon = undefined;
let example;
example = "valor";
example = undefined;
let stringUndefined = "Roberto Miguel";
console.log(stringUndefined);
function removeData() {
    stringUndefined = null;
}
removeData();
console.log(stringUndefined);
//union types
let pizzaSize = "small";
function selectSize(size) {
    pizzaSize = size;
}
selectSize('medium');
let pizzaSizeN = 1;
function selectSizeN(size) {
    pizzaSizeN = size;
}
selectSizeN(1);
console.log(`Pizza size: ${pizzaSizeN}`);
//Function Type
let sumOrder;
let sumOrder2;
sumOrder = (price, quantity) => {
    return price * quantity;
};
sumOrder2 = (x, y) => x * y;
let sumPizza = sumOrder(78.9, 2);
console.log(`Total sum: ${sumPizza}`);
sumPizza = sumOrder2(78.9, 2);
console.log(`Total sum: ${sumPizza}`);
let sumOrder3 = (x, y) => x * y;
sumPizza = sumOrder3(78.9, 2);
console.log(`Total sum: ${sumPizza}`);
let sumOrder4;
sumOrder4 = (x, y = 1) => {
    return x * y;
};
sumPizza = sumOrder4(87.9);
console.log(`Total sum: ${sumPizza}`);
let sumOrder5 = (x, y = 1) => x * y;
sumPizza = sumOrder5(89.5);
console.log(`Total sum: ${sumPizza}`);
let pizzaO;
pizzaO = {
    name: "Mexican Delicious",
    price: 87.9,
    getName() {
        return pizza.name;
    }
};
//array type
const sizes = ['small', 'medium', 'large'];
const sizesN = [1, 2, 3];
let foods;
foods = ['bacon', 'tomato', 'salami'];
//alias type
console.log("Alias");
let pizzaSize2 = 'small';
const selectPizzaSize = (size) => {
    pizzaSize2 = size;
};
selectPizzaSize('medium');
console.log(pizzaSize2);
const selectPizzaSize2 = (x) => {
    pizzaSize2 = x;
};
selectPizzaSize('large');
console.log(pizzaSize2);
const MiPizza = { name: 'Mexican Hot Delicious', toppings: 8 };
const serialized = JSON.stringify(MiPizza);
function getNameFromJSON(obj) {
    return JSON.parse(obj).name;
}
function getNameFromJSONC(obj) {
    return JSON.parse(obj).name;
}
function getToppingsFromJSON(obj) {
    return JSON.parse(obj).toppings;
}
console.log("Assertion");
console.log(getNameFromJSON(serialized));
console.log(getToppingsFromJSON(serialized));
console.log(getNameFromJSONC(serialized));
let pizzaI;
function createPizza(name, sizes) {
    return {
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    };
}
console.log("Interfaces");
pizzaI = createPizza("Mexican Big Hot Delicious", ['small', 'medium']);
console.log(pizzaI);
//example of implementation of multiple types on a class
class MiaPizza {
    getAvailableSizes() {
        return this.sizes;
    }
}
function createPizzaI(name, sizes) {
    return {
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    };
}
//The variable can take the interface or type
pizzaI = createPizzaI("Mexican Big Hot Delicious", ['small', 'medium']);
let pizzaI2;
pizzaI2 = createPizzaI("Mexican Big Hot Delicious", ['small', 'medium']);
pizzaI2.dictionary = ['mike', 1];
pizzaI2.toppings = 4;
console.log(pizzaI2);
pizzaI2[1] = 'mike';
console.log(pizzaI2);
pizzaI2[2] = 'claveNueva';
console.log(pizzaI2[2]);
//scope
//Scope
function funcion() {
    let lugar = "Mi lugar";
    console.log(lugar);
}
function ejecutar(funcion) {
    funcion(); // <— Este es el "call-site"
}
var objeto = {
    lugar: 'objeto',
    funcion: funcion,
};
var lugar = 'global';
ejecutar(objeto.funcion); // 'global'
objeto.funcion();
var objeto2 = {
    lugar: 'objeto',
    funcion() {
        console.log(this.lugar);
    }
};
objeto2.funcion();
// a nested function, we must use contador, because we lose the scope of this
//in this case contador must be declarated in the incrementar function
const contador = {
    cantidad: 0,
    incremetar() {
        var id = setInterval(function () {
            console.log(++contador.cantidad);
            if (contador.cantidad == 5)
                clearInterval(id);
        }, 1000);
    }
};
//but arrow functions have the scope of the level up, in this case 
//the object scope
const contador2 = {
    cantidad: 0,
    incremetar() {
        var id = setInterval(() => {
            console.log(++this.cantidad);
            if (this.cantidad == 5)
                clearInterval(id);
        }, 1000);
    }
};
contador.incremetar();
contador2.incremetar();
//Clases
//classes are based on prototypes, based on functions in JS
//prototypes
function PizzaProto(name) {
    let pizzaName = name;
    let toppings = ['salami'];
}
PizzaProto.prototype.addToping = function addTopping(topping) {
    this.toppings.push(topping);
};
const pizzaP = new PizzaProto("Old Succulent Delicious");
//pizzaP.addTopping('Pineapple');
console.log(pizzaP);
class PizzaClass {
    constructor(name) {
        this.toppings = [];
        this.name = name;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
}
const pizzaC = new PizzaClass("Old Succulent Delicious");
pizzaC.addTopping('Pineapple');
console.log(pizzaC);
class Sizes {
    constructor(sizes) {
        this.sizes = sizes;
    }
    set availableSizes(sizes) {
        this.sizes = sizes;
    }
    get availableSizes() {
        return this.sizes;
    }
}
class PizzaClass2 extends Sizes {
    constructor(name, sizes) {
        super(sizes);
        this.name = name;
        this.toppings = [];
    }
    addTopping(x) {
        this.toppings.push(x);
    }
    updateSizes(s) {
        this.sizes = s;
    }
}
let pizzaExample = new PizzaClass2("Old Succulent Delicious", ['medium', 'small', 'large']);
console.log(pizzaExample);
var namePizza = PizzaClass2.name;
console.log(namePizza);
pizzaExample.updateSizes(['medium', 'small']);
console.log(pizzaExample);
//static
const date = new Date();
date.getFullYear();
Date.now();
class Coupon {
    constructor(p) {
        this.percentaje = p;
    }
    static create(percentaje) {
        return new Coupon(percentaje);
    }
}
Coupon.allowed = ['Old Hot Delicious', 'Vegetarian Festival'];
console.log(Coupon.allowed);
var my_cupon = Coupon.create(56.9);
console.log(my_cupon);
