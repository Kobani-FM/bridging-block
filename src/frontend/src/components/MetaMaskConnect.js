import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

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
        isConnected?
        <div>
            <h2>MetaMask Wallet Information</h2>
            <ul>
                <li>Wallet Address: <strong>{account}</strong></li><br/>
                <li>Balance: <strong>{balance} ETH</strong></li>
            </ul>
        </div>
            :<p>MetaMask is not connected</p>
    );
}

export default MetaMaskConnect;
