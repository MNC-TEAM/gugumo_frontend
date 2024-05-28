import Header from "@/app/components/common/Header";
import Footer from "../components/common/Footer";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    )
}