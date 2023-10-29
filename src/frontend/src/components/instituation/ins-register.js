import React, { useState, useEffect } from 'react';
import SmartContractInteraction from '../contract/SmartContractInteraction';
import ContactABI from "../../constant/ContractABI.json";
import { contractAddress } from '../../constant/config';

function RegisterInstitution() {
    const [institutionName, setInstitutionName] = useState('');
    const [userAddress, setUserAddress] = useState('');

    useEffect(() => {
        if (typeof window.ethereum !== 'undefined') {
            window.ethereum
                .request({ method: 'eth_requestAccounts' })
                .then((accounts) => {
                    setUserAddress(accounts[0]);
                })
                .catch((error) => {
                    console.error('Error connecting to MetaMask:', error);
                });
        }
    }, []);

    const handleRegister = async () => {
        const contractInstance = SmartContractInteraction.getContractInstance(ContactABI, contractAddress);

        try {
            const tx = await contractInstance.methods.issuerRequest(
                userAddress,
                institutionName
            ).send({ from: userAddress });

            console.log('Transaction Hash:', tx.transactionHash);
        } catch (error) {
            console.error('Error registering institution:', error);
        }
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Request to be an issuer</h2>
                    <form>
                        <div className="form-group mb-3">
                            <label htmlFor="institutionAddress">Your Ethereum Address:</label>
                            <input
                                type="text"
                                id="institutionAddress"
                                className="form-control"
                                value={userAddress}
                                disabled
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="institutionName">Institution Name:</label>
                            <input
                                type="text"
                                id="institutionName"
                                className="form-control"
                                value={institutionName}
                                onChange={(e) => setInstitutionName(e.target.value)}
                            />
                        </div>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary" onClick={handleRegister}>
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterInstitution;
