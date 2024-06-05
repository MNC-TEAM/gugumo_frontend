import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import { authOptions } from "@lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: React.ReactNode }) {

    const session = await getServerSession(authOptions);
    
    if(!session){
        redirect("/");
    }

    return (
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    )
    
}