import { describe, it, expect } from 'vitest'
import counterReducer, { increment } from '../slices/counterSlice'

describe('counter slice', () => {
  it('increments', () => {
    const state = { value: 0 }
    const next = counterReducer(state as any, increment())
    expect(next.value).toBe(1)
  })
})
