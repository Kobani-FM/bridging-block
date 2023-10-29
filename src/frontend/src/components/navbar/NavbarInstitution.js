import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthService from "../../services/AuthService";

const logOut = () => {
    AuthService.logout();
  };

function NavigationInstitution() {
    return (
    	<div className="bg-danger col-auto col-md-3 col-xl-2 px-sm-2 px-0  min-vh-100 d-flex justify-content-between flex-column">
    		<div>
        		<ul className="nav nav-pills flex-column mt-3 mt-sm-0">
        			<li className="nav-item text-white fs-4 my-1">
        				<a href="/institution/view-graduates" className="nav-link text-white fs-6" aria-current="page">
        					<span className="ms-3 d-none d-sm-inline">View Graduates</span>
        				</a>
        			</li>
        			<li className="nav-item text-white fs-4 my-1">
        				<a href="/ins-meta-wallet/view-credential-requests" className="nav-link text-white fs-6" aria-current="page">
        					<span className="ms-3 d-none d-sm-inline">View Credential</span><br></br>
        					<span className="ms-3 d-none d-sm-inline">Requests</span>
        				</a>
        			</li>
        			<li class="nav-item text-white fs-4 my-1">
        				<a href="/ins-meta-wallet" class="nav-link text-white fs-6" aria-current="page" onClick={logOut}>
        					<span className="ms-3 d-none d-sm-inline">Logout</span><br></br>
        				</a>
        			</li>
        		</ul>
    		</div>
    	</div>
    );
}

export default NavigationInstitution;