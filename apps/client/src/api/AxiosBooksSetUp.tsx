import axios from 'axios';

const instanceAxiosBooks = axios.create({
    baseURL: 'http://localhost:3000/api/v1/books',
    headers: {
        "Content-Type": 'multipart/form-data'
    },
    withCredentials: true
})


export default instanceAxiosBooks