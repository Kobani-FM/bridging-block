import './App.css';
import MetaMaskDetector from "./components/MetaMaskDetector";

 const App = () =>
     (
         <div>
             <h1>Status of MetaMask on this browser</h1>
             <MetaMaskDetector/>
         </div>
     )

export default App;
