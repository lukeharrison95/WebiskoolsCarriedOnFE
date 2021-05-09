import axios from 'axios';
import {
    GET_QUIZ_LOADING,
    GET_QUIZ_SUCCESS,
    GET_QUIZ_FAILURE,
    GET_SINGLE_QUIZ,
    DELETE_QUIZ
} from './quizTypes';

export const getQuizzes = () =>  async(dispatch) => {
    try{
        const token = {
            headers:{
                Authorization: localStorage.getItem("token"), 
            },
        };
        const res = await axios.get('/quizmaster/getQuizzes', token);
        dispatch({
            type: GET_QUIZ_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_QUIZ_FAILURE,
            payload: err
        });
    };
}

export const getSingleQuiz = (id) =>  async(dispatch) => {
    try{
        const token = {
            headers:{
                Authorization: localStorage.getItem("token"), 
            },
        };
        const res = await axios.get('/quizmaster/getQuiz?id=' + id, token)
        dispatch({
            type: GET_SINGLE_QUIZ,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_QUIZ_FAILURE,
            payload: err
        });
    };
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