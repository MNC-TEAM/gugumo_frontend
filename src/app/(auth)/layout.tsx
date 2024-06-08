import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import PrivateRouter from "@components/router/PrivateRouter";

export default async function Layout({ children }: { children: React.ReactNode }) {

    return (
        <PrivateRouter>
            <Header/>
                {children}
            <Footer/>
        </PrivateRouter>
    )
    
}