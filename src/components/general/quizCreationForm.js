import React, { useState } from "react";
import { Forms, Button } from "react-bootstrap";
import { Container, TextField, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const QuizCreationForm = () =>{
    
    const [title, setTitle ] = useState("");
    const [questions, setQuestions] = useState([{question:"", answers:[{answer: "", correct: false}]},]);

    const handleQuestionChange = (index, e) => {
        console.log(index, e.target.name);
        const list = [...questions];
        list[index][e.target.name] = e.target.value; 
        setQuestions(list);
    };

    const handleTitleChange = (e) => {
        const { value } = e.target
        setTitle(value)
    }

    const handleRemoveQuestion = (e, index) => {
        const list = [...questions];
        list.splice(index, 1);
        setQuestions(list);
    };

    const handleAddQuestion = () => {
        setQuestions([...questions, {question:"", answers:[{answer: "", correct: false}]}]);
    };
    
    const handleAnswerChange = (i, e) => {
        console.log(i, e.target.name);
        
        // list[index][e.target.name] = e.target.value; 
        // setQuestions(list);
    };

    return(
        <Container>
            <form>
                <TextField variant='outlined' name='title' placeholder="type the quiz title here" value={title} onChange={e => handleTitleChange(e)} />
                { questions.map((question, index) =>{
                    return(
                        <div key={index}>
                            <em>{index + 1} . </em>
                            <TextField variant='outlined' name='question' placeholder="Type Question here" value={question.question} onChange={e => handleQuestionChange(index, e)} />
                            <IconButton onClick={e => handleAddQuestion()} ><AddIcon/></IconButton>
                            {questions.length > 1 && 
                            <IconButton  onClick={e => handleRemoveQuestion(e,index)}><RemoveIcon/></IconButton>}
                            <br/>
                            {question.answers.map((answer, i)=>{
                                return [
                                    
                                        <TextField variant='outlined' name='answer' placeholder="type answer here" value={answer.answer} onChange={e=> handleAnswerChange(i, e)} />
                                        
                                    
                                ]
                            })}
                        </div>
                    )
                })}
            </form>
        </Container>
    )



}

export default QuizCreationForm;