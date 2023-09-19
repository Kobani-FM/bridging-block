import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationInstitution() {
    return (
    	<div className="bg-danger col-auto col-md-3 col-xl-2 px-sm-2 px-0  min-vh-100 d-flex justify-content-between flex-column">
    		<div>
        		<ul class="nav nav-pills flex-column mt-3 mt-sm-0">
        			<li class="nav-item text-white fs-4 my-1">
        				<a href="/institution/view-students" class="nav-link text-white fs-6" aria-current="page">
        					<span className="ms-3 d-none d-sm-inline">View Graduates</span>
        				</a>
        			</li>
        			<li class="nav-item text-white fs-4 my-1">
        				<a href="/institution/view-credential-requests" class="nav-link text-white fs-6" aria-current="page">
        					<span className="ms-3 d-none d-sm-inline">View Credential</span><br></br>
        					<span className="ms-3 d-none d-sm-inline">Requests</span>
        				</a>
        			</li>
        			<li class="nav-item text-white fs-4 my-1">
        				<a href="/institution/add-credential" class="nav-link text-white fs-6" aria-current="page">
        					<span className="ms-3 d-none d-sm-inline">Add Credentials</span>
        				</a>
        			</li>
        		</ul>
    		</div>
    	</div>
    );
}

export default NavigationInstitution;