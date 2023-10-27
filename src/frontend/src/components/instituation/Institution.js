
import '../TableView.css';
import NavigationInsitution from '../navbar/NavbarInstitution';
import InstitutionProfile from "./InstitutionProfile";
import React from "react";

function Institution() {
	
 	return (
		<div>
			<div className="container-fluid">
				<div className="row flex-nowrap">
					<NavigationInsitution/>
					<div className="col py-3">
						<InstitutionProfile/>
		 			</div>
				</div>
			</div>
		</div>

  	)
}

export default Institution;