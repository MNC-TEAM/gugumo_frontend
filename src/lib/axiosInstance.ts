import { authOptions } from "@app/api/auth/[...nextauth]/route";
import axios from "axios";
import { getServerSession } from "next-auth";

export const axiosInstace = axios.create({
    baseURL : process.env.API_URL
})

axiosInstace.interceptors.request.use( async (config)=>{
    const session = await getServerSession(authOptions) as any;
    if(session){
        config.headers.Authorization = session.accessToken || "";
    }
    return config;
});