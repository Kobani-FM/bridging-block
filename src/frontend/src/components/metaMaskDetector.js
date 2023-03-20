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

    return (
        <div>
            {isMetaMaskInstalled ? (
                <p>MetaMask is installed on this browser.</p>
            ) : (
                <p>MetaMask is not installed on this browser.</p>
            )}
        </div>
    );
};

export default MetaMaskDetector;
