Math.easeout = function (A, B, rate, callback) {
    if (A == B || typeof A != 'number') {
        return;
    }
    B = B || 0;
    rate = rate || 2;

    var step = function () {
        A = A + (B - A) / rate;

        if (A < 1) {
            callback(B, true);
            return;
        }
        callback(A, false);
        requestAnimationFrame(step);
    };
    step();
};
var doc = document.body.scrollTop ? document.body : document.documentElement;
Math.easeout(doc.scrollTop, 0, 4, function (value) {
    doc.scrollTop = value;
});