function Ellipse(a, b) {
    this.a = a;  // 장축 방향 반지름
    this.b = b;  // 단축 방향 반지름
}

// 타원 넓이를 계산하는 메서드
Ellipse.prototype.getArea = function () {
    return Math.PI * this.a * this.b;
}

// Object.prototype.toString을 덮어쓴다
Ellipse.prototype.toString = function () {
    return "Ellipse" + this.a + " " + this.b;
}

console.log(ellipse.getArea());
console.log(ellipse.toString());