package ca.sheridancollege.blockheads.bridgingblock.beans;

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
public class Graduate {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String email;
    private Integer StudentID;

    @OneToOne
    @JoinTable(name = "GRADUATE_WALLET",
            joinColumns = @JoinColumn(name = "GRADUATE_ID"),
            inverseJoinColumns = @JoinColumn(name = "WALLET_ID"))
    private Wallet wallet;


    @ManyToMany(fetch=FetchType.LAZY)
    @JoinTable(name="INSTITUTIONS_GRADUATES",
            joinColumns=@JoinColumn(name="GRADUATE_ID"),
            inverseJoinColumns=@JoinColumn(name="INSTITUTIONS_ID"))
    private List<Institution> institutions;

}
