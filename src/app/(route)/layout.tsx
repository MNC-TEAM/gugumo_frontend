import Footer from "@components/common/Footer";

export default async function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <Footer/>
        </>
    )
}
