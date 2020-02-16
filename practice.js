class Animal {
  constructor(name){
    this.name = name;
  }
  getName(){
    console.log(this.name);
    return this;
  }
}

function canFly(superclass){
  return class extends superclass {
    constructor(...args){
      super(...args);
    }
    fly(){
      console.log("I can fly");
      return this;
    }
  }
}

const canTalk = superclass => {
  return class extends superclass {
    constructor(...args){
      super(...args);
    }
    talk(){
      console.log("Chatter box");
      return this;
    }
  }
};

class Dog extends canTalk(canFly(Animal)) {
  constructor(...args){
    super(...args);
  }
  bark(){
    console.log('Woof!');
    return this;
  }
}


let d1 = new Dog('Lessy');
d1.getName()
  .bark()
  .fly()
  .talk();