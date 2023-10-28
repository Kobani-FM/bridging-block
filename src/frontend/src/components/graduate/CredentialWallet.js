import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';
import Web3 from "web3";

function CredentialWallet() {
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
				await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.getAccounts();
                const address = accounts[0];
                const response = await axios.get('http://localhost:8080/api/certificates/account/' + address);
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

export default CredentialWallet;
