
function makeStar(n) {
    let box = "";
    for(let i = 1; i <= n; i++) {
        for(let j = i; j <= n; j++) {
            box += "*";
        }
        box += "\n";
    }
    console.log(box);
}
makeStar(5);
