import React from 'react'
import { useSelector } from 'react-redux'
import QuizCreationForm from '../general/quizCreationForm'

const CreatePage = () =>{
    

    const quiz = useSelector((state) => state.quizStore.selectedQuiz);
    return(
        
        <QuizCreationForm />
    )
}

export default CreatePage;