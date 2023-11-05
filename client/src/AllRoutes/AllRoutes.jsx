import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TopNavbar from '../components/Navbar/TopNavbar'
import Login from '../pages/Login'
export default function AllRoutes() {
  return (
    <Routes>
        <Route
        path = '/' element = {<TopNavbar/>}
        />
        <Route
        path = "/sign" element = {<Login/>}
        />
    </Routes>
  )
}
