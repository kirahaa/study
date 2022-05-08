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

