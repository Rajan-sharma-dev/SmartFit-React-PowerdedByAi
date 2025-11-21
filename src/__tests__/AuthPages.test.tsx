import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'

describe('Auth pages', () => {
  it('renders register form', () => {
    render(<Register />,{ wrapper: ({children}) => <div>{children}</div>})
    expect(screen.getByText(/Register/i)).toBeDefined()
  })

  it('renders login form', () => {
    render(<Login />,{ wrapper: ({children}) => <div>{children}</div>})
    expect(screen.getByText(/Login/i)).toBeDefined()
  })
})
