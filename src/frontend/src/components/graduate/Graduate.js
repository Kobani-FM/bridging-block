import React from 'react';
import GraduateForm from "./GraduateForm";
import MetaMaskDetector from "./MetaMaskDetectorStudent";

function Graduate() {
    return (
        window.ethereum ?
            <div className="container d-flex justify-content-center align-items-center" style={{minHeight: '80vh'}}>
                <GraduateForm/>
            </div> : <MetaMaskDetector/>
    );
}

export default Graduate;
