
const cl = console.log;

let str: string;
str = "asta string".slice(0,4);

let anyArr: Array<any>;
anyArr = [1, true, "asta", {x: 100}];

let str1: string = "string 1111";
let a1: Array<any> = [1,2,3,4,5,6];

function sum(a: number ,b: number):number {
    return a+b;
}

cl( sum(2,3) );

/*

class Animal {
    constructor(...args){

    }
}

let a = new Animal(1,2,3,4);
 */

