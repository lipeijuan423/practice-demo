var xhr = createXHR();
xhr.onload = function(){
    if (xhr.readyState >= 200 && xhr.readyState <= 300 || xhr.readyState === 304) {
        alert(xhr.responseText);
    } else {}
}
xhr.onprogress = function (event) {
    var divstatus = document.getElementById('status');
    if (event.lengthComputable) {
        divstatus.innerHTML = 'Recived' + event.position + 'of total' + event.totalSize + 'bytes';
    }
}
xhr.open('get', 'xx.php', true);
xhr.send(null);