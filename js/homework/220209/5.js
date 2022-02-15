
makeStar(5);

function makeStar(n) {
    let result = "";

    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= n - i; j++) {
            result += " ";
        }
        for (let k = 1; k <= i; k++) {
            result += "*";
        }
        result += "\n";
    }
    console.log(result);
}
