import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementAction, incrementAction, resetAction } from './Services/Actions/CounterActions';
import Button from 'react-bootstrap/Button';
const Counts = () => {
  
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  // console.log(count)

  const handelIncrement = () => {
   dispatch(incrementAction());
  }
  const handelRest = () => {
   dispatch(resetAction());
  }
  const handelDecrement = () => {
   dispatch(decrementAction());
  }
  return (
    <div>
      <h1>Counter Actions</h1>
      <h3>Count : {count} </h3>
      <Button variant="success" onClick={handelIncrement}>Increment</Button>{' '}
      <Button variant="warning" onClick={handelRest}>Reset</Button>{' '}
      <Button variant="danger" onClick={handelDecrement}>Decrement</Button>{' '}
    </div>
  )
}

export default Counts
