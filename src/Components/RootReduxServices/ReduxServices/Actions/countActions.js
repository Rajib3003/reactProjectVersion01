import { DECREMENT, INCREMENT, RESET } from "../Constartor/countConstartors"

// 2. action function 
export const getIncrementAction = () => {
    return{
        type: INCREMENT,
        
    }
}
export const getDecrementAction = () => {
    return{
        type: DECREMENT,
    }
}
export const getResetAction = () => {
    return{
        type: RESET,
    }
}