import React from 'react'

export default function Login() {
  return (
    <div className="auth-page d-flex align-items-center justify-content-center">
      <form className="auth-form bg-white p-4 rounded shadow-sm" style={{width: '100%', maxWidth: 420}}>
        <h2 className="mb-3">Login</h2>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input className="form-control" type="email" name="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input className="form-control" type="password" name="password" required />
        </div>
        <button className="btn btn-primary w-100" type="submit">Sign in</button>
      </form>
    </div>
  )
}
