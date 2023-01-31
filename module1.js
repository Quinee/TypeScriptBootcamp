export default class Greeter{
    constructor(greeterName)
    {
        this.greeterName=greeterName;
    }
    sayHelloTo(name){
        console.log("Hello "+name+ " from "+this.greeterName)
    }
}