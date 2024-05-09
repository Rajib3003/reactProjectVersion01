import { DECREMENT, INCREMENT, RESET } from "../Constartor/countConstartors";

// 1. state
const initialCounterState = {
    conut : 0
    
}

// 3. Reducer function 
const counterReducer = (state=initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:                
            return{
                
                count : state.conut + 1,
            };
        case DECREMENT:                
            return{
               
                count : state.conut - 1,
            };
        case RESET:                
            return{
                
                count : 0,
            };
    
        default:
            return state;
    }
}

export default counterReducer;