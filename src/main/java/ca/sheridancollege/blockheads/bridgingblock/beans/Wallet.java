package ca.sheridancollege.blockheads.bridgingblock.beans;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    private Double balance;

    public boolean isValidEthereumAddress(String _address) {
        this.address = _address;
        return WalletUtils.isValidAddress(address);
    }



}
