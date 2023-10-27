// Not imp: need to add its fun to SC

import React from 'react';
import SmartContractInteraction from '../contract/SmartContractInteraction';
import ContactABI from "../../constant/ContractABI.json";
import {contractAddress} from '../../constant/config';
function RegisterInstitution() {

    const registerInstitution = async () => {

        const contractInstance = SmartContractInteraction.getContractInstance(ContactABI,contractAddress);
        try {
            const tx = await contractInstance.methods.registerInstitution(
                'Institution Address',
                'Institution Name'
            ).send({ from: 'Ethereum Address' });

            console.log('Transaction Hash:', tx.transactionHash);
        } catch (error) {
            console.error('Error registering institution:', error);
        }
    };

    return (
        <div>
            <h2>Register an Institution</h2>
            <button onClick={registerInstitution}>Register</button>
        </div>
    );
}

export default RegisterInstitution;
