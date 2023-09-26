import React, {useEffect, useState} from 'react';
import {Form, Button, Card, NavLink} from 'react-bootstrap';
import Web3 from "web3";
function GraduateRequestCredentialForm() {
	
    const [credentialRequest, setCredentialRequestData] = useState({
        firstName: "",
        lastName: "",
        institution: "",
        studentId: "",
        graduationYear: "",
        program: "",
        accountAddress:""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCredentialRequestData({ ...credentialRequest, [name]: value });
    };

    function postData(url, data, dataName) {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                console.log(` ${dataName} posted successfully!`);
            })
            .catch(error => {
                console.error(`There was a problem posting the ${dataName} data:`, error);
            });
    }

    //set the first name, last name and wallet address fields if the wallet address exists in the database
    const getGraduateData = async () => {

                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.getAccounts();
                //setGraduateData({ ...graduateData, accountAddress: accounts[0] });
                const address = accounts[0];
                fetch("http://localhost:8080/api/graduates/account-address/" + address)
	      			.then(response => {
	        			return response.json()
	      			})
	      			.then(data => {
	        			setCredentialRequestData({ ...credentialRequest, firstName: data.firstName, 
	        							lastName: data.lastName, accountAddress: data.accountAddress });
	      			})
                // Add event listener for changes to accounts array
                window.ethereum.on('accountsChanged', async (newAccounts) => {
                //setGraduateData({ ...graduateData, accountAddress: accounts[0] });
                const address = accounts[0];
                fetch("http://localhost:8080/api/graduates/account-address/" + address)
	      			.then(response => {
	        			return response.json()
	      			})
	      			.then(data => {
	        			setCredentialRequestData({ ...credentialRequest, firstName: data.firstName, 
	        							lastName: data.lastName, accountAddress: data.accountAddress });
	      			})
                });
    };
    
    
    useEffect(() => {
        getGraduateData();
    }, []);
    
    const handleSubmit = (event) => {
        event.preventDefault();

        //post credential request information
        postData("http://localhost:8080/api/certificate-requests", credentialRequest, "Credential Request");

    };
    return (
		<div className="container d-flex justify-content-center align-items-center" style={{minHeight: '80vh'}}>
	        <div style={{ width: '50%' }}>
	            <h2>Request a Credential</h2>
	            <Form onSubmit={handleSubmit}>
	                <Form.Group controlId="formFirstName">
	                    <Form.Label>First Name</Form.Label>
	                    <Form.Control type="text" name="firstName" value={credentialRequest.firstName} disabled/>
	                </Form.Group>
	                <Form.Group controlId="formLastName">
	                    <Form.Label>Last Name</Form.Label>
	                    <Form.Control type="text" name="lastName" value={credentialRequest.lastName} disabled/>
	                </Form.Group>
	                <Form.Group controlId="formInstitution">
	                    <Form.Label>Institution</Form.Label>
	                    <Form.Control type="text" name="institution" value={credentialRequest.institution} onChange={handleInputChange} placeholder="Enter institution" required/>
	                </Form.Group>
	                <Form.Group controlId="formStudentId">
	                    <Form.Label>Student ID</Form.Label>
	                    <Form.Control type="number" name="studentId" value={credentialRequest.studentId} onChange={handleInputChange} placeholder="Enter student ID" required/>
	                </Form.Group>
	                <Form.Group controlId="formGraduationYear">
	                    <Form.Label>Certificate Graduation Year</Form.Label>
	                    <Form.Control type="number" name="graduationYear" value={credentialRequest.graduationYear} onChange={handleInputChange} placeholder="Enter graduation year" required/>
	                </Form.Group>
	                <Form.Group controlId="formProgram">
	                    <Form.Label>Certificate Program</Form.Label>
	                    <Form.Control type="text" name="program" value={credentialRequest.program} onChange={handleInputChange} placeholder="Enter program" required/>
	                </Form.Group>
	                <Form.Group controlId="formAccountAddress">
	                    <Form.Label>Associated Address</Form.Label>
	                    <Form.Control type="text" name="accountAddress" value={credentialRequest.accountAddress}  disabled/>
	                </Form.Group>
	                <div className="text-center">
	                    <Button variant="danger mt-5" type="submit">
	                        Submit
	                    </Button>
	                </div>
	            </Form>
	        </div>
        </div>
    );
}

export default GraduateRequestCredentialForm;