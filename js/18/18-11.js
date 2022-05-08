

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
    // Ellipse 생성자를 빌려와서 프로퍼티를 정의합니다.
    Ellipse.call(this, r, r);
    // 이곳에서 새로운 프로퍼티를 작성하거나 기존의 프로퍼티를 덮어쓸 수 있음
}

Circle.prototype = Object.create(Ellipse.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Circle,
        writable: true
    }
})

// 슈퍼 타입의 toString 메서드를 이용해서 Circle.prototype.toString을 정의한다
Circle.prototype.toString = function () {
    var str = Ellipse.prototype.toString.call(this);
    return str.replace("Ellipse", "Circle");
}

/*
* 앞의 코드는 Circle.prototype.toString 메서드 안에서 Ellipse.prototype.toString.call(this) 메서드를 호출해서
* Circle 인스턴스에 대한 Ellipse.prototype.toString 메서드의 값을 가져옵니다. 그리고 그 값을 replace 메서드로 치환해서 반환합니다.
* 그러면 Circle 생성자로 인스턴스를 생성해 봅니다.
* */

let circle = new Circle(2);
console.log(circle.getArea());
console.log(circle.toString());