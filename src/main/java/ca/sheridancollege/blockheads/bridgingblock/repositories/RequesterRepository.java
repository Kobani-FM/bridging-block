package ca.sheridancollege.blockheads.bridgingblock.repositories;

import ca.sheridancollege.blockheads.bridgingblock.beans.Requester;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RequesterRepository extends JpaRepository<Requester, Long> {
}
