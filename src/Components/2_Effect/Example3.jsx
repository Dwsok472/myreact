import React, { useState } from 'react';

const Example3 = () => {
  const [data, setData] = useState(null);

  return <div></div>;
};

const sendAPI = () => {
    // ajax 또는 axios를 이용하여 rest api 코드를 작성하는 부분
    // 지금은 3초뒤에 데이터를 리턴하는 코드로 대신함
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ title : 게시판제목 });
        }, 3000); // 3초후에 resolve 함수를 호출함
    });
};

export default Example3
