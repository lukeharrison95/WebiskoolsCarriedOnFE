import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "../actions/users/userTypes"

const initialState = {
    currentUser: null

}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                currentUser: action.payload.userId
            }
        case LOGIN_FAILURE:
            return{
                currentUser:null
            }
        default: return state
    }
}

export default reducer