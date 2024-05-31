import axios from "axios";

export const fetcher = (url : string,...arg : any) => {
    const parmas = {...arg}[0];
    return axios.get(url,{params : parmas}).then(res => res.data);
};