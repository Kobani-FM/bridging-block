import React from 'react';
import MetaMaskConnect from "../meta_mask/MetaMaskConnect.js"
import GetAllRegisteredInstitutionNames from "../home/GetAllRegisteredInstitutionNames";

function MetaMaskConnectInstitution() {
    return (
        <div>
            <MetaMaskConnect isStudent={false} />
            <GetAllRegisteredInstitutionNames />
        </div>

    );
}

export default MetaMaskConnectInstitution;
