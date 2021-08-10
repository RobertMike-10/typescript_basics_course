"use strict";
function myFunction() {
    console.log("Function" + this);
}
myFunction();
const myObj = {
    myMethod() {
        console.log("Object:" + this);
    }
};
myObj.myMethod();
class MyClass {
    myMethod() {
        console.log("Class:" + this);
    }
}
var myObjC = new MyClass();
myObjC.myMethod();
