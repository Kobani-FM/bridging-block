import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function RequesterAccess() {
	
	const history = useHistory();
    
    const [wallet, setWallet] = useState({
        address: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setWallet({ ...wallet, [name]: value });
    };
    
    const verifyAccessKey = (wallet) => {
	    fetch("http://localhost:8080/api/graduates/account-address/" + wallet.address)
	      .then(response => {
	        return response.json();
	      })
	      .then(data => {
	        if (data != "") {
				history.push({ 
 					pathname: '/requester/view-credential',
 					state: {
						 address: wallet.address
					 }
				});
      			window.location.reload();
			}
	      })
	  };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        verifyAccessKey(wallet);

    };
    
    return (
		<div>
			<div className="container-fluid">
				<div className="row flex-nowrap">
					<div className="container d-flex justify-content-center align-items-center" style={{minHeight: '80vh', width: '75%' }}>
				        <div style={{ width: '50%' }}>
				            <h2>Graduate Credentials Access</h2>
				            <br></br>
				            <Form onSubmit={handleSubmit}>
				                <Form.Group controlId="formAddress">
				                    <Form.Label>Enter the access received from graduate</Form.Label>
				                    <Form.Control type="text" name="address" value={wallet.address} onChange={handleInputChange} placeholder="Enter access key" required/>
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

export default RequesterAccess;
