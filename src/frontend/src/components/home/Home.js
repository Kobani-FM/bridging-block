import React from 'react';
import {NavLink} from "react-bootstrap";

function Home() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
                <div className="container">
                    <h1 className="text-center mb-5">Who are you?</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card bg-dark text-white mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">Graduate</h5>
                                    <p className="card-text">Create your credential wallet.</p>
                                    <NavLink href="/grad-meta-wallet" className="btn btn-danger" style={{width:'35%', padding:'8px'}}  >Get Started</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card bg-dark text-white mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">Institution</h5>
                                    <p className="card-text">Verify your graduates' certificates.</p>
                                    <NavLink href="/ins-meta-wallet" className="btn btn-danger" style={{width:'35%', padding:'8px'}}>Get Started</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card bg-dark text-white mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">Requester</h5>
                                    <p className="card-text">Request verification of a certificate.</p>
                                    <NavLink href="/requester" className="btn btn-danger" style={{width:'35%', padding:'8px'}}>Get Started</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
