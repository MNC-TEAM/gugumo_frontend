import PrivateRoute from "@/app/components/auth/PrivateRoute/PrivateRoute";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

export default async function Layout({ children }: { children: React.ReactNode }) {

    return (
        <PrivateRoute>
            <Header/>
                {children}
            <Footer/>
        </PrivateRoute>
    )
    
}