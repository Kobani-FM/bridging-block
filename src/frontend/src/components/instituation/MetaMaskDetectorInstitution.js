import React from 'react';
import MetaMaskConnectInstitution from './MetaMaskConnectInstitution';
import MetaMaskDetector from '../meta_mask/MetaMaskDetector';

function MetaMaskDetectorInstitution() {
    return (
        <MetaMaskDetector
            renderMetaMaskConnect={() => <MetaMaskConnectInstitution />}
        />
    );
}

export default MetaMaskDetectorInstitution;
