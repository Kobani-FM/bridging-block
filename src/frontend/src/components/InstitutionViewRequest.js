import React, {useEffect, useState} from 'react';
import {NavLink} from "react-bootstrap";
import {Table} from 'react-bootstrap';
import './Institution.css';
import NavigationInsitution from './NavbarInstitution';
import './NavbarInstitution.css';

function InstitutionViewRequest() {
	
	const [certificateRequests, setCertificateRequests] = useState([])

  	const fetchData = () => {
	    fetch("http://localhost:8080/api/certificate-requests")
	      .then(response => {
	        return response.json()
	      })
	      .then(data => {
	        setCertificateRequests(data)
	      })
	  }
	
 	useEffect(() => {
    	fetchData()
  	}, [])
	
 	return (
		//<div style={{ marginTop: '50px' }}>
		<div>
			<div className="container-fluid">
				<div className="row flex-nowrap">
					<NavigationInsitution/>
					<div class="col py-3">
						<h2>View Credential Requests</h2>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>ID</th>
									<th>First Name</th>
									<th>Last Name</th>
									<th>Institution</th>
									<th>Student ID</th>
									<th>Graduation Year</th>
									<th>Program</th>
									<th></th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{certificateRequests.map(certificateRequest => (
									<tr certificateRequest={certificateRequest}>
										<td>{certificateRequest.id}</td>
										<td>{certificateRequest.firstName}</td>
										<td>{certificateRequest.lastName}</td>
										<td>{certificateRequest.institution}</td>
										<td>{certificateRequest.studentId}</td>
										<td>{certificateRequest.graduationYear}</td>
										<td>{certificateRequest.program}</td>
										<td><NavLink href="#" className="btn btn-success">Approve</NavLink></td>
										<td><NavLink href="#" className="btn btn-danger">Deny</NavLink></td>
									</tr>
								))}
							</tbody>
						</Table>	
					</div>
				</div>
			</div>
		</div>
  	)
}

export default InstitutionViewRequest;
