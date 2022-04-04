import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/solar">Solar</Link> |
        <Link to="/wind">Wind</Link> |
        <Link to="/education">Education Center</Link> |
        <Link to="/Quote">Request a Quote</Link>
      </nav>
    </div>
  )
}

export default Navbar
