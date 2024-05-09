import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement, reset, incrementByAmount } from './counterSlice'
import Button from 'react-bootstrap/Button';
const ViewCounter = () => {
  const count = useSelector(state => state.counter.count)
//   console.log(count)  
const dispatch = useDispatch()
  return (
    <div>
      <h1>Counter Actions</h1>
      <h2>Count : {count}</h2>
      <Button variant="primary" onClick={()=>{dispatch(increment())}}>increment</Button>&nbsp;
      <Button variant="success" onClick={()=>{dispatch(decrement())}}>decrement</Button>&nbsp;
      <Button variant="warning" onClick={()=>{dispatch(reset())}}>Reset</Button>&nbsp;
      <Button variant="secondary" onClick={()=>{dispatch(incrementByAmount(5))}}>IncrementByamount</Button>
      
    </div>
  )
}

export default ViewCounter
