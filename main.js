var cl = console.log;
var str;
str = "asta string".slice(0, 4);
var anyArr;
anyArr = [1, true, "asta", { x: 100 }];
var str1 = "string 1111";
var a1 = [1, 2, 3, 4, 5, 6];
function sum(a, b) {
    return a + b;
}
cl(sum(2, 3));
var a2 = ['a'];
var MyMock = (function () {
    function MyMock() {
        this.time = new Date();
        this.sayHi = function () { return console.log('hi'); };
    }
    MyMock.prototype.getTime = function () {
        return new Date();
    };
    MyMock.prototype.getNum = function () {
        return null;
    };
    return MyMock;
})();
/****************************/
var foo = function (a, b) { return a + b; };
/*

class Animal {
    constructor(...args){

    }
}

let a = new Animal(1,2,3,4);
 */
//# sourceMappingURL=main.js.map