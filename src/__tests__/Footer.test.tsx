import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

describe('Footer', () => {
  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/SmartFit/i)).toBeDefined()
  })
})
