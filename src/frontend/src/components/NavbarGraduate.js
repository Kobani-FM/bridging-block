import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationGraduate() {
    return (
    	<div className="bg-danger col-auto col-md-3 col-xl-2 px-sm-2 px-0  min-vh-100 d-flex justify-content-between flex-column">
    		<div>
        		<ul class="nav nav-pills flex-column mt-3 mt-sm-0">
        			<li class="nav-item text-white fs-4 my-1">
        				<a href="/graduate/create-credential-request" class="nav-link text-white fs-6" aria-current="page">
        					<span className="ms-3 d-none d-sm-inline">Request Credential</span>
        				</a>
        			</li>
        			<li class="nav-item text-white fs-4 my-1">
        				<a href="/graduate/view-credential-requests" class="nav-link text-white fs-6" aria-current="page">
        					<span className="ms-3 d-none d-sm-inline">View Credential</span><br></br>
        					<span className="ms-3 d-none d-sm-inline">Requests</span>
        				</a>
        			</li>
        		</ul>
    		</div>
    	</div>
    );
}

export default NavigationGraduate;