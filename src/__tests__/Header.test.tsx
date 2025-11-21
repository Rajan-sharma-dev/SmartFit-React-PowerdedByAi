import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from '../components/Header'

describe('Header', () => {
  it('renders logo and links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    expect(screen.getByText(/SmartFit/i)).toBeDefined()
    expect(screen.getByText(/Register/i)).toBeDefined()
    expect(screen.getByText(/Login/i)).toBeDefined()
  })
})
