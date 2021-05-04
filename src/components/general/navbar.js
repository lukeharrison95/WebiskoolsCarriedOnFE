import React from 'react';
import { Navbar, Button } from 'react-bootstrap'
import { useHistory } from 'react-router';

const NavBar = () => {

    const history = useHistory();
    function toCreatepage(){
        history.push("/createQuiz")
    };

    return (
        <Navbar bg="light" expand="lg">

            <Navbar.Brand href="/"> QuizManager </Navbar.Brand>

            <Button variant="success" href="/createQuiz" >Create Quiz</Button>
            
        </Navbar>
    )
}

export default NavBar;