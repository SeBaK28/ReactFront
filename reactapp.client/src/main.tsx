import React from 'react'
import ReactDOM from "react-dom/client"
import './index.css'
import App from "./App.tsx"
import { Client } from "./Client/AddClientPage"
import { ClientList } from "./Client/ClientListPage"
import { Pracownik } from "./Employees/NewEmployeePage.tsx"
import { Pracownicy } from "./Employees/EmployeesListPage.tsx"
import { StatusPrac } from "./WorkStatus/WorkStatusPage.tsx"
import { Magazyn } from "./Warehouse/WarehousePage.tsx"
import { Layout } from "./layout/Layout"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Messages } from './Messages/Messages.tsx'


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
                <Route path='/messages' element={<Layout />}>
                    <Route index element={<Messages />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
