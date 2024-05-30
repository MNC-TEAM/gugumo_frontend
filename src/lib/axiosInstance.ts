import axios from "axios";

export const axiosInstace = axios.create({
    baseURL : process.env.API_URL
});

axiosInstace.interceptors.request.use((config)=>{
    // config.headers.Authorization = "abc"
    return config;
});
