/* eslint-disable */
import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { ListGroup, Button } from 'react-bootstrap'
import { getSingleQuiz, deleteQuiz, getQuizzes } from '../../redux/actions/quiz/quizActions'
import { useHistory } from 'react-router-dom'


const QuizContainer = (props) => {
    
        const dispatch = useDispatch();
        const history = useHistory();

        function selectQuiz(id){
        dispatch(getSingleQuiz(id))
        console.log("hit me")
        history.push("/viewQuiz", {selectedQuiz:props.quizStore.selectedQuiz})        
    }
        function editQuiz(id){
        dispatch(getSingleQuiz(id))
        history.push("/editQuiz", {selectedQuiz:props.quizStore.selectedQuiz})        
    }

    function deleteSelectedQuiz(id){
        dispatch(deleteQuiz(id))    
    }

    if(props.quizStore.loading){
        return (<h2>Loading...</h2>);
    } else if(props.quizStore.quizzes.length > 0){
        return (
            <ListGroup >
            {props.quizStore.quizzes.map(quiz => (
                <ListGroup.Item key={quiz._id}  >
                    {quiz.title}
                    <Button variant= "outline-primary" onClick={(e)=>{e, selectQuiz(quiz._id)}}>View</Button>
                    <Button variant= "outline-success" onClick={(e)=>{e, editQuiz(quiz._id)}}>Edit</Button>
                    <Button variant= "outline-danger" onClick={(e)=>{e, deleteSelectedQuiz(quiz._id)}}>Delete</Button>
                </ListGroup.Item>
            ))}
        </ListGroup>)
    }else 
    return (<h2> No Quizzes</h2>);
            
}



export default QuizContainer;