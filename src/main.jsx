import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Event from './components/Events/Events.jsx'
import Layout from './components/Layout/Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import Register from './components/Register/Register.jsx'
import Try from './components/Try/Try.jsx'
import About from './components/About/About.jsx'
const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} >
      <Route path="" element={<Home />} />
      <Route path = "/events" element={<Event />} />
      <Route path = "/contact" element={<Contact />} />
      <Route path = "/register" element={<Register />} />
      <Route path = "/try" element={<Try/>} />
      </Route>
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {route} />
  </StrictMode>,
)
