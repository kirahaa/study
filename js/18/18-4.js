/*
* Circle.prototype.toString 메서드를 정의해서 Ellipse.prototype.toString 메서드를 덮어씁니다.
* */

function Ellipse(a, b) {
    this.a = a;
    this.b = b;
}
// 타원 넓이를 계산하는 메서드
Ellipse.prototype.getArea = function () {
    return Math.PI * this.a * this.b;
}
// Object.prototype.toString을 덮어쓴다
Ellipse.prototype.toString = function () {
    return "Ellipse " + this.a + " " + this.b;
}

function Circle(r) {
    this.a = r;
    this.b = r;
}

Circle.prototype = Object.create(Ellipse.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Circle,
        writable: true
    }
})

Circle.prototype.toString = function () {
    return "Circle " + this.a + " " + this.b;
}

