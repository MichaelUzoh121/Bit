import React from 'react'
import Header from './Component/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Component/Footer'
import MySwiper from './Component/Swiper'

function Layout() {
  const { pathname } = useLocation();

  return (
    <div>
        <Header/>
          {
            pathname === "/"? 
            <MySwiper/>:
            null            
          }
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout