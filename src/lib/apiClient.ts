import axios from 'axios';
import { cookies } from 'next/headers';

// Axios 인스턴스 생성
const apiClient = axios.create({
    baseURL : process.env.API_URL,
});

apiClient.interceptors.request.use(function(config){

    const token = cookies().get('user')?.value;
    if(token){
        config.headers.Authorization = token;
    }
    return config;

});

export default apiClient;