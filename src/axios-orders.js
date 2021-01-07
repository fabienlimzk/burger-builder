import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-b1af4-default-rtdb.firebaseio.com/',
});

export default instance;
