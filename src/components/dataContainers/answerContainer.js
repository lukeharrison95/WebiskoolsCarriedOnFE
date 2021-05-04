import React from 'react'
import { ListGroup } from 'react-bootstrap'

const AnswerContainer = (props) =>{
    if(props.question){
        return(
            <ListGroup horizontal>
                {props.question.answers.map(answer =>(
                    <ListGroup.Item>{answer.answer}</ListGroup.Item>
                ))}
            </ListGroup>
        )
    }
}
export default AnswerContainer;