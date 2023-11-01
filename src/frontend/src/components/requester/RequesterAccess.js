import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

function RequesterAccess() {
    
    const [wallet, setWallet] = useState({
        accessKey: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setWallet({ ...wallet, [name]: value });
    };

    function verifyAccessKey(wallet) {
		
		//Use the access key entered by the requester to verify access to graduate's wallet
		//Then navigate to the RequestViewCredential page to allow requester to view graduate's credentials
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();

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
				                <Form.Group controlId="formAccessKey">
				                    <Form.Label>Enter the access key received from graduate</Form.Label>
				                    <Form.Control type="text" name="accessKey" value={wallet.accessKey} onChange={handleInputChange} placeholder="Enter access key" required/>
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
