import React, {useEffect, useState} from 'react';
import {Form, Button, Card, NavLink} from 'react-bootstrap';
import Web3 from "web3";
function GraduateForm() {
    const [account, setAccount] = useState('');
    const [graduateData, setGraduateData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        studentID: null,
        accountAddress:""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setGraduateData({ ...graduateData, [name]: value });
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

    //get the wallet address
    const getWalletAddress = async () => {

                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.getAccounts();
                setAccount(accounts[0]);

                // Add event listener for changes to accounts array
                window.ethereum.on('accountsChanged', async (newAccounts) => {
                    setAccount(newAccounts[0]);
                });
    };
    useEffect(() => {
        getWalletAddress();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        //add the selected address to accountAddress of the graduate
        setGraduateData({ ...graduateData, accountAddress: account });
        //post graduate data
        postData("http://localhost:8080/api/graduates", graduateData, "Graduate");
        //post the wallet address
        postData("http://localhost:8080/api/wallets", {address:account}, "Wallet");
        setTimeout(() => {
            postData("http://localhost:8080/api/credential-wallets", {accountAddress:account}, "Credential Wallet")
        }, 2000);
    };
    return (
        <div style={{ width: '50%' }}>
            <h2>Create a Credential Wallet</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstName" value={graduateData.firstName} onChange={handleInputChange} placeholder="Enter first name" required/>
                </Form.Group>
                <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" value={graduateData.lastName} onChange={handleInputChange} placeholder="Enter last name" required/>
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={graduateData.email} onChange={handleInputChange} placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group controlId="formStudentID">
                    <Form.Label>Student ID</Form.Label>
                    <Form.Control type="number" name="studentID" value={graduateData.studentID} onChange={handleInputChange} placeholder="Enter student ID" required />
                </Form.Group>
                <Form.Group controlId="formAccountAddress">
                    <Form.Label>Associated Address</Form.Label>
                    <Form.Control type="text" name="accountAddress" value={account}  disabled/>
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
