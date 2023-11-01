import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';
import Web3 from "web3";

function RequesterViewCredential() {
    const [certificates, setCertificates] = useState([]);

    /*useEffect(() => {
        async function fetchData() {
            try {
				//Access key from the RequesterAccess page will be passed to this function?
				//Address that was tied to the access key entered on the RequesterAccess page is passed here
                const response = await axios.get('http://localhost:8080/api/certificates/account/' + address);
                setCertificates(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);*/

    return (
        <Row>
            {certificates.length > 0 ? (
                certificates.map((certificate) => (
                    <Col key={certificate.studentID}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{certificate.program}</Card.Title>
                                <Card.Text>
                                    <strong>Name: </strong>
                                    {certificate.firstName}
                                    <span> </span>
                                    {certificate.lastName}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Institution: </strong>
                                    {certificate.institution}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Student ID: </strong>
                                    {certificate.studentID}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Year Issued: </strong>
                                    {certificate.yearIssued}
                                </Card.Text>
                                <Card.Text>
                                    <strong>GPA: </strong>
                                    {certificate.gpa}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            ) : (
                <p>No certificates found.</p>
            )}
        </Row>
    );
}

export default RequesterViewCredential;
