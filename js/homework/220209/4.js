function makeStar2(n) {
    let box = "";
    for(let i = n; i > 0; i--) {
        for(let j = i; j <= n; j++) {
            box += "*";
        }
        box += "\n";
    }
    console.log(box);
}
makeStar2(5);