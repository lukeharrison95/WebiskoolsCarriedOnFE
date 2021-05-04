import React from 'react'
import { useSelector } from 'react-redux'


const EditPage = () =>{
    const quiz = useSelector((state) => state.quizStore.selectedQuiz);
    return(
        <h1>Hey, You are editing {quiz.title}</h1>
    )
}

export default EditPage;