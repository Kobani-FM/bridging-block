import React, {useEffect, useState} from 'react';
import {Table} from 'react-bootstrap';
import './TableView.css';
import NavigationGraduate from './NavbarGraduate';
import './Navbar.css';
import Web3 from "web3";

function GraduateViewRequest() {
	
	const [certificateRequests, setCertificateRequests] = useState([])

  	const fetchData = async () => {
		
		await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const address = accounts[0];  
		  
	    fetch("http://localhost:8080/api/certificate-requests/account-address/" + address)
	      .then(response => {
	        return response.json()
	      })
	      .then(data => {
	        setCertificateRequests(data)
	      })
	  }
	  
	const setRowColour = (status) => {
    	if (status === "PENDING") return '#CCCC00';
    	if (status === "APPROVED") return 'green';
    	return 'red';
	};
	
 	useEffect(() => {
    	fetchData()
  	}, [])
	
 	return (
		//<div style={{ marginTop: '50px' }}>
		<div>
			<div className="container-fluid">
				<div className="row flex-nowrap">
					<NavigationGraduate/>
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
									<th>Status</th>
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
										<td style={{ color: setRowColour(certificateRequest.status) }}>
											{certificateRequest.status}
										</td>
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

export default GraduateViewRequest;
