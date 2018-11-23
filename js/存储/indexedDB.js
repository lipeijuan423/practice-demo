var indexedDB = window.indexedDB || wndow.msIndexedDB || window.moxIndexedDB || window.webkitIndexedDB;
var request, database;
request = indexedDB.open('admin');
request.onerror = function(event){
    alert(event.target.code);
}
request.onsuccess = function(event){
    // 数据库实例对象IDBDatabase
    database = event.target.result;
}
if (database.version != '1.0') {
    request = database.setVersion('1.0');
    request.onerror = function(event){
        alert(event.target.errorCode);
    };
    request.onsuccess = function(event){
        alert(database.name, database.version)
    };
} else {
    alert(database.name, database.version)
}
// 对象存储空间
var user = {
    username: '007',
    firstName: 'james',
    lastName: 'bond',
    password: 'foo'
}
var store = database.createObjectStore('users', {keyPath: 'username'});
var i = 0,
    request,
    requests = [],
    len = users.length;
while (i < len) {
    request = store.add(users[i++]);
    request.onerror = function(event) {
        
    };
    request.onsuccess = function(event){
        
    };
    request.push(request);
}
// 事务 - 读取或修改数据
var transation = db.transation();
/* 修改 第二个参数 */
var IDBTramsaction = window.IDBTransaction || window.webkitIDBTransaction;
var transation = db.transation('users', IDBTransaction.READ_WRITE);
// 事务索引 objectStore() 传入存储空间名称
var request = db.transation('users').objectStore('users').get('007');