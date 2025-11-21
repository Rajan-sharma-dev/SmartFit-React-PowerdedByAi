import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/Home'
import About from '../pages/About'

describe('Pages', () => {
  it('home shows counter', () => {
    render(<Home />)
    expect(screen.getByText(/Home/i)).toBeDefined()
  })

  it('about page renders', () => {
    render(<About />)
    expect(screen.getByText(/About/i)).toBeDefined()
  })
})
