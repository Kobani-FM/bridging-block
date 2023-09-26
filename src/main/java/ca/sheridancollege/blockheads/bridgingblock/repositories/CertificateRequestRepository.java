package ca.sheridancollege.blockheads.bridgingblock.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ca.sheridancollege.blockheads.bridgingblock.beans.CertificateRequest;

import java.util.List;

@Repository
public interface CertificateRequestRepository extends JpaRepository<CertificateRequest, Long> {
    List<CertificateRequest> findCertificateRequestByAccountAddress(String address);
}

