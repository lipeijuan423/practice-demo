class Person {
  name: string;
  age: number;
  constructor(newName: string, newAge: number) {
    this.name = newName;
    this.age = newAge;
  }
  tell () {
    console.log("my name" + this.name + ", age " + this.age);
  }
}
var students = new Person("小明", 20);
students.tell();