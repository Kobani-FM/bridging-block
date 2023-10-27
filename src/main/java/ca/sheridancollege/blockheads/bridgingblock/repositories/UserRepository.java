package ca.sheridancollege.blockheads.bridgingblock.repositories;

import ca.sheridancollege.blockheads.bridgingblock.beans.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findUserByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}
