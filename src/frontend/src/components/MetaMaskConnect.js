import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import {Button, Card, NavLink} from "react-bootstrap";

function MetaMaskConnect() {
    const [account, setAccount] = useState('');
    const [balance, setBalance] = useState('');
    const [isConnected, setIsConnected] = useState(false);

    const connectToMetaMask = async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.getAccounts();
                setAccount(accounts[0]);
                const etherBalance = await web3.eth.getBalance(accounts[0]);
                setBalance(web3.utils.fromWei(etherBalance, 'ether'));
                setIsConnected(true);

                // Add event listener for changes to accounts array
                window.ethereum.on('accountsChanged', async (newAccounts) => {
                    setAccount(newAccounts[0]);
                    const etherBalance = await web3.eth.getBalance(newAccounts[0]);
                    setBalance(web3.utils.fromWei(etherBalance, 'ether'));
                });
            } catch (err) {
                console.error(err);
            }
        } else {
            console.error('Please install MetaMask!');
        }
    };

    useEffect(() => {
        connectToMetaMask();
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
            <Card className="text-center">
                <Card.Header>
                    <h2>MetaMask Wallet Information</h2>
                </Card.Header>
                <Card.Body>
                    {isConnected ? (
                        <>
                            <Card.Text>Wallet Address: <strong>{account}</strong></Card.Text>
                            <Card.Text>Balance: <strong>{balance} ETH</strong></Card.Text>
                            <div className="btn btn-outline-primary mx-3" style={{width:'35%', padding:'8px'}} >
                            <NavLink href="/create/graduate"  >Create wallet</NavLink>
                            </div>
                            <div className="btn btn-outline-primary mx-3" style={{width:'35%', padding:'8px'}} >
                                <NavLink href="/access/graduate"  >Access wallet</NavLink>
                            </div>
                        </>
                    ) : (
                        <p>MetaMask is not connected</p>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
}

export default MetaMaskConnect;


