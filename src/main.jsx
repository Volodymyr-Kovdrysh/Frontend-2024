import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Demo, ErrorPage, Root, AboutPage} from "./pages/index.js";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'app',
                element: <App />
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'params/:id/:name',
                element: <Demo />
            }
        ]
    }
])

    createRoot(document.getElementById('root')).render(

      <RouterProvider router={router} />

)
