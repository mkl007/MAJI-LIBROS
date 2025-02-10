import axios from 'axios';
import { ApiUrl } from '../utils/contsToExport.util';


const instanceAxios = axios.create({
    baseURL: ApiUrl,
    withCredentials: true
})


export default instanceAxios