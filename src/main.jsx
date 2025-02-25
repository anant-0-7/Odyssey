import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Event from './components/Events/Events.jsx'
import Layout from './components/Layout/Layout.jsx'


const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} >
      <Route path="" element={<Home />} />
      <Route path = "events" element={<Event />} />


      </Route>



    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {route} />
  </StrictMode>,
)
