package ca.sheridancollege.blockheads.bridgingblock.repositories;

import ca.sheridancollege.blockheads.bridgingblock.beans.Institution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstitutionRepository extends JpaRepository<Institution, Long> {
	
	Institution findInstitutionByName(String name);
	
}
