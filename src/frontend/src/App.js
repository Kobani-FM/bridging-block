import './App.css';
import MetaMaskDetector from "./components/MetaMaskDetector";
import Navigation from "./components/Navbar";
import NavigationInstitution from "./components/NavbarInstitution";
import Home from "./components/Home";
import { BrowserRouter  } from 'react-router-dom';
// import { Switch } from 'react-switch'
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

import { Route, Switch } from "react-router-dom";
import React from "react";
import Graduate from "./components/Graduate";
import Institution from "./components/Institution";
import InstitutionViewStudent from "./components/InstitutionViewStudent";
import InstitutionViewRequest from "./components/InstitutionViewRequest";
import InstitutionAddCredential from "./components/InstitutionAddCredential";
import CredentialWallet from "./components/CredentialWallet";

 const App = () =>
     (

         <BrowserRouter>
             <Navigation />
             <Switch>
                 <Route exact path="/" component={Home} />
                 <Route path="/about" component={About} />
                 <Route path="/services" component={Services} />
                 <Route path="/contact" component={Contact} />
                 <Route exact path="/create/credential-wallet" component={Graduate} />
                 <Route exact path="/institution" component={Institution} />
                 <Route exact path="/institution/view-students" component={InstitutionViewStudent} />
                 <Route exact path="/institution/view-credential-requests" component={InstitutionViewRequest} />
                 <Route exact path="/institution/add-credential" component={InstitutionAddCredential} />
                 {/*<Route exact path="/requester" component={Requester} />*/}
                 <Route exact path="/create" component={MetaMaskDetector} />
                 <Route exact path="/access/credential-wallet" component={CredentialWallet} />
             </Switch>
         </BrowserRouter>
         // <div>
         //     <h1>Status of MetaMask on this browser</h1>
         //     <MetaMaskDetector/>
         // </div>

     )

export default App;
