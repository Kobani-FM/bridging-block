import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import {Form, Button, Card, NavLink} from 'react-bootstrap';
import AuthService from "../services/AuthService";

function Login() {
	
	const history = useHistory();
    
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    function handleLogin(user) {
        AuthService.login(user.username, user.password)
            .then(() => {
				history.push("/institution/view-graduates");
          		window.location.reload();
            })
            .catch(() => {
                console.error(`Invalid login credentials`);
            });
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();

        //post user login information
        handleLogin(user);

    };
    
    return (
		<div>
			<div className="container-fluid">
				<div className="row flex-nowrap">
					<div className="container d-flex justify-content-center align-items-center" style={{minHeight: '80vh', width: '75%' }}>
				        <div style={{ width: '50%' }}>
				            <h2>Login</h2>
				            <Form onSubmit={handleSubmit}>
				                <Form.Group controlId="formUsername">
				                    <Form.Label>Username</Form.Label>
				                    <Form.Control type="text" name="username" value={user.username} onChange={handleInputChange} placeholder="Enter username" required/>
				                </Form.Group>
				                <Form.Group controlId="formPassword">
				                    <Form.Label>Password</Form.Label>
				                    <Form.Control type="password" name="password" value={user.password} onChange={handleInputChange} placeholder="Enter password" required/>
				                </Form.Group>
				                <div className="text-center">
				                    <Button variant="danger mt-5" type="submit">
				                        Submit
				                    </Button>
				                </div>
				            </Form>
				            <br></br>
				        </div>
			        </div>
        		</div>
			</div>
		</div>
    );
}

export default Login;
