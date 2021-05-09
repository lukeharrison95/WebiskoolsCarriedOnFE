import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Textfield from "@material-ui/core/Textfield";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { login } from "../../redux/actions/users/userActions";
import { Redirect } from 'react-router';


const LoginPage = () =>{

    const user = useSelector( (state) => state.users.currentUser)
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            login({
                username: username,
                password: password,
            })
        )
    }
    
    if(user){
        return <Redirect to="/" />
    } else{

        return(     
            <div>
                <Container>
                    <form onSubmit={handleSubmit}>
                    <Textfield
                        fullWidth
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        label="Username"
                        required
                        margin="normal"
                        variant="outlined"
                    />
                    <Textfield
                        fullWidth
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        required
                        margin="normal"
                        variant="outlined"
                    />
                        <Button
                        type="submit"
                        fullWidth
                        color="primary"
                        variant="contained"
                        >
                        Submit
                        </Button>
                    </form>
                </Container>
            </div>
        )

    }

    
}

export default LoginPage;