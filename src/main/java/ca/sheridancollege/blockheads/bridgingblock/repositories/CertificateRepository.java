package ca.sheridancollege.blockheads.bridgingblock.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ca.sheridancollege.blockheads.bridgingblock.beans.Certificate;

@Repository
public interface CertificateRepository extends JpaRepository<Certificate, Long> {
    
}

