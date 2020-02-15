class Student {
    fullName: string;
    studentsAge: number;
    partTime: boolean;

    constructor(public firstName: string, public lastName: string, public age: number, public optionalValue: any) {
        this.fullName = `${firstName} ${lastName}`;
        this.studentsAge = age;
        this.partTime = optionalValue;
    }
}

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    optionalValue: any;
}

function greeter(person: Person) {
    return `Mu name is ${person.firstName}. I'm ${person.age} years old. Part-time: ${person.optionalValue}`;
}

let user = {
    firstName: "Jane",
    lastName: "User",
    age: 19,
    optionalValue: true
};


//const user = [1,2,3];
document.body.textContent = greeter(user);
