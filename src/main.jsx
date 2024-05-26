import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';

/** routing */
import Root from '@routes/Root'
import ErrorPage from "@routes/ErrorPage";
/** pages */
import Home from '@pages/Home'

import './index.css'

const router = createBrowserRouter([
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
                element: <div>About</div>
            },
            {
                path: "/contact",
                element: <div>Contact</div>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
