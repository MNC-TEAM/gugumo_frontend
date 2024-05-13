import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import PrivateRoute from "../components/auth/PrivateRoute/PrivateRoute";

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <PrivateRoute>
            <Header/>
                {children}
            <Footer/>
        </PrivateRoute>
    )
}