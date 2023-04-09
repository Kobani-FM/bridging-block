package ca.sheridancollege.blockheads.bridgingblock.beans;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Builder
public class CredentialWallet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonIgnore
    @OneToMany(fetch=FetchType.LAZY, mappedBy = "credentialWallet", cascade = CascadeType.ALL)
    private List<Certificate> certificates;
/*
    @JsonIgnore
    @OneToOne
    @JoinTable(name = "CREDENTIAL_WALLET_WALLET",
            joinColumns = @JoinColumn(name = "CREDENTIAL_WALLET_ID"),
            inverseJoinColumns = @JoinColumn(name = "CREDENTIAL_WALLET_ID"))
    private Wallet wallet;

    @JsonIgnore
    @OneToOne
    @JoinTable(name = "CREDENTIAL_WALLET_GRADUATE",
            joinColumns = @JoinColumn(name = "CREDENTIAL_WALLET_ID"),
            inverseJoinColumns = @JoinColumn(name = "GRADUATE_ID"))
    private Graduate graduate;

 */
}
