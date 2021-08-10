
function myFunction(this: any,...name:string[]){
    console.log("Function:" + this + " " +name);
}

myFunction("Bethy");

const myObj = {
    myMethod(){
        console.log("Object:"+ this);
    }
};

myObj.myMethod();

class MyClass{
    myMethod(){
        console.log("Class:"+ this);
    }
}

var myObjC = new MyClass();
myObjC.myMethod();

myFunction.call(myObj,'Zabdiel',"Bethi" );
myFunction.apply([],['Esmeralda','Miguel']);
console.log("Binding");
const bindFunction = myFunction.bind(myObj);
bindFunction();
bindFunction("Behti","Zabdiel");
bindFunction("Mike","Robert");

//passing scope
var bunny = {
    name: 'Usagi',
    tasks: ['transform', 'eat cake', 'blow kisses'],
    showTasks: function() {   
     var _this = this;   
      this.tasks.forEach(function(task) {
        console.log(_this.name + " wants to " + task);
      });
    }
  };
  
  bunny.showTasks();


  var cat = {
    name: 'cati',
    tasks: ['transform', 'eat cake', 'blow kisses'],
    showTasks: function() {
      this.tasks.forEach(function(this:any,task:string) {
        console.log(this.name + " wants to " + task);
      }.bind(this));
    }
  };
  
  cat.showTasks();


  //scope
  function foo(a:number) {

    var b = a * 2;

    function bar(c:number) {
        console.log( a, b, c );
    }

    bar(b * 3);
}

foo( 2 ); // 2 4 12


  //using arrow function is a scope up
  var bunny = {
    name: 'nonami',
    tasks: ['transform', 'eat cake', 'blow kisses'],
    showTasks() {
      this.tasks.forEach((task) => {
        console.log(this.name + " wants to " + task);
      });  
    }
  };
  
  bunny.showTasks();

  class MyClassN{
      
      myMethod(){
        const data=123;        
       console.log('1', this)
       setTimeout(() => {
        console.log(this);
        }, 0);
      }
      
  }

  const MyInstance = new MyClassN;
  MyInstance.myMethod();

  //types
const person = {
  name:"Miguel",
  age:35
}

type Person = typeof person;

const son:Person={
  name:"Zabdiel",
  age:1
}

type PersonKeys  = keyof Person;
type PersonTypes = Person[PersonKeys];

var key:PersonTypes ='name';
console.log("Types");
console.log(key);
//we are passing the name of property to obtain the value
function getProperty<T,K extends keyof T>(obj:T,key:K){
  return obj[key];
}
const personName=getProperty(person,'name')
console.log(personName);

//ReadOnly
interface IPerson{
  name:string;
  age:Number;
}

interface IReadOnlyPerson{
  readonly name:string;
  readonly age:Number; 
}

const personI:IPerson ={
  name:"Zabdiel",
  age:1
}

personI.name ="Mickey";

function freezePerson(person:IPerson):IReadOnlyPerson{
 return Object.freeze(person);
}

const freezer =freezePerson(personI);
console.log(freezer);
function freezePerson2(person:IPerson):Readonly<IPerson>{
  return Object.freeze(person);
 }

 const freezer2 =freezePerson2(personI);
 console.log(freezer2);
 function freeze<T>(obj:T):Readonly<T>{
  return Object.freeze(obj);
 }

 const freezer3 =freeze(personI);
 console.log(freezer3);
 type MyReadOnly<T>={
  readonly [P in keyof T]:T[P]
 }

 function freezeMe<T>(obj:T):MyReadOnly<T>{
  return Object.freeze(obj);
 }

 const freezePersonn  =freezeMe(personI);
console.log(freezePersonn);
 //update with partial interface
 //In that are optional the fields
 interface IPartialPerson{
  name?:string;
  age?:Number;
}

 function UpdatePerson(person:IPerson, prop:IPartialPerson){
 return {...person,...prop};
 }

 const personU =UpdatePerson(personI, {name:"Mickey"});
 console.log("Update");
 console.log(personU);

 type MyPartial<T> = {
  [P in keyof T]?:T[P]
 }

 function Update<T>(obj:T, prop:MyPartial<T>){
  return {...obj,...prop};
  }

  const personN = Update(personI, {name:"Becky"});
  console.log(personN);

  //interface optional to required
  interface IPersonOptional{
    name?:string;
    age:Number;
    
  }
 
  //remove the optional operator
  type MyRequired<T> = 
  {
    [P in keyof T]-?:T[P]
  }
 //convert the optional in required
  const newPerson:MyRequired<IPersonOptional>={
    name:"Esmeralda",
    age:48
  }

  function printPerson(person: MyRequired<IPersonOptional>){
    return `${person.name} is ${person.age} years old`;
  }

  function printPersonR(person: Required<IPersonOptional>){
    return `${person.name} is ${person.age} years old`;
  }

  const age = printPerson(newPerson);
  const age2 = printPerson(newPerson);
  console.log("Required");
  console.log(age);
  console.log(age2);
  printPersonR(newPerson);

  //Pick
  //assigning to a new interface from other
  //with only some properties
  interface IPersona{
    name:string;
    age:Number;
    addres:{}
  }

  type MyPick<T,K extends keyof T> ={
    [P in K]:T[P]
  }

  const mapPerson:MyPick<IPersona,'name'|'age'>={
    name:"Becky",
    age:24
  }
console.log(mapPerson);

//record instead dictionary
let dictionary: {[key:string]:any} = {};
let dic:Record<string,ITrackStates>={};
let dic2:Record<string,typeof item>={};
interface ITrackStates{
  current:string;
  next:string;
}

const item: Record<keyof ITrackStates,string>={
 current: 'js023232',
 next:'erefe33'
};

//numbers are coerced to string
dictionary[0]= item;
dic[0] = item;

console.log(dictionary[0]);
console.log(dic[0]);
console.log(dic2);
//type
function exampleFun(v:string |number){
  if (typeof v ==='string')
  {
    console.log("Is a string");
    console.log(v.toLocaleUpperCase());
  }
  else if (typeof v ==='number'){
    console.log("Is a number");
    console.log(v.toFixed(2));
  }

}

exampleFun("hola TypeScript");
exampleFun(45.678);

class Song{
  kind='song';
  constructor(public title:string, public duration:string |number) {

  }
}

function getSongDuration(item:Song):string{
    if (typeof item.duration ==='string')
    {
      return item.duration;
    }
    if (typeof item.duration ==='number')
    {
      const {duration} = item;
      const minutes = Math.floor(duration/60000);
      const seconds = (duration/1000) %60;
      return `${minutes}:${seconds}`;
    }
    return 'Error';
  }


const songDurationFromtString = getSongDuration(new Song('I love you','05:31'));
console.log(songDurationFromtString);

const songDurationFromMS = getSongDuration (new Song('I love you',330000));
console.log(songDurationFromMS);


//instance of
class MyExample{
  example(){}
}

function example2(){

}
example2.prototype.example = function example(){

}
const myObj2 = new MyExample();
console.log(Object.getPrototypeOf(myObj2) === MyExample.prototype);
console.log(myObj2 instanceof MyExample);

class PlayList{
  kind='playlist';
  constructor (public name:string, public songs:Song[]) {

  }
}

function getItemName(item:Song|PlayList){
 if ((item as Song).title){
   return (item as Song).title;
 }
 return (item as PlayList).name;
}

const songName = getItemName(new Song("The little song",300000));
console.log('Song name:', songName);

const playListName = getItemName(new PlayList('The Best',[new Song("The litltle song",300000)]));
console.log('Play List name:', playListName);


function getItemNameT(item:Song|PlayList){
  if (item instanceof Song){
    return item.title;
  }
  else{
  return item.name;}
 }


 const songName2 = getItemNameT(new Song("The little song",300000));
console.log('Song name:', songName2);

const playListName2 = getItemNameT(new PlayList('The Best',[new Song("The litltle song",300000)]));
console.log('Play List name:', playListName2);

function getItemNameS(item:Song|PlayList){
  if (isSong(item)){
    return item.title;
  }
  else{
  return item.name;}
 }
//putting the type, for the context
//only is for boolean
function isSong(item:any): item is Song{
  return item instanceof Song;
}

//in operator
//const exists ='localStorage' in window;

//checking if is available
function isSongIn(item:any): item is Song{
  return 'title' in item;
}


//intersection types
interface IOrder{
  id:string;
  amount:number;
  currency:string;
}

interface IStripe {
  type:'stripe';
  card:string;
  cvc:string;

}

interface IPayPal{
  type:'paypal';
  email:string
}

type CheckoutCard = IOrder & IStripe;
type CheckoutPayPal = IOrder & IPayPal;
//intersection with only a new property
type CheckoutOxxo = IOrder & {barcode:string, type:'oxxo'};

const orderI:IOrder = {
  id:'sfes32',
  amount:1234,
  currency:'USD'
};

const orderCard:CheckoutCard = {
  ...orderI,
  type:'stripe',
  card: '1233 345454 4545 45656',
  cvc:'345'
}

const orderPayPal: CheckoutPayPal={
  ...orderI,
  type:'paypal',
  email:'abcdefg@email.com'
}

const assigned = Object.assign({}, orderI, orderCard);

type Payload =CheckoutCard |CheckoutPayPal|CheckoutOxxo;
function checkout(payload: Payload){
  //
 if (payload.type ==='stripe'){
   console.log(payload.card, payload.cvc)
 }
 if (payload.type ==='paypal'){
  console.log(payload.email)
 }
}

checkout(orderCard);
checkout(orderPayPal);


interface Item{
  name:string;
}
interface IArtist extends Item{  
  songs:number;
}

interface IArtist{
  getSongs():number;
}

type Artist2={
  name:string;
} &Item;

const newArtist: IArtist = {
  name:'Mike',
  songs:5,
  getSongs():number{
    return this.songs;
  }

}

console.log(newArtist);

interface  IArtist{
  name:string
}

class ArtistCreator implements IArtist{
  public songs=5;
  constructor(public name:string){

  }

  getSongs():number{
    return this.songs;
  }

}

function ArtistFactory(name: string){
  return new ArtistCreator(name);
}

ArtistFactory('Mike');

//generic
class PizzaG{
  constructor (private name:string, private price:number){

  }
}

class CouponG{
 constructor(private name:string){}

}
class List<T>{
  private list:T[]= [];

  addItem(item:T):void{
    this.list.push(item);
  }

  getList():T[]{
   return this.list;
   }
}

const list = new List<PizzaG>();
list.addItem(new PizzaG('Old Suculent Hot',15));
const pizzasList: PizzaG[] = list.getList();
console.log(pizzasList);
const anhoterList = new List<CouponG>();
anhoterList.addItem(new CouponG('First taste')); 
const couponsList: CouponG[] = anhoterList.getList();
console.log(couponsList);

//Function overloading
function reverse(str:string):string;
function reverse<T>(array:T[]):T[];
function reverse<T>(x: string|T[]):string |T[]{
  if (typeof x === 'string')
  {
   return x.split('').reverse().join('');
  }
  return x.slice().reverse();
}

console.log(reverse('Salami'));
console.log(reverse(['Bacon','Salami','Pepperoni', 'Chilli','Beans']));
console.log(reverse([1,4,5,6,78,3]));

//Enums
enum SizesE{
  Small,
  Medium,
  Large
}
enum SizesE{
  ExtraLarge=3
}

console.log('Enums');
console.log(SizesE.Small);
console.log(SizesE[SizesE.Large]);
const selectedSize =2;
console.log(SizesE[selectedSize]);

const enum SizesS{
  Small= 'small',
  Medium ='medium',
  Large = 'large'
}

let selected: SizesS =SizesS.Medium;
function updateSize(size:SizesS)
{
  selected = size;
}

updateSize(SizesS.Large);
console.log(selected );

//importing
function Fun(name:string){
 console.log(name);
}

//import * as _ from 'lodash';
_.chunk([1,2,3,4],2);
_.mixin(
  {
    log(item:string){
      console.log('...',item);
    }
  }
)

_.log('Hola mundo');

//Array.from(document.querySelectorAll('*'));
//setTimeout(()=>{},12);

