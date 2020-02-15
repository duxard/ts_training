var Student = (function () {
    function Student(firstName, lastName, age, optionalValue) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.optionalValue = optionalValue;
        this.fullName = firstName + " " + lastName;
        this.studentsAge = age;
        this.partTime = optionalValue;
    }
    return Student;
})();
function greeter(person) {
    return "Mu name is " + person.firstName + ". I'm " + person.age + " years old. Part-time: " + person.optionalValue;
}
var user = {
    firstName: "Jane",
    lastName: "User",
    age: 19,
    optionalValue: true
};
//const user = [1,2,3];
document.body.textContent = greeter(user);
//# sourceMappingURL=greeter.js.map