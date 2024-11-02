import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Demo, ErrorPage, Root, AboutPage} from "./pages/index.js";
import {FeedbackProvider} from "./context/FeedbackContext.jsx";
import Login from "./components/Login.jsx";
import RegisterForm from "./components/RegisterForm.jsx";

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
    },
    {
        path: '/login',
        element: <Login/>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/register',
        element: <RegisterForm />,
        errorElement: <ErrorPage />,
    }
])

    createRoot(document.getElementById('root')).render(
<FeedbackProvider>
      <RouterProvider router={router} />
</FeedbackProvider>
)
