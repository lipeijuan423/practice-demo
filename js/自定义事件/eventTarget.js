// 自定义事件 -- 创建一个管理事件的对象，其他对象监听事件 观察者的设计模式
function EventTarget () {
    this.handlers = {};
}
EventTarget.prototype = {
    constructor: EventTarget,
    addHandler: function (type, handler){
        if (typeof this.handlers[type] == 'undefined') {
            this.handlers[type] = [];
        }
        this.handlers[type].push(handler);
    },
    fire: function(event){
        if (!event.target) {
            event.target = this;
        }
        if (this.handlers[event.type] instanceof Array) {
            var handlers = this.handlers[event.type];
            for(var i = 0,len = handlers.length; i < len; i++){
                handlers[i](event);
            }
        }
    },
    removeHandler: function(type, handler){
        if (this.handlers[type] instanceof Array) {
            var handlers = this.handlers[type];
            for(var i =0, len = handlers.length; i<len;i++){
                if (handlers[i] === handler) {
                    break;
                }
            }
            handlers.splice(i, 1);
        }
    }
}
function handleMessage(event){
    alert(event.message);
}
var target = new EventTarget();
target.addHandler('message', handleMessage);
target.fire({type: "message", message: 'hello world'});
target.removeHandler('message', handleMessage);
target.fire({type: 'message', message: 'Hello world'});
/* 其他对象继承EventTarget */
function Person(name, age){
    EventTarget.call(this);
    this.name = name;
    this.age = age;
}
function inheritPrototype(Person, EventTarget){
    var prototype = object(EventTarget.prototype);
    prototype.constructor = Person;
    Person.prototype = prototype;
}
inheritPrototype(Person, EventTarget);
Person.prototype.sayHi = function (message){
    this.fire({type: 'message', message: message});
}
function handleMessage2(event) {
    alert(event.target.name + event.message);
}
var person = new Person('df', 12);
person.addHandler("message", handleMessage2);
person.sayHi('abcdefg');
