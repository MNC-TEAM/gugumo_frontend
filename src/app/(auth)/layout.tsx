"use client"
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useAppSelector } from "@/store/hook";
import { redirect } from "next/navigation";

export default function layout({ children }: { children: React.ReactNode }) {

    const user = useAppSelector(state=>state.user);

    if(!user){
        redirect('/');
    }

    return (
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    )
}
