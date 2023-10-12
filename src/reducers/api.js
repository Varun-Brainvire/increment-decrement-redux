import { GET_USERS } from "../actions/actions";

const initialState = {
    users:[],
    //loading : false
}

const apiCall =  (state = initialState,action) => {
    console.log(action.type)
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                users:action.users,
                //loading:false
            }
        }
        default : return state
    }
}

export default apiCall