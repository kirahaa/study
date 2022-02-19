function sortNumber(...arr) {
    let num = [];
    for(let i = 1; i < arr.length; i++) {
        num.push(arr[i]);
    }
    let sortArr = num.sort();
    console.log(sortArr);
}
sortNumber(5, 10, 23, 14, 24, 64);