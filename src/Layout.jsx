import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import ThemeToggler from './components/ThemeToggler'

function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <ThemeToggler />
    <Footer/>
    </>
  )
}

export default Layout