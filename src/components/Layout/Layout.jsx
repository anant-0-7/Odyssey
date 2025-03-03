import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Home/Navbar'
import ScrollToTop from '../ScrollToTop'
import Footer from '../Footer'

function Layout() {
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <Outlet />
    <Footer />

    </>
  )
}

export default Layout