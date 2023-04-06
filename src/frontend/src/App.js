import './App.css';
import MetaMaskDetector from "./components/MetaMaskDetector";
import Navigation from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter  } from 'react-router-dom';
// import { Switch } from 'react-switch'
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

import { Route, Switch } from "react-router-dom";
import React from "react";
import Graduate from "./components/Graduate";

 const App = () =>
     (

         <BrowserRouter>
             <Navigation />
             <Switch>
                 <Route exact path="/" component={Home} />
                 <Route path="/about" component={About} />
                 <Route path="/services" component={Services} />
                 <Route path="/contact" component={Contact} />
                 <Route path="/create/graduate" component={Graduate} />
             </Switch>
         </BrowserRouter>
         // <div>
         //     <h1>Status of MetaMask on this browser</h1>
         //     <MetaMaskDetector/>
         // </div>

     )

export default App;
