import React, {useEffect, useState} from 'react';
import {NavLink} from "react-bootstrap";
import {Table} from 'react-bootstrap';
import './TableView.css';
import NavigationInsitution from './NavbarInstitution';
import './Navbar.css';

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
	  
	function patchData(url, dataName) {
        fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: 'REJECTED' })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                console.log(` ${dataName} was rejected successfully!`);
            })
            .catch(error => {
                console.error(`There was a problem editing the ${dataName} data:`, error);
            });
    }
	
 	useEffect(() => {
    	fetchData()
  	}, [])
  	
  	const rejectRequest = requestId => event => {
        event.preventDefault();

        //change the status of the credential request to rejected 
        patchData("http://localhost:8080/api/certificate-requests/" + requestId, "Certificate Request");
        
        window.location.reload(false);
    };
	
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
								{certificateRequests.map((certificateRequest) => 
									certificateRequest.status === "PENDING" ? (
										<tr certificateRequest={certificateRequest}>
										<td>{certificateRequest.id}</td>
										<td>{certificateRequest.firstName}</td>
										<td>{certificateRequest.lastName}</td>
										<td>{certificateRequest.institution}</td>
										<td>{certificateRequest.studentId}</td>
										<td>{certificateRequest.graduationYear}</td>
										<td>{certificateRequest.program}</td>
										<td><NavLink href="#" className="btn btn-success btnRequest">
											Approve</NavLink></td>
										<td><NavLink href="href=/institution/view-credential-requests" 
											className="btn btn-danger btnRequest" onClick={rejectRequest(certificateRequest.id)}>
											Reject</NavLink></td>
										</tr>
									) : null
								)}
							</tbody>
						</Table>	
					</div>
				</div>
			</div>
		</div>
  	)
}

export default InstitutionViewRequest;
