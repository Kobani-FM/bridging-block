import React from 'react';
import Web3 from 'web3';
import ContractABI from '../../constant/ContractABI.json';
import {contractAddress} from "../../constant/config"


const web3 = new Web3(window.ethereum);
const contractInstance = new web3.eth.Contract(ContractABI, contractAddress);
function getContractInstance() {
    return contractInstance;
}

export default {
    getContractInstance,
};



























// function SmartContractInteraction({ contractAddress, contractAbi }) {
//     const [web3, setWeb3] = useState(null);
//     const [contract, setContract] = useState(null);
//     const [account, setAccount] = useState('');
//
//     useEffect(() => {
//         async function initWeb3() {
//             if (window.ethereum) {
//                 try {
//                     await window.ethereum.request({ method: 'eth_requestAccounts' });
//                     const web3Instance = new Web3(window.ethereum);
//                     setWeb3(web3Instance);
//
//                     const accounts = await web3Instance.eth.getAccounts();
//                     setAccount(accounts[0]);
//
//                     const contractInstance = new web3Instance.eth.Contract(contractAbi, contractAddress);
//                     setContract(contractInstance);
//                 } catch (err) {
//                     console.error(err);
//                 }
//             } else {
//                 console.error('Please install MetaMask!');
//             }
//         }
//
//         initWeb3();
//     }, [contractAddress, contractAbi]);
//
//     // Add your smart contract interaction logic here
//
//     return (
//         <div>
//             {/* Your smart contract interaction UI and logic can go here */}
//         </div>
//     );
// }
//
// export default SmartContractInteraction;
