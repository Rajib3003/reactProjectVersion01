import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../Constants/TodosConstants";

const initialState = {
    isLoading : false,
    todos : [],
    error : null,
}

const todosReducers = (state=initialState, action ) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:            
            return{
                ...state,
                isLoading: true,
                error: null
            };
        case GET_TODOS_SUCCESS:            
            return{
                ...state,
                isLoading: false,
                todos : action.payload,
                
            };
        case GET_TODOS_FAILED:            
            return{  
                ...state,                            
                isLoading: false,                
                error : action.error,
            };
    
        default:
            return state;
    }
}
export default todosReducers;