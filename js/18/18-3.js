function Ellipse(a, b) {
    this.a = a;  // 장축 방향 반지름
    this.b = b;  // 단축 방향 반지름
}

/* 타원 넓이를 계산하는 메서드 */
Ellipse.prototype.getArea = function () {
    return Math.PI * this.a * this.b;
}

/* Object.prototype.toString을 덮어쓴다 */
Ellipse.prototype.toString = function () {
    return "Ellipse" + this.a + " " + this.b;
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

/*
* Circle 생성자의 인스턴스 circle에서 Ellipse.prototype의 메서드를 사용하려면
* Circle.prototype이 Ellipse.prototype을 상속받아야 합니다. 따라서 circle의 프로토타입 체인에 Ellipse.prototype을 삽입합니다.
* 이를 위해 Circle.prototype을 Ellipse.prototype을 프로토타입으로 가지는 객체로 바꿉니다. 이때 기존의 Circle.prototype을 대체할 새로운
* Circle.prototype의 constructor 프로퍼티의 value 속성을 Circle로 설정합니다.
* */
