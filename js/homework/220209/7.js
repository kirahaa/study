function makeStar(n) {
    let result = "";

    for (let i = n; i >= 1; i--) {
        for (let j = 1; j < (n+1) - i; j++) {
            result += " ";
        }
        for (let k = 1; k <= i; k++) {
            result += "*";
        }
        result += "\n";
    }
    console.log(result);
}
makeStar(6);