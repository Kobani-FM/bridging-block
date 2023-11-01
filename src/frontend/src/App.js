import './App.css';
import MetaMaskDetectorStudent from "./components/graduate/MetaMaskDetectorStudent";
import Navigation from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Login1 from "./components/Login1";
import Login2 from "./components/Login2";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import React from "react";
import Graduate from "./components/graduate/Graduate";
import CredentialRequestForm from "./components/graduate/GraduateRequestCredentialForm";
import GraduateViewCredentialRequest from "./components/graduate/GraduateViewCredentialRequest";
import Institution from "./components/instituation/Institution";
import InstitutionViewGraduate from "./components/instituation/InstitutionViewGraduate";
import InstitutionViewRequest from "./components/instituation/InstitutionViewRequest";
import InstitutionAddCredential from "./components/instituation/InstitutionAddCredential";
import CredentialWallet from "./components/graduate/CredentialWallet";
import MetaMaskDetectorInstitution from "./components/instituation/MetaMaskDetectorInstitution";
import RegisterInstitution from "./components/instituation/ins-register";
import RequesterAccess from "./components/requester/RequesterAccess";
import RequesterViewCredential from "./components/requester/RequesterViewCredential";

 const App = () =>
     (

         <React.StrictMode>
             <Navigation />
             <Switch>
                 <Route exact path="/" component={Home} />
                 <Route path="/about" component={About} />
                 <Route path="/services" component={Services} />
                 <Route path="/contact" component={Contact} />
                 <Route exact path="/login1">
  					{localStorage.getItem("user") ? <Redirect to="/ins-meta-wallet/ins-profile" /> : <Route path="/login1" component={Login1} />}
				 </Route>
				 <Route exact path="/login2">
  					{localStorage.getItem("user") ? <Redirect to="/ins-meta-wallet/view-credential-requests" /> : <Route path="/login2" component={Login2} />}
				 </Route>
                 <Route exact path="/create/credential-wallet" component={Graduate} />
                 <Route exact path="/graduate/create-credential-request" component={CredentialRequestForm} />
                 <Route exact path="/graduate/view-credential-requests" component={GraduateViewCredentialRequest} />

                 <Route exact path="/institution/view-graduates" component={InstitutionViewGraduate} />

                 <Route exact path="/institution/add-credential" component={withRouter(InstitutionAddCredential)} />
                 {/*<Route exact path="/requester" component={Requester} />*/}
                 <Route exact path="/grad-meta-wallet" component={MetaMaskDetectorStudent} />
                 <Route exact path="/ins-meta-wallet" component={MetaMaskDetectorInstitution} />
                 <Route exact path="/access/credential-wallet" component={CredentialWallet} />
                 <Route exact path="/ins-meta-wallet/ins-register" component={RegisterInstitution}/>
                 <Route exact path="/ins-meta-wallet/ins-profile" component={Institution}/>
                 <Route exact path="/ins-meta-wallet/view-credential-requests" component={InstitutionViewRequest} />
                 {/*<Route exact path="/ins-meta-wallet/show-credential-request" component={}/>*/}
                 <Route exact path="/requester/access-credential" component={RequesterAccess} />
                 <Route exact path="/requester/view-credential" component={RequesterViewCredential} />
             </Switch>
         </React.StrictMode>

     )

export default App;
