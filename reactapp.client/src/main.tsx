import React from 'react'
import ReactDOM from "react-dom/client"
import './index.css'
import App from "./App.tsx"
import { Client } from "./Client/AddClientPage"
import { ClientList } from "./Client/ClientListPage"
import { Pracownik } from "./Pracownik/PracownikPage"
import { Pracownicy } from "./Pracownik/PracownicyPage"
import { StatusPrac } from "./Praca/StatusPracyPage"
import { Magazyn } from "./Czesci/MagazynCzesciPage"
import { Layout } from "./layout/Layout"
import { BrowserRouter, Route, Routes } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById("root")as HTMLElement).render(
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
