import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';

/** routing */
import Root from '@routes/Root'
import ErrorPage from "@routes/ErrorPage";
/** pages */
import Home from '@pages/Home'

import './index.css'

const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <div>About me...or not yet.</div>
            },
            {
                path: "/contact",
                element: <TempContact />
            }
        ]
    }
]);

const TempContact = () => {
    return (
        <div>Contact me...or not yet. 
            <a className="text-orange-700 underline" href="https://workhouse.au/" rel="nofollow">Better still go here.</a>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)