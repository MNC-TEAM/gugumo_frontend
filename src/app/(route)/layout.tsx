"use client"
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <Footer/>
        </>
    )
}
