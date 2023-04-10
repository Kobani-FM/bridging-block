package ca.sheridancollege.blockheads.bridgingblock.beans;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.web3j.crypto.WalletUtils;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Builder
public class Wallet {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String address; //0x35dE11e7B59f0C48a44CdcEfF6CFe8dF1053f3a2
//    private Double balance;

//    @JsonIgnore
//    @OneToOne
//    @JoinTable(name = "WALLET_GRADUATE",
//            joinColumns = @JoinColumn(name = "WALLET_ID"),
//            inverseJoinColumns = @JoinColumn(name = "GRADUATE_ID"))
//    private Graduate graduate;

    @JsonIgnore
    public boolean isValidEthereumAddress() {
        return WalletUtils.isValidAddress(this.address);
    }



}
