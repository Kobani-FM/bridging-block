package ca.sheridancollege.blockheads.bridgingblock.repositories;

import ca.sheridancollege.blockheads.bridgingblock.beans.Role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findRoleByName(String name);
}
