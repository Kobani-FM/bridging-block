import React, { useState, useEffect } from 'react';
import SmartContractInteraction from '../contract/SmartContractInteraction';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { contractAddress } from "../../constant/config"
import ContractABI from '../../constant/ContractABI.json';
import Web3 from 'web3';
function GetInstitutionInfo() {
    const [institutionInfo, setInstitutionInfo] = useState(null);
    const [account, setAccount] = useState(null);

    useEffect(() => {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            web3.eth.getAccounts().then(accounts => {
                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                    const contractInstance = SmartContractInteraction.getContractInstance(contractAddress, ContractABI);

                    async function fetchInstitutionInfo() {
                        try {
                            const institutionAddress = accounts[0];
                            const {name, isRegistered} = await contractInstance.methods.getInstitution(institutionAddress).call();

                            isRegistered? setInstitutionInfo({ name, isRegistered }):setInstitutionInfo({ name:"No name", isRegistered });
                        } catch (error) {
                            console.error('Error fetching institution info:', error);
                        }
                    }

                    fetchInstitutionInfo();
                }
            });
        }
    }, []);

    return (
        <Container className="mt-5">
            <h2 className="text-center">Institution Information</h2>
            {institutionInfo && account && (
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Card style={{ width: '50hv' }}>
                            <Card.Body className="text-center">
                                <Card.Title>Account: {account}</Card.Title>
                                <Card.Text>Institution Name: {institutionInfo.name}</Card.Text>
                                <Card.Text>Status: {institutionInfo.isRegistered ? 'Registered' : 'Not registered yet'}</Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
        </Container>
    );
}

export default GetInstitutionInfo;