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

/*
* 201 Created
*
* HTTP 201 Created는 요청이 성공적으로 처리되었으며,
* 자원이 생성되었음을 나타내는 성공 상태 응답 코드입니다.
* 해당 HTTP 요청에 대해 회신되기 이전에 정상적으로 생성된 자원은 회신 메시지의 본문(body)에 동봉되고,
* 구체적으로는 요청 메시지의 URL이나, Location (en-US) 헤더의 내용에 위치하게 됩니다.
* */