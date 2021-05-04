import React, { useState } from'react';
import { useSelector } from 'react-redux';
import NavBar from '../general/navbar';
import SelectedQuizContainer from '../dataContainers/selectedQuizContainer'


const ViewPage = () =>{
const quiz = useSelector((state) => state.quizStore.selectedQuiz);

    return(
        <div className="pages">
            <h3>Hey you are Viewing quiz {quiz.title} </h3>
            <SelectedQuizContainer quiz={quiz} />
        </div>
    )
}

export default ViewPage;