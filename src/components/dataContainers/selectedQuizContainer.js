import React from 'react'
import {ListGroup, Card } from 'react-bootstrap'
import AnswerContainer from './answerContainer'

const SelectedQuizContainer = (props) =>{
    if(props.quiz.questions){    
        console.log(props.quiz.questions)   
        return(
            <Card style={{ width: '18rem' }}>
                <ListGroup defaultActiveKey>
                    {props.quiz.questions.map(question => (
                        <div>
                        <ListGroup.Item>{question.question}</ListGroup.Item>
                        <AnswerContainer question={question}/>
                        </div>
                    ))}
                </ListGroup>
            </Card>
        )
    }
    else {
        
        return(<h2> NOOOO :( </h2>)
    }
    
    
}
export default SelectedQuizContainer