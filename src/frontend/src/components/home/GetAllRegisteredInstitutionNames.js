import React, { useState, useEffect } from 'react';
import SmartContractInteraction from '../contract/SmartContractInteraction'; // Import the component you created
import { Card, Container, Row, Col } from 'react-bootstrap';
import ContractABI from '../../constant/ContractABI.json';
import {contractAddress} from '../../constant/config';
function GetAllRegisteredInstitutionNames() {
    const [institutionNames, setInstitutionNames] = useState([]);

    useEffect(() => {
        const contractInstance = SmartContractInteraction.getContractInstance(contractAddress, ContractABI);
        async function fetchInstitutionNames() {
            try {
                const names = await contractInstance.methods.getAllRegisteredInstitutionNames().call();
                setInstitutionNames(names);
            } catch (error) {
                console.error('Error fetching institution names:', error);
            }
        }

        fetchInstitutionNames();
    }, []);

    return (
        <Container >
            <h2 className="mt-xxl-5">Registered Institutions</h2>
            <hr/>
            <Row className="justify-content-center">
                {institutionNames.map((name, index) => (
                    <Col key={index} md={6} className="mb-3 d-flex justify-content-center">
                        <Card style={{ width: '50%' }}>
                            <Card.Body className="text-center">
                                <Card.Title>{name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default GetAllRegisteredInstitutionNames;
