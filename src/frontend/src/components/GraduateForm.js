import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function GraduateForm() {
    const [graduateData, setGraduateData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        studentID: null
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setGraduateData({ ...graduateData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:8080/api/graduates", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(graduateData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                console.log("Graduate data posted successfully!");
            })
            .catch(error => {
                console.error("There was a problem posting the graduate data:", error);
            });
    };


    return (
        <div style={{ width: '50%' }}>
            <h2>Create a Credential Wallet</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstName" value={graduateData.firstName} onChange={handleInputChange} placeholder="Enter first name" />
                </Form.Group>
                <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" value={graduateData.lastName} onChange={handleInputChange} placeholder="Enter last name" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={graduateData.email} onChange={handleInputChange} placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formStudentID">
                    <Form.Label>Student ID</Form.Label>
                    <Form.Control type="number" name="studentID" value={graduateData.studentID} onChange={handleInputChange} placeholder="Enter student ID" />
                </Form.Group>
                <div className="text-center">
                    <Button variant="danger mt-5" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default GraduateForm;
