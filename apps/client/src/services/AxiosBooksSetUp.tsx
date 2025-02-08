import axios from 'axios';
const instanceAxiosBooks = axios.create({
    // https://maji-libros.onrender.com/api/v1
    baseURL:'https://maji-libros.onrender.com/api/v1/books',
    // baseURL:'http://localhost:3000/api/v1/books',
    headers: {
        "Content-Type": 'multipart/form-data'
    },
    withCredentials: true
    
})

export default instanceAxiosBooks