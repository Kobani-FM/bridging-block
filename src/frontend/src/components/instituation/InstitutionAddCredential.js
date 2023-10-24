import React, {useEffect, useState} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import {Form, Button } from 'react-bootstrap';

import NavigationInsitution from '../navbar/NavbarInstitution';
import '../navbar/Navbar.css';

function InstitutionAddCredential() {
	
	let yearsIssued = [];
	const currentYear = new Date().getFullYear();
    for (let i = 1970; i <= currentYear; i++){
		yearsIssued.push(<option value={i} key={i}>{i}</option>)
    }
	
	const location = useLocation();
	const history = useHistory();
	const [credentialRequest, setCredentialRequestData] = useState({});
    const [credential, setCredentialData] = useState({
        firstName: "",
        lastName: "",
        program: "",
        institution: "",
        studentID: "",
        yearIssued: "",
        gpa: "",
        accountAddress: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCredentialData({ ...credential, [name]: value });
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
    
    function patchData(url, dataName) {
        fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: 'APPROVED' })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                console.log(` ${dataName} was approved successfully!`);
            })
            .catch(error => {
                console.error(`There was a problem editing the ${dataName} data:`, error);
            });
    }

    const getCertificateRequestData = () => {
	    fetch("http://localhost:8080/api/certificate-requests/" + location.state.id)
	      .then(response => {
	        return response.json()
	      })
	      .then(data => {
	        setCredentialRequestData(data)
	        setCredentialData({ ...credential, firstName: data.firstName, lastName: data.lastName, 
	        							program: data.program, institution: data.institution, 
	        							studentID: data.studentId, accountAddress: data.accountAddress});
	      })
	  }
    
    useEffect(() => {
        getCertificateRequestData();
    }, []);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        //change the status of the credential request to approved
        patchData("http://localhost:8080/api/certificate-requests/" + credentialRequest.id, "Certificate Request");

        //post a new certificate
        postData("http://localhost:8080/api/certificates", credential, "Credential");
        
        history.push("/institution/view-credential-requests");

    };
	
 	return (
		//<div style={{ marginTop: '50px' }}>
		<div>
			<div className="container-fluid">
				<div className="row flex-nowrap">
					<NavigationInsitution/>
					<div className="container d-flex justify-content-center align-items-center" style={{minHeight: '80vh', width: '75%' }}>
				        <div style={{ width: '50%' }}>
				            <h2>Add Credential</h2>
				            <Form onSubmit={handleSubmit}>
				                <Form.Group controlId="formFirstName">
				                    <Form.Label>First Name</Form.Label>
				                    <Form.Control type="text" name="firstName" value={credentialRequest.firstName} disabled/>
				                </Form.Group>
				                <Form.Group controlId="formLastName">
				                    <Form.Label>Last Name</Form.Label>
				                    <Form.Control type="text" name="lastName" value={credentialRequest.lastName} disabled/>
				                </Form.Group>
				                <Form.Group controlId="formProgram">
				                    <Form.Label>Certificate Program</Form.Label>
				                    <Form.Control type="text" name="program" value={credentialRequest.program} disabled/>
				                </Form.Group>
				                <Form.Group controlId="formInstitution">
				                    <Form.Label>Institution</Form.Label>
				                    <Form.Control type="text" name="institution" value={credentialRequest.institution} disabled/>
				                </Form.Group>
				                <Form.Group controlId="formStudentId">
				                    <Form.Label>Student ID</Form.Label>
				                    <Form.Control type="number" name="studentId" value={credentialRequest.studentId} disabled/>
				                </Form.Group>
				                <Form.Group controlId="formYearIssued">
				                    <Form.Label>Year Issued</Form.Label>
				                    <Form.Select name="yearIssued" value={credential.yearIssued} onChange={handleInputChange} required>
				                    	<option>Select the year this certificate was issued</option>
				                    	{yearsIssued}
								    </Form.Select>
				                </Form.Group>
				                <Form.Group controlId="formGPA">
				                    <Form.Label>GPA</Form.Label>
				                    <Form.Control type="number" name="gpa" value={credential.gpa} onChange={handleInputChange} placeholder="Enter graduate's GPA" required/>
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
				            <br></br>
				        </div>
			        </div>
				</div>
			</div>
		</div>
  	)
}

export default InstitutionAddCredential;
