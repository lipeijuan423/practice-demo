/* 不可扩展对象 enumerable */
var person = {name: 'pp'};
Object.preventExtension(person);
// 是否可扩展
Object.isExtensible(person);
person.age = 19;
person.age /* undefined */
/* 密封对象 configurable */
Object.seal(person);
Object.isSealed(person);
delete person.name;
person.name /* pp */
/* 冻结对象 writable */
Object.freeze(person);
Object.isFrozen(person);
