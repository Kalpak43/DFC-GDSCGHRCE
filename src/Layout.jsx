import React from 'react'
import { Outlet } from 'react-router-dom'
import ThemeToggler from './components/ThemeToggler'

function Layout() {
  return (
    <>
    <Outlet/>
    {/* <ThemeToggler /> */}
    </>

    
  )
}

export default Layout