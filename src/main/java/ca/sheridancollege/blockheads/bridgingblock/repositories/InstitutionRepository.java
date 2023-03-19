package ca.sheridancollege.blockheads.bridgingblock.repositories;

import ca.sheridancollege.blockheads.bridgingblock.beans.Institution;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InstitutionRepository extends JpaRepository<Institution, Long> {
}
