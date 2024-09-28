import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootPage from "./pages/root-page.jsx";
import ErrorPage from "./pages/error-page.jsx";
import AboutPage from "./pages/about-page.jsx";
import ParamsDemoPage from "./pages/params-demo-page.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
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
                element: <ParamsDemoPage />
            }
        ]
    }
])

    createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
      <RouterProvider router={router} />
  </StrictMode>,
)
