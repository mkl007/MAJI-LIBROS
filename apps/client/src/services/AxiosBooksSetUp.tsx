import axios from 'axios';
import { ApiUrl } from '../utils/contsToExport.util';


const instanceAxiosBooks = axios.create({
    baseURL: `${ApiUrl}/books`,
    headers: {
        "Content-Type": 'multipart/form-data'
    },
    withCredentials: true
    
})

export default instanceAxiosBooks