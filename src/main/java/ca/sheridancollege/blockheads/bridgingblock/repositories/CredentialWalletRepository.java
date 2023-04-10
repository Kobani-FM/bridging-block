package ca.sheridancollege.blockheads.bridgingblock.repositories;

import ca.sheridancollege.blockheads.bridgingblock.beans.CredentialWallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CredentialWalletRepository extends JpaRepository<CredentialWallet, Long> {
    CredentialWallet findCredentialWalletByAccountAddress(String address);
}
