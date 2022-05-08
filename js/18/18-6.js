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

Circle.prototype = new Ellipse();
Circle.prototype.constructor = Circle;

var circle = new Circle(2);

console.log(circle.getArea());
console.log(circle.toString());

/*
* 이 방법은 Circle.prototype에 이미 생성된 Ellipse의 프로퍼티를 낭비하는 단점이 있습니다.
* */