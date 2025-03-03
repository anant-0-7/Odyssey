import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Home/Navbar'
import ScrollToTop from '../ScrollToTop'

function Layout() {
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <Outlet />

    </>
  )
}

export default Layout