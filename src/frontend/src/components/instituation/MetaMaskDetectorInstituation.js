import React, { useState, useEffect } from 'react';
import MetaMaskConnectInstituation from "./MetaMaskConnectInstituation";

function MetaMaskCheck() {
    const [isSupportedBrowser, setIsSupportedBrowser] = useState(false);
    const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

    useEffect(() => {
        const userAgent = window.navigator.userAgent;
        const isChrome = /Chrome/.test(userAgent) && /Google Inc/.test(navigator.vendor);
        const isFirefox = typeof InstallTrigger !== 'undefined';
        const isBrave = /Brave/.test(userAgent);
        const isEdge = /Edg/.test(userAgent);
        const isOpera = /OPR/.test(userAgent);

        if (isChrome || isFirefox || isBrave || isEdge || isOpera) {
            setIsSupportedBrowser(true);
            const { ethereum } = window;
            if (ethereum && ethereum.isMetaMask) {
                setIsMetaMaskInstalled(true);
            }
        }
    }, []);

    const handleDownloadMetaMask = () => {
        window.open('https://metamask.io/');
    };

    return (
        <div>
            {isSupportedBrowser ? (
                isMetaMaskInstalled ? (
                    <MetaMaskConnectInstituation/>
                ) : (

                        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '80vh' }}>
                            <h3>MetaMask is not installed in your browser.</h3>
                            <div className="mt-3">
                                <button className="btn btn-outline-primary mx-3" style={{ padding: '15px 20px' }} onClick={handleDownloadMetaMask}>Download MetaMask</button>
                            </div>
                        </div>


                )
            ) : (
                <p>Your browser is not supported.</p>
            )}
        </div>
    );
}

export default MetaMaskCheck;
