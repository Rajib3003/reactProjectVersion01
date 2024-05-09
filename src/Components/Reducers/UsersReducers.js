export const initialState = {
    users:[{id:1715147339836, username:'Rajib'},
    {id:1715147339837, username:'Rakib'},
    {id:1715147339838, username:'kamal hosen'}]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_USER":            
            return {
                ...state,
                users: [...state.users, action.payload]
            }

            case "DELETE_USER":  
            const filteredUsers = state.users.filter(user => user.id !== action.payload)          
            return {
                ...state,
                users: filteredUsers
            }
    
    
        default:
            return state;
    }
}