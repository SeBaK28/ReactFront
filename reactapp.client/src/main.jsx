import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { App } from "./App.jsx"
import "./index.css";
import { Towar } from './Towar/TowarPage.jsx';
import { Towary } from './Towar/TowaryPage.jsx';
import { Pracownik } from './Pracownik/PracownikPage.jsx'; 
import { Pracownicy } from './Pracownik/PracownicyPage.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
