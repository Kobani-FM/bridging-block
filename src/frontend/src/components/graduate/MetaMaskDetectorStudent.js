import React from 'react';
import MetaMaskConnectStudent from './MetaMaskConnectStudent';
import MetaMaskDetector from '../meta_mask/MetaMaskDetector';

function MetaMaskDetectorStudent() {
    return (
        <MetaMaskDetector
            renderMetaMaskConnect={() => <MetaMaskConnectStudent />}
        />
    );
}

export default MetaMaskDetectorStudent;
