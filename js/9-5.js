Array.prototype[Symbol.for("shuffle")] = function () {
    var a = this;
    var m = a.length, t, i;
    while(m) {
        i = Math.floor(Math.random()*m--);
        t = a[m]; a[m] = a[i]; a[i] = t;  // a[i]와 a[m]을 교환
    }
    return this;
}
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array[Symbol.for("shuffle")]());