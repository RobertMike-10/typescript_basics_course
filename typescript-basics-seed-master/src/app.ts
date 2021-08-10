
function multiply(a: number,b:number =1){
    return a*b;
}

console.log(multiply(5,5));
console.log(multiply(5));

const pizzas = [
    {name:'Pepperoni', toppings: ['pepperoni'], quantity: 2},
    {name:'Salami', toppings: ['salami'], quantity: 1},
    {name:'Supreme', toppings: ['salami','pepperoni'], quantity: 3}
];

//normal function
const mapPizzas = pizzas.map(function (pizza){
    return pizza.name.toUpperCase();
});

console.log(mapPizzas);

//arrow function
const morePizzas = pizzas.map(pizza => {
    return pizza.quantity +=2;
});
console.log(morePizzas);

//arrow with implicit return
const otherPizzas = pizzas.map(pizza =>pizza.name.toLowerCase());
console.log(otherPizzas);

//arrow can't use the scope of this, inherits scope from parent. 
//We have to use pizza instead of this
const pizzaName = {
    name : 'Celestial Flavor',
    getName: () => pizzaName.name
};

console.log(pizzaName.getName());

//creating objects containing others
const pizza = {
    name : 'Pepperoni',
    price: 75.8,
    getName(){
        return this.name;
    }
};

const toppings = ['pepperoni'];

const order = {pizza,toppings};

console.log(order);

function createOrder(pizza:any, toppings:any): any{
    return {pizza,toppings};
}
console.log(createOrder(pizza,toppings));

//spread parameters

function sumAll(arr:any){
    return arr.reduce((prev:number,next:number) => prev+next);
}
console.log(sumAll([1,2,3,4,5,6,7,8,9,10]));

function sum(message:string,...arr:any){
    console.log(message);
    return arr.reduce((prev:number,next:number) => prev+next);
}
console.log(sum("Hello",1,2,3,4,5,6,7,8,9,10));

//spred on arrays
const ingredients = ['bacon','chilli','salami', 'pineapple'];
const newIngredient = ['pepperoni'] ;
const allIngredients = [...ingredients,...newIngredient];
console.log(allIngredients);
const allIngredients2 = [...newIngredient,...ingredients];
console.log(allIngredients2);

const mypizza = {
    name:'Salami'
}

//spread on objects
//spread take the content of the object (properties), then you can use to merge in a new object
const orderNew = {
    ...mypizza,
    toppings
}

console.log(orderNew);

const finalOrder = {...orderNew, price:76.8};
console.log(finalOrder);

const order2= Object.assign({},mypizza,{toppings});
console.log(order2);

//desestructuracion

const miPizza={
    name:'Salami',
    toppings : ['pepperoni']
}

console.log("Desestructuracion");
function orderPizza({name:pName, toppings:pTopics}:any){
 console.log(pName,pTopics);
}

orderPizza(miPizza);

function orderPizza2({name:pName, toppings}:any){
    return {pName,toppings,price:76.9};
   }

const ordenPizza = orderPizza2(miPizza);
console.log(ordenPizza);

const {pName} = orderPizza2(miPizza);
console.log(pName);

//desestructuracion de arrays
const [first, second, third] = ingredients;

console.log(first,second,third);

function logIngredients([first, second, third]:any){
    console.log(first,second,third);
}

logIngredients(ingredients);

//any type
let cupon;
cupon=25;
cupon='25';
cupon=true;

let selectedTopping: string = 'pepperoni';

function selectTopping(topping:string){
    selectedTopping =  topping;
}

selectTopping('bacon');
console.log(selectedTopping);

//function with never
function orderError(error:string) {
    throw new Error(error);
}

//orderError('Something went worng');

//undefined , null
let coupon ='pizza25';

let cuponNull = null;

let unedefinedCupon = undefined;

let example;
example ="valor";
example = undefined;

let stringUndefined:string|null = "Roberto Miguel";
console.log(stringUndefined);
function removeData():void{
    stringUndefined=null;
}
removeData();
console.log(stringUndefined);

//union types
let pizzaSize: string = "small";

function selectSize(size:'small' | 'medium'| 'large'):void{
    pizzaSize = size;
}

selectSize('medium');

let pizzaSizeN: number = 1;

function selectSizeN(size:1| 2| 3):void{
    pizzaSizeN = size;
}

selectSizeN(1);

console.log(`Pizza size: ${pizzaSizeN}`);

//Function Type
let sumOrder:Function;
let sumOrder2:(price:number,quantity:number)=>number;

sumOrder=(price:number,quantity:number):number =>
{
    return price * quantity;
};

sumOrder2 = (x,y) => x * y;

let sumPizza = sumOrder(78.9,2);
console.log(`Total sum: ${sumPizza}`);
sumPizza = sumOrder2(78.9,2);
console.log(`Total sum: ${sumPizza}`);

let sumOrder3:(price:number,quantity:number)=>number = (x,y) => x * y;
sumPizza = sumOrder3(78.9,2);
console.log(`Total sum: ${sumPizza}`);

let sumOrder4:(price:number,quantity?:number)=>number ;

sumOrder4 =(x,y=1) =>{
    return x*y;
}
sumPizza = sumOrder4(87.9);
console.log(`Total sum: ${sumPizza}`);

let sumOrder5:(price:number,quantity?:number)=>number =(x,y=1) => x * y;
sumPizza = sumOrder5(89.5);
console.log(`Total sum: ${sumPizza}`);

let pizzaO: {name:string,price:number,getName():string};
pizzaO = {
    name: "Mexican Delicious",
    price:87.9,
    getName(){
        return pizza.name;
    }
}

//array type
const sizes:string[] = ['small','medium','large'];
const sizesN:number[] = [1,2,3];

let foods: Array<string>;

foods= ['bacon','tomato','salami'];

//alias type
console.log("Alias");
type Size = 'small' | 'medium' | 'large';
//type function, defined parameter and return type with lamda, is the method signature
type CallBack =(size:Size) =>void;
let pizzaSize2 : Size ='small';

const selectPizzaSize=(size:Size) =>{
    pizzaSize2 = size;
}
selectPizzaSize('medium');
console.log(pizzaSize2);
const selectPizzaSize2:CallBack =(x) =>{
    pizzaSize2 = x;
}
selectPizzaSize('large');
console.log(pizzaSize2);

//type assertion
type pizzaT ={
    name:string,
    toppings:number
}
const MiPizza: pizzaT= {name:'Mexican Hot Delicious', toppings:8};

const serialized = JSON.stringify(MiPizza);

function getNameFromJSON(obj:string):string{
    return (<pizzaT>JSON.parse(obj)).name;
}
function getNameFromJSONC(obj:string):string{
    return (JSON.parse(obj) as pizzaT).name;
}
function getToppingsFromJSON(obj:string){
    return (<pizzaT>JSON.parse(obj)).toppings;
}
console.log("Assertion");
console.log(getNameFromJSON(serialized));
console.log(getToppingsFromJSON(serialized));
console.log(getNameFromJSONC(serialized));

//interface
type Pizza = {
    name:string,
    sizes:string[],
    getAvailableSizes():string[]
}
type Orden = {
    quantity:number
}
let pizzaI:Pizza;
function createPizza(name:string,sizes:string[]):Pizza
{
    return{
        name,
        sizes,
        getAvailableSizes(){
            return this.sizes;
        }
    }
}
console.log("Interfaces");
pizzaI = createPizza("Mexican Big Hot Delicious",['small','medium']);
console.log(pizzaI);
//example of implementation of multiple types on a class
class MiaPizza implements Pizza,Orden{
    name!:string;
    sizes!:string[];
    quantity!:number;
    getAvailableSizes(){
        return this.sizes;
    }
}

interface IPizza{
    name:string,
    sizes:string[],
    toppings?:number,
    getAvailableSizes():string[],
    [key:number]:string,
    dictionary?:{
        [key:string]:any;}
}
function createPizzaI(name:string,sizes:string[]):IPizza
{
    return{
        name,
        sizes,
        getAvailableSizes(){
            return this.sizes;
        }
    }
}
//The variable can take the interface or type
pizzaI = createPizzaI("Mexican Big Hot Delicious",['small','medium']);
let pizzaI2:IPizza;
pizzaI2 = createPizzaI("Mexican Big Hot Delicious",['small','medium']);
pizzaI2.dictionary =['mike',1];
pizzaI2.toppings = 4;
console.log(pizzaI2);
pizzaI2[1] ='mike';
console.log(pizzaI2);
pizzaI2[2] ='claveNueva';
console.log(pizzaI2[2]);

//scope
//Scope
function funcion():void {
    let lugar:string="Mi lugar";
    console.log(lugar);
}

function ejecutar(funcion:Function) {
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
    funcion():void {       
        console.log(this.lugar);
    }
};
objeto2.funcion();


// a nested function, we must use contador, because we lose the scope of this
//in this case contador must be declarated in the incrementar function
const contador = {
    cantidad: 0,
    incremetar() {
        var id =setInterval(function() {
            console.log(++contador.cantidad);
            if (contador.cantidad==5) clearInterval(id);
        }, 1000);
    }
};

//but arrow functions have the scope of the level up, in this case 
//the object scope
const contador2 = {
    cantidad: 0,
    incremetar() {
        var id =setInterval(() => {
            console.log(++this.cantidad);
            if (this.cantidad==5) clearInterval(id);
        }, 1000);
    }
};
contador.incremetar();
contador2.incremetar();
//Clases
//classes are based on prototypes, based on functions in JS
//prototypes
function PizzaProto(name:string){
    let pizzaName=name;
    let toppings:string[]= ['salami'];
    
}

PizzaProto.prototype.addToping = function addTopping(topping:string){
 this.toppings.push(topping);
}

const pizzaP =  new (PizzaProto as any)("Old Succulent Delicious");
//pizzaP.addTopping('Pineapple');
console.log(pizzaP);

class PizzaClass {
  name:string;
  toppings:string[]=[];
  constructor(name:string){
   this.name = name;
  }
   addTopping(topping:string){
    this.toppings.push(topping);
   }
}
const pizzaC =  new PizzaClass("Old Succulent Delicious");
pizzaC.addTopping('Pineapple');
console.log(pizzaC);

interface ISizes{   
    availableSizes: string[];
}
abstract class Sizes implements ISizes{
    constructor(protected sizes:string[]){
    }
    set availableSizes(sizes:string[])
    {
        this.sizes = sizes;
    }
    get availableSizes(){
       return this.sizes;
    }    
}

//const pizzaSizes = new Sizes(['medium','small','large']);
//pizzaSizes.availableSizes= ['small','medium','large'];
//console.log(pizzaSizes.availableSizes);
interface IPizzaN extends ISizes{
    readonly name:string;
    toppings:string[];
    addTopping(topping:string):void;
    updateSizes(sizes:string[]):void;

}
class PizzaClass2 extends Sizes implements IPizzaN{    
    toppings:string[]=[];
    constructor(readonly name:string, sizes:string[]){
     super(sizes);
    }
     addTopping(x:string){
      this.toppings.push(x);
     }
     public updateSizes(s:string[])
     {
    this.sizes = s;
     }
  }
let pizzaExample = new PizzaClass2("Old Succulent Delicious",['medium','small','large']);
console.log(pizzaExample);
var namePizza = PizzaClass2.name;
console.log(namePizza);
pizzaExample.updateSizes(['medium','small']);
console.log(pizzaExample);

//static
const date =new Date();
date.getFullYear();
Date.now();

class Coupon{
    percentaje:number;
    constructor(p:number){
        this.percentaje = p;
    }
    static allowed = ['Old Hot Delicious', 'Vegetarian Festival'];
    static create(percentaje:number)
    {
        return new Coupon(percentaje);
    }
}

console.log(Coupon.allowed);
var my_cupon =Coupon.create(56.9);
console.log(my_cupon);

const elem =document.querySelector('click');

function handleClick(this:HTMLAnchorElement,event:Event){
    event.preventDefault();
    console.log(this.href);
}

elem?.addEventListener('click',handleClick,false);
