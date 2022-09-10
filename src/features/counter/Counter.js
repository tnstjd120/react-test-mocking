import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, fetchIncrement, increment, incrementByAmount } from './counterSlice'
// import styles from './Counter.module.css'

export function Counter() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(fetchIncrement(count))}>fetchIncrement</button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
                <button onClick={() => dispatch(incrementByAmount(-10))}>-10</button>
            </div>
        </div>
    )
}