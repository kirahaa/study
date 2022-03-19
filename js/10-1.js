function compairFunc(key) {
    return function(a, b) {
        return a[key] - b[key];
    };
}
let persons = [
    {
        name: "Tom",
        age: 17
    },
    {
        name: "Huck",
        age: 18
    },
    {
        name: "Becky",
        age: 16
    }
]
console.log(persons.sort(compairFunc("age")));