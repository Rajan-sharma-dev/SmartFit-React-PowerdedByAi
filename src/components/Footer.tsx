import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer border-top bg-light">
      <div className="container py-2 text-center text-muted">© {new Date().getFullYear()} SmartFit</div>
    </footer>
  )
}
