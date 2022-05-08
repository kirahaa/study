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

var circle = new Circle(2);

/*
* 이렇게 되면 circle 인스턴스가 Ellipse.prototype의 메서드를 사용할 수 있게 됩니다.
* */

console.log(circle.getArea());
console.log(circle.toString());