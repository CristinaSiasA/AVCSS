import React from 'react'
import './global.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Solar from './pages/Solar'
import Wind from './pages/Wind'
import About from './pages/About'
import Quote from './pages/Quote'
import Education from './pages/Education'
import 'antd/dist/antd.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="solar" element={<Solar/>}/>
            <Route path="wind" element={<Wind/>}/>
            <Route path="Quote" element={<Quote/>}/>
            <Route path="Education" element={<Education/>}/>
        </Routes>
    )
}
