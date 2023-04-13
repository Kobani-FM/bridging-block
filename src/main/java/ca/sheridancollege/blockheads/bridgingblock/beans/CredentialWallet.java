package ca.sheridancollege.blockheads.bridgingblock.beans;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.web3j.crypto.WalletUtils;

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
    private String accountAddress;
    @JsonIgnore
    @OneToMany(fetch=FetchType.LAZY, mappedBy = "credentialWallet", cascade = CascadeType.ALL)
    private List<Certificate> certificates;

    @JsonIgnore
    //@OneToOne(cascade = CascadeType.ALL)
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinTable(name = "CREDENTIAL_WALLET_WALLET",
            joinColumns = @JoinColumn(name = "CREDENTIAL_WALLET_ID"),
            inverseJoinColumns = @JoinColumn(name = "WALLET_ID"))
    private Wallet wallet;

    @JsonIgnore
    //@OneToOne(cascade = CascadeType.ALL)
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinTable(name = "CREDENTIAL_WALLET_GRADUATE",
            joinColumns = @JoinColumn(name = "CREDENTIAL_WALLET_ID"),
            inverseJoinColumns = @JoinColumn(name = "GRADUATE_ID"))
    private Graduate graduate;

    @JsonIgnore
    public boolean isValidEthereumAddress() {
        return WalletUtils.isValidAddress(this.accountAddress);
    }
}
