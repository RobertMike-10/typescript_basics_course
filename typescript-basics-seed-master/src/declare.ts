export class MiClase{
    age?:number;
    constructor(public name:string){}
    setAge(age:number){
        this.age = age
    }

}

export class Person{
    constructor(private name:string){

    }
    getName(){
        return this.name;
    }
}

export class App{}