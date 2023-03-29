import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

function MetaMaskConnect() {
    const [account, setAccount] = useState('');
    const [balance, setBalance] = useState('');

    const connectToMetaMask = async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.getAccounts();
                setAccount(accounts[0]);
                const etherBalance = await web3.eth.getBalance(accounts[0]);
                setBalance(web3.utils.fromWei(etherBalance, 'ether'));
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
        <div>
            <h2>MetaMask Wallet Information</h2>
            <p>Wallet Address: {account}</p>
            <p>Balance: {balance} ETH</p>
            {/* Add additional information here */}
        </div>
    );
}

export default MetaMaskConnect;
