function makeStar(n){
    let box = "";
    for(let i = n; i > 0; i--) {
        box += "*";
    }
    console.log(box);
}
makeStar(5);