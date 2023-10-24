import './App.css';
import MetaMaskDetectorStudent from "./components/graduate/MetaMaskDetectorStudent";
import MetaMaskConnectInstitution from "./components/instituation/MetaMaskConnectInstituation";
import Navigation from "./components/navbar/Navbar";
import NavigationGraduate from "./components/navbar/NavbarGraduate";
import NavigationInstitution from "./components/navbar/NavbarInstitution";
import Home from "./components/Home";
import { BrowserRouter  } from 'react-router-dom';
// import { Switch } from 'react-switch'
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

import { Route, Switch, withRouter } from "react-router-dom";
import React from "react";
import Graduate from "./components/graduate/Graduate";
import CredentialRequestForm from "./components/graduate/GraduateRequestCredentialForm";
import GraduateViewCredentialRequest from "./components/graduate/GraduateViewCredentialRequest";
import Institution from "./components/instituation/Institution";
import InstitutionViewGraduate from "./components/instituation/InstitutionViewGraduate";
import InstitutionViewRequest from "./components/instituation/InstitutionViewRequest";
import InstitutionAddCredential from "./components/instituation/InstitutionAddCredential";
import CredentialWallet from "./components/graduate/CredentialWallet";
import MetaMaskDetectorInstituation from "./components/instituation/MetaMaskDetectorInstituation";

 const App = () =>
     (

         <React.StrictMode>
             <Navigation />
             <Switch>
                 <Route exact path="/" component={Home} />
                 <Route path="/about" component={About} />
                 <Route path="/services" component={Services} />
                 <Route path="/contact" component={Contact} />
                 <Route exact path="/create/credential-wallet" component={Graduate} />
                 <Route exact path="/graduate/create-credential-request" component={CredentialRequestForm} />
                 <Route exact path="/graduate/view-credential-requests" component={GraduateViewCredentialRequest} />

                 <Route exact path="/institution/view-graduates" component={InstitutionViewGraduate} />

                 <Route exact path="/institution/add-credential" component={withRouter(InstitutionAddCredential)} />
                 {/*<Route exact path="/requester" component={Requester} />*/}
                 <Route exact path="/grad-meta-wallet" component={MetaMaskDetectorStudent} />
                 <Route exact path="/ins-meta-wallet" component={MetaMaskConnectInstitution} />
                 <Route exact path="/access/credential-wallet" component={CredentialWallet} />
                 {/*<Route exact path="/ins-meta-wallet/ins-register" component={}/>*/}
                 <Route exact path="/ins-meta-wallet/ins-profile" component={Institution}/>
                 <Route exact path="/ins-meta-wallet/view-credential-requests" component={InstitutionViewRequest} />
                 {/*<Route exact path="/ins-meta-wallet/show-credential-request" component={}/>*/}

             </Switch>
         </React.StrictMode>
         // <div>
         //     <h1>Status of MetaMask on this browser</h1>
         //     <MetaMaskDetector/>
         // </div>

     )

export default App;
