import React, { useState, useEffect } from "react";

const MetaMaskDetector = () => {
    const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

    useEffect(() => {
        const checkMetaMask = async () => {
            const isInstalled = typeof window.ethereum !== "undefined";
            setIsMetaMaskInstalled(isInstalled);
        };
        checkMetaMask();
    }, []);

    const handleInstallMetaMask = () => {
        window.open("https://metamask.io/download.html", "_blank");
    };

    return (
        <div>
            {isMetaMaskInstalled ? (
                <p>MetaMask is installed on this browser.</p>
            ) : (
                <div>
                    <p>MetaMask is not installed on this browser.</p>
                    <button onClick={handleInstallMetaMask}>Install MetaMask</button>
                </div>
            )}
        </div>
    );
};

export default MetaMaskDetector;
