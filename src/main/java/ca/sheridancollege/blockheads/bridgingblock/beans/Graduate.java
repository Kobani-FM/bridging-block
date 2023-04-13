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
public class Graduate {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String email;
    private String accountAddress;

    @JsonIgnore
    @ManyToMany(fetch=FetchType.LAZY)
    @JoinTable(name="INSTITUTIONS_GRADUATES",
            joinColumns=@JoinColumn(name="GRADUATE_ID"),
            inverseJoinColumns=@JoinColumn(name="INSTITUTIONS_ID"))
    private List<Institution> institutions;


    @JsonIgnore
    public boolean isValidEthereumAddress() {
        return WalletUtils.isValidAddress(this.accountAddress);
    }

}
