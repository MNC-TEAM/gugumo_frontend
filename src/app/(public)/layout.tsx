import Header from "@components/common/Header";
import Footer from "@components/common/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "@lib/authOptions";
import { redirect } from "next/navigation";

export default async function layout({ children }: { children: React.ReactNode }) {

    const session = await getServerSession(authOptions);

    if(session){
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
