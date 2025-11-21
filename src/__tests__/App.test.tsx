import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'
import { store } from '../store'

describe('App', () => {
  it('renders Home by default', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByText(/Home/i)).toBeDefined()
  })
})
