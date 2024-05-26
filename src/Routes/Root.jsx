import { Outlet } from "react-router-dom";

import Header from "@components/Header";
import Main from "@components/Main";
import Footer from "@components/Footer";

const Root = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root;