const axios = require('axios');

function storeData(param) {
    axios.post('http://192.168.50.198/api/v1/qna', param)
        .then((response) => {
            console.log('then');
            console.log(response.status);
        })
        .catch((error) => {
            console.log('error');
            console.log(error);
            // console.log(error.response.data); // error 확인!!!!!
        })
}

let data = {
    site: 'KOR',
    name: '김하영',
    country: '한국',
    email: 'khy4018@gmail.com',
    title: '너무 어려워요..',
    content: '이걸 어떻게 처음부터 잘합니까.',
    is_privacy_agree: true
};

storeData(data);

// 201 Created