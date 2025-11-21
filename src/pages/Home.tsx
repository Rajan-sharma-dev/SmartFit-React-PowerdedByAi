import React from 'react'
import { useAppSelector, useAppDispatch } from '../store'
import { increment } from '../slices/counterSlice'

export default function Home() {
  const count = useAppSelector((s) => s.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>Home</h1>
      <p>Counter: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  )
}
