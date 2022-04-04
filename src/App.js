import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Nabar'
import Home from './pages/Home'
import Solar from './pages/Solar'
import Wind from './pages/Wind'
import About from './pages/About'
import Quote from './pages/Quote'
import Education from './pages/Education'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="solar" element={<Solar />} />
      <Route path="wind" element={<Wind />} />
      <Route path="Quote" element={<Quote />} />
      <Route path="Education" element={<Education />} />
    </Routes>
  )
}
