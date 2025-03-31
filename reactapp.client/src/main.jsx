import React from 'react'
import ReactDOM from "react-dom/client"
import './index.css'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import { Towar } from "./Towar/TowarPage.jsx"
import { Towary } from "./Towar/TowaryPage.jsx"
import { Pracownik } from "./Pracownik/PracownikPage.jsx"
import { Pracownicy } from "./Pracownik/PracownicyPage.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/towar",
        element: <Towar />,
    },
    {
        path: "/towary",
        element: <Towary />,
    },
    {
        path: "/pracownik",
        element: <Pracownik />,
    },
    {
        path: "/pracownicy",
        element: <Pracownicy />,
    },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
