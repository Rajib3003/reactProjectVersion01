import { DECREMENT, INCREMENT, RESET } from "../Constants/CounterConstants"

export const incrementAction = () => {
    return{
        type : INCREMENT,
    }
}
export const decrementAction = () => {
    return{
        type : DECREMENT,
    }
}
export const resetAction = () => {
    return{
        type : RESET,
    }
}