import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Venue from './components/Venue/Venue.jsx'
import Spons from './components/Spons/Spons.jsx'
import Event from './components/Events/Events.jsx'
const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path = "/venue" element={<Venue />} />
      <Route path = "/spons" element={<Spons />} />
      <Route path = "/events" element={<Event />} />
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {route} />
  </StrictMode>,
)
