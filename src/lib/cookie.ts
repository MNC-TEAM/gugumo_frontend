import { cookies } from "next/headers"

export default function getCookie(name : string) {
    return cookies().get(name);
}