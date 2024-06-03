import PrivateRoute from "@components/auth/PrivateRoute/PrivateRoute";
import Footer from "@components/common/Footer";
import Header from "@components/common/Header";

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <PrivateRoute>
            <Header/>
                {children}
            <Footer/>
        </PrivateRoute>
    )
    
}