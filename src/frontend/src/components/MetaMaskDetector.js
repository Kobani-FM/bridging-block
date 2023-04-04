import React, { useState, useEffect } from 'react';
import MetaMaskConnect from './MetaMaskConnect';
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
                    <MetaMaskConnect/>
                ) : (
                    <div>
                        <p>MetaMask is not installed in your browser.</p>
                        <button onClick={handleDownloadMetaMask}>Download MetaMask</button>
                    </div>
                )
            ) : (
                <p>Your browser is not supported.</p>
            )}
        </div>
    );
}

export default MetaMaskCheck;
