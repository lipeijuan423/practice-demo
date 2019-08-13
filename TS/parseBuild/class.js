var Person = /** @class */ (function () {
    function Person(newName, newAge) {
        this.name = newName;
        this.age = newAge;
    }
    Person.prototype.tell = function () {
        console.log("my name" + this.name + ", age " + this.age);
    };
    return Person;
}());
var students = new Person("小明", 20);
students.tell();
