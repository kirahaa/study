function sortMember(...arr) {
    let list = [];
    for(let i = 1; i < arr.length; i++) {
        let member = {};
        member.age = arr[i].split(' ')[0];
        member.name = arr[i].split(' ')[1];
        list.push(member);
    }
    let sortArr = list.sort(function (a, b) {
        return  a.age - b.age;
    })
    for(let i in sortArr) {
        console.log(sortArr[i]['age'] +" " + sortArr[i]['name']);
    }
}

sortMember(3, "21 Junkyu", "21 Dohyun", "20 Sunyoung");