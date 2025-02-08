import axios from 'axios';

const instanceAxios = axios.create({
    baseURL:'https://maji-libros.onrender.com/api/v1',
    // baseURL:'http://localhost:3000/api/v1',
    withCredentials: true
})


export default instanceAxios