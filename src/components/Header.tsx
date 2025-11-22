import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header border-bottom bg-white">
      <div className="container d-flex align-items-center justify-content-between" style={{height:'64px'}}>
        <div className="logo h5 mb-0 text-primary">SmartFit</div>
        <nav>
          <Link className="btn btn-outline-primary btn-sm me-2" to="/register">Register</Link>
          <Link className="btn btn-primary btn-sm" to="/login">Login</Link>
        </nav>
      </div>
      
    </header>
  )
}
