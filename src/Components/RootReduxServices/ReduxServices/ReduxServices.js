import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIncrementAction } from './Actions/countActions';


const ReduxServices = () => {
    const {abc} = state => state;
    console.log({abc});
    
    const { count } = useSelector(state => state ); // Assuming 'counterReducer' is the correct key for your reducer
    console.log({count});
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(getIncrementAction());
    }

    return (
        <div>
            <h2>Counter App</h2>
            <h3>Count : {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default ReduxServices;
