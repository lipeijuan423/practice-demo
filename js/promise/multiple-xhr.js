function getURL(url){
    return new Promise(function(resolve, reject){
        var req = new XMLHttpRequest();
        req.open('GET',url, true);
        req.onload = function(){
            if (req.status === 200) {
                resolve(req.responseText)
            }
        }
        req.onerror = function(){
            reject(new Error(req.statusText))
        }
        req.send()
    })
}
var request = {
    comment: function getComment() {
        return getURL('http://azu.github.io/promises-book/json/comment.json').then(JSON.parse)
    },
    people: function getPeople(){
        return getURL('http://azu.github.io/promises-book/json/comment.json').then(JSON.parse)
    }
}
function main () {
    function recordValue(results, value){
        results.push(value)
        return results;
    }
    var pushValue = recordValue.bind(null, []);
    return request.comment().then(pushValue).then(request.people).then(pushValue);
}
function mainPromise(){
    return Promise.all([request.comment(), request.people()])
}
main().then(function(value){
    console.log(value)
}).catch(function(error){
    console.error(error)
})