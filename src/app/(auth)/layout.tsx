import { cookies } from "next/headers";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

export default function Layout({ children }: { children: React.ReactNode }) {

    const token = cookies().get('user')?.value;
    
    return (
        <>
            <Header token={token}/>
                {children}
            <Footer/>
        </>
    )
    
}