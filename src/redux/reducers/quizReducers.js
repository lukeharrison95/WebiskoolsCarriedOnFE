import {
    GET_QUIZ_LOADING,
    GET_QUIZ_SUCCESS,
    GET_QUIZ_FAILURE,
    GET_SINGLE_QUIZ,
    DELETE_QUIZ,
    DELETE_QUIZ_FAILURE
} from '../actions/quiz/quizTypes';

const initialState = {
    loading: false,
    quizzes: [],
    error:'',
    updateNeeded: false,
    selectedQuiz:{},
    deleteFailure: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUIZ_LOADING:
            return {
                ...state,
                loading: true,
                updateNeeded: false
            }
            
        case GET_QUIZ_SUCCESS:
            return{
                ...state,
                loading: false,
                quizzes: action.payload,
                error: ''
            }
        case GET_QUIZ_FAILURE:
            return{
                ...state,
                loading: false,
                quizzes: [],
                error: action.payload
            }
        case GET_SINGLE_QUIZ:
            return{
                ...state,
                selectedQuiz: action.payload
            }
        case DELETE_QUIZ:
            return{
                ...state,
                selectedQuiz:{},
                updateNeeded: true

            }
        case DELETE_QUIZ_FAILURE:
            return{
                ...state,
                deleteFailure: true
            }
    
        default: return state
    }
}

export default reducer