function sortNumber(...arr) {
    let num = [];
    for(let i = 1; i < arr.length; i++) {
        num.push(arr[i]);
    }
    let sortArr = num.sort(function (a, b) {
        return a - b;
    });
    console.log(sortArr);
}
sortNumber(5, 110, 23, 14, 24, 64);