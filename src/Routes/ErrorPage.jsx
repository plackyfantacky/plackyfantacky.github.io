import { useRouteError } from "react-router-dom"
import Header from "@components/Header"
import Main from "@components/Main";
import Footer from "@components/Footer"

const ErrorPage = () => {
    const error = useRouteError()
    console.error(error)
    return (
        <>
            <Header />
            <Main className="flex flex-col items-center justify-center relative">
                <h1 className="absolute text-clamp-xl m-0 font-bold leading-none text-gray-200 opacity-75 z-10">{error.status}</h1>
                <div className="flex flex-col items-center gap-4 bg-slate-100 rounded-3xl py-8 px-16 z-20 shadow-2xl shadow-gray-600 w-1/2">
                    <h2 className="m-0 text-center font-semibold text-3xl leading-none">{error.statusText}</h2>
                    <p>...um? Ruh roh! Not sure what happened but it wasn't meant to be this:</p>
                    <p className="italic text-red-900 m-0">{error.data}</p>
                    { parseInt(error.status) != 404 && (
                        <details className="p-4 bg-orange-200 rounded-lg" open>
                            <summary>Stack:</summary>
                            <div className="font-mono">{error.error.stack}</div>
                        </details>
                    )} 
                </div>
            </Main>
            <Footer />
        </>
    )
}

export default ErrorPage;