import {App} from './declare';
function log(message:string):void{
 console.log(message);
}

export class Foo extends App{}

function ShoppingList(){
    var groceries =[];
}

ShoppingList.prototype.addItem = function(item:any){
    this.groceries = this.groceries.concat([item]);
}

ShoppingList.prototype.removeItem = function(item:any){
    this.groceries = this.groceries.filter(function(grocery:any){
        return item !==grocery;
    });
}

class ShoppingListClass{
    groceries:string[];
    constructor(){
        this.groceries=[];
    }
    addItem(item:string){
        this.groceries = [...this.groceries, item]
    }
    removeItem(item:string)
    {
        this.groceries = this.groceries.filter((grocery:any)=> item !==grocery);
    }
}

const MyList =  new ShoppingListClass();

MyList.addItem("Apple");
MyList.addItem("Pizza");
MyList.removeItem("Apple");
console.log(MyList);