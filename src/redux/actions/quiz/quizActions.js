import axios from 'axios';
import {
    GET_QUIZ_LOADING,
    GET_QUIZ_SUCCESS,
    GET_QUIZ_FAILURE,
    GET_SINGLE_QUIZ,
    DELETE_QUIZ
} from './quizTypes';

export const getQuizzes = () => {
    return (dispatch) => {
        dispatch(getQuizzesRequest())
        axios.get('/quizmaster/Quiz/getQuizzes')
        .then(
            response => {
                const quizStore = response.data
                dispatch(getQuizzesSuccess(quizStore))
            }
        )
        .catch(
            error => {
                dispatch(getQuizzesFailure(error.message))
            }
        )
    }
}

export const getQuizzesRequest = () => {
    return {
        type: GET_QUIZ_LOADING
    }
}

export const getQuizzesSuccess = quizStore => {
    return {
        type: GET_QUIZ_SUCCESS,
        payload: quizStore
    }
}

export const getQuizzesFailure = error => {
    return {
        type: GET_QUIZ_FAILURE,
        payload: error
    }
}

export const getSingleQuiz = (id) => {
    return (dispatch) =>{
        dispatch(getQuizzesRequest)
        axios.get('/quizmaster/Quiz/getQuiz/' + id)
        .then(
        response => {
            const selectedQuiz = response.data
            dispatch(getSingleQuizSuccess(selectedQuiz))
        }
    )
    }
};

export const getSingleQuizSuccess = selectedQuiz => {
    return {
        type: GET_SINGLE_QUIZ,
        payload: selectedQuiz
    }
}

export const deleteQuiz = (id) => {
    return (dispatch) => {
        axios.delete('/quizmaster/Quiz/deleteQuiz/' + id)
        .then(
            response => {
                console.log(response)
                if(response.data.deletedCount ===1){
                    dispatch(deleteQuizSuccess())
                }    
            }
        )
    }

}

export const deleteQuizSuccess = () =>{
    return{
        type: DELETE_QUIZ
    }
}