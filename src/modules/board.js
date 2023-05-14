import axios from 'axios';

function getList(setList) {
  let data = [];
  axios
    .get('http://localhost:10000/boards/v1/list')
    .then((result) => {
      data = result.data;
      setList(data);
      return data;
    })
    .catch(() => {
      console.log('getList() 실패');
      return [];
    });
}

export default getList;
