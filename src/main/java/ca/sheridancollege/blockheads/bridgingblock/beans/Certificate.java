package ca.sheridancollege.blockheads.bridgingblock.beans;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Builder
public class Certificate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String institution;
    private Integer studentID;
    private Integer yearIssued;
    private Double gpa;
    //The credential wallet that this certificate is added to
    private String accountAddress;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinTable(name="CREDENTIAL_WALLET_CERTIFICATE")
    private CredentialWallet credentialWallet;
}
