function handleGestureEvent (event) {
    var output = document.getElementById('output');
    switch (event.type) {
        case 'gesturestart':
            output.innerHTML = 'startted :' + event.rotation + ',scale' + event.scale
            break;
        case 'gestureend':
            output.innerHTML = 'startted :' + event.rotation + ',scale' + event.scale
            break;
        case 'gesturechange':
            output.innerHTML = 'startted :' + event.rotation + ',scale' + event.scale
        default:
            break;
    }
}
document.addEventListener('gesturestart', handleGestureEvent, false);