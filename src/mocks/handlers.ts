import {http,HttpResponse} from "msw";
import people from "./dummy.json";

export const handlers = [
    http.get("https://api.example.com/api/list", async ()=> {
        await sleep(200);
        return HttpResponse.json(people);
    })
];

// n초뒤에 발생하게 하는 promise
async function sleep(timeout: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}