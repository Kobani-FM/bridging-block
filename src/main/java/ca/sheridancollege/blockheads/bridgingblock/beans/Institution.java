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
public class Institution {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String name;
    @Enumerated(EnumType.STRING)
    private InstitutionStatus status;


    @OneToOne
    @JoinTable(name = "INSTITUTION_WALLET",
            joinColumns = @JoinColumn(name = "INSTITUTION_ID"),
            inverseJoinColumns = @JoinColumn(name = "WALLET_ID"))
    private Wallet wallet;


    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "institutions")
    private List<Graduate> graduates;


}
