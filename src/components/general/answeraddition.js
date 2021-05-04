import React, { useState } from "react";
import { Forms, Button } from "react-bootstrap";
import { Container, TextField, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { render } from "react-dom";

const AnswerAddition = (props) => {
    let answer = props.answer
    let index = props.index
    const handleAnswerChange = (e, index) => {
        console.log(index, e.target)
    }
    return(
        
            <TextField variant='outlined' name='answer' placeholder="type answer here" value={answer.answer} onChange={e=> handleAnswerChange(index, e)} />
                                        
         

    )
}

export default AnswerAddition;