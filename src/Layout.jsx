import React from 'react'
import Header from './Component/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer'

function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout