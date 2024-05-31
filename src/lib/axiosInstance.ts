import getCookie from "@lib/cookie";
import axios from "axios";

export const axiosInstace = axios.create({
    baseURL : process.env.API_URL
});

axiosInstace.interceptors.request.use((config)=>{
    const token = getCookie('token')?.value;
    config.headers.Authorization = token;
    return config;
});
