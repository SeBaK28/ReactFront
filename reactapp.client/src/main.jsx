import React from 'react'
import ReactDOM from "react-dom/client"
import './index.css'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import { Client } from "./Client/AddClientPage.jsx"
import { ClientList } from "./Client/ClientListPage.jsx"
import { Pracownik } from "./Pracownik/PracownikPage.jsx"
import { Pracownicy } from "./Pracownik/PracownicyPage.jsx"
import { StatusPrac } from "./Praca/StatusPracyPage.jsx"
import { Magazyn } from "./Czesci/MagazynCzesciPage.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/add-client",
        element: <Client />,
    },
    {
        path: "/client-list",
        element: <ClientList />,
    },
    {
        path: "/pracownik",
        element: <Pracownik />,
    },
    {
        path: "/pracownicy",
        element: <Pracownicy />,
    },
    {
        path: "/praca",
        element: <StatusPrac />,
    },
    {
        path: "/magazyn",
        element: <Magazyn />,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
