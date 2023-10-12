const initialState = []

const changeNumber = (state=initialState,action) => {
    console.log(action.type, 'action type')
    switch(action.type) {
        
        case "INCREMENT":
            return state +5;
    
        case "DECREMENT":
            return state-1
            
        default : return state  

    }
}

// const showData = (state = initialState,action ) => {
//     console.log(action.type)

//     switch(action.type) {
//         case "USER_DATA":
//             return state.name
//         default:return state
//     }

// }

export default changeNumber