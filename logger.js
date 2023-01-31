import {Chalk} from "chalk";
export class Logger{
    constructor(){
        this.chalk=new Chalk()
    }
    logInfo(msg){
        console.log(this.chalk.blue(msg))
        
    }
    logError(msg){
        console.log(this.chalk.red(msg))

    }
}