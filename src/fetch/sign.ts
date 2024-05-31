import axios from "axios";

export const fetcher = (url :string,...arg : any)=>{
    const body = {...arg}[0];
    return axios.post(url,body).then(res => res.data);
}