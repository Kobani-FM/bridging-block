import React, {useEffect, useState} from 'react';
import {Table} from 'react-bootstrap';
import './Institution.css';

function Institution() {
	
	const [graduates, setGraduates] = useState([])

  	const fetchData = () => {
	    fetch("http://localhost:8080/api/graduates")
	      .then(response => {
	        return response.json()
	      })
	      .then(data => {
	        setGraduates(data)
	      })
	  }
	
 	useEffect(() => {
    	fetchData()
  	}, [])
	
 	return (
	    //<div style={{ marginTop: '50px' }}>
	    <div>
	      <h2>View Graduates</h2>	
	      <Table striped bordered hover>
	      	<thead>
		        <tr>
		          <th>ID</th>
		          <th>First Name</th>
		          <th>Last Name</th>
		          <th>Email</th>
		          <th>Student ID</th>
		          <th>Wallet Address</th>
		        </tr>
      		</thead>
			<tbody>
		        {graduates.map(graduate => (
					<tr graduate={graduate}>
		              <td>{graduate.id}</td>
		              <td>{graduate.firstName}</td>
		              <td>{graduate.lastName}</td>
		              <td>{graduate.email}</td>
		              <td>{graduate.studentID}</td>
		              <td>{graduate.accountAddress}</td>
		            </tr>
				))}
	      	</tbody>
	      </Table>
    	</div>
  	)
}

export default Institution;