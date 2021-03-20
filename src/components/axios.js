import axios from 'axios';

const instance = axios.create({
    baseURL:"https://theesaan-enterprises-server.herokuapp.com/personal/data/files",
});

export default instance;