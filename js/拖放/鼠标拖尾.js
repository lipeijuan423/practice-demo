EventUtil.addHandler(document, 'mousemove', function(event){
    var myDiv = document.getElementById("myDiv");
    myDiv.style.left = event.clientX + 'px';
    myDiv.style.top = event.clientY + 'px';
})