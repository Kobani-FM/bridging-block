import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <div className="container">
                <h1 className="text-center mb-5">Who are you?</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card bg-dark text-white mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Graduate</h5>
                                <p className="card-text">Create your graduation certificate.</p>
                                <Link to="/create/graduate" className="btn btn-light">Get Started</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-dark text-white mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Institution</h5>
                                <p className="card-text">Verify your graduates' certificates.</p>
                                <Link to="/institution" className="btn btn-light">Get Started</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-dark text-white mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Requester</h5>
                                <p className="card-text">Request verification of a certificate.</p>
                                <Link to="/requester" className="btn btn-light">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

//
// function Home() {
//     return (
//
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
//
//             <ul>
//                 <li>
//                     <Link to="/create/graduate">Graduate</Link>
//                 </li>
//                 <li>
//                     <Link to="/institution">Institution</Link>
//                 </li>
//                 <li>
//                     <Link to="/requester">Requester</Link>
//                 </li>
//             </ul>
//         </div>
//     );
// }