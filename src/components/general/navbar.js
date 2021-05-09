import React from 'react';
import { Navbar, Button } from 'react-bootstrap'
import { useHistory } from 'react-router';

const NavBar = () => {

    const history = useHistory();
    function toCreatepage(){
        history.push("/createQuiz")
    };
    function toHomepage(){
        history.push("/")
    };

    return (
        <Navbar bg="light" expand="lg">

            <Navbar.Brand onClick={(e)=>{toHomepage()}}> QuizManager </Navbar.Brand>

            <Button variant="success" onClick={(e)=>{toCreatepage()}} >Create Quiz</Button>
            
        </Navbar>
    )
}

export default NavBar;