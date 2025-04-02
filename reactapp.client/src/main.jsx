import React from 'react'
import ReactDOM from "react-dom/client"
import './index.css'
import App from './App.jsx'
//import {
//    createBrowserRouter,
//    RouterProvider,
//} from "react-router-dom"
import { Client } from "./Client/AddClientPage.jsx"
import { ClientList } from "./Client/ClientListPage.jsx"
import { Pracownik } from "./Pracownik/PracownikPage.jsx"
import { Pracownicy } from "./Pracownik/PracownicyPage.jsx"
import { StatusPrac } from "./Praca/StatusPracyPage.jsx"
import { Magazyn } from "./Czesci/MagazynCzesciPage.jsx"
import { Layout } from "./layout/Layout.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//const router = createBrowserRouter([
//    {
//        path: "/",
//        element: <App />,
//    },
//    {
//        path: "/add-client",
//        element: <Client />,
//    },
//    {
//        path: "/client-list",
//        element: <ClientList />,
//    },
//    {
//        path: "/pracownik",
//        element: <Pracownik />,
//    },
//    {
//        path: "/pracownicy",
//        element: <Pracownicy />,
//    },
//    {
//        path: "/praca",
//        element: <StatusPrac />,
//    },
//    {
//        path: "/magazyn",
//        element: <Magazyn />,
//    }
//]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/*<RouterProvider router={router} />*/}
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={ <App /> }/>
                </Route>
                <Route path='/add-client' element={<Layout />}>
                    <Route index element={<Client />} />
                </Route>
                <Route path='/client-list' element={<Layout />}>
                    <Route index element={<ClientList />} />
                </Route>
                <Route path='/pracownik' element={<Layout />}>
                    <Route index element={<Pracownik />} />
                </Route>
                <Route path='/pracownicy' element={<Layout />}>
                    <Route index element={<Pracownicy />} />
                </Route>
                <Route path='/praca' element={<Layout />}>
                    <Route index element={<StatusPrac />} />
                </Route>
                <Route path='/magazyn' element={<Layout />}>
                    <Route index element={<Magazyn />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
