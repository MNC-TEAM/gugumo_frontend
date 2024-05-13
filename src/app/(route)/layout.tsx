import Footer from "../components/common/Footer";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <Footer/>
        </>
    )
}
