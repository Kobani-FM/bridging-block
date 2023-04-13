import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';

function CredentialWallet() {
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:8080/api/certificates');
                setCertificates(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return (
        <Row>
            {certificates.length > 0 ? (
                certificates.map((certificate) => (
                    <Col key={certificate.studentID}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{certificate.name}</Card.Title>
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

export default CredentialWallet;
