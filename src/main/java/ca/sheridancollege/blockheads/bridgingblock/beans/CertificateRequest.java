package ca.sheridancollege.blockheads.bridgingblock.beans;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Builder
public class CertificateRequest {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String firstName;
    private String lastName;
    private String institution;
    private Integer studentId;
    private Integer graduationYear;
    private String program;
    @Enumerated(EnumType.STRING)
    private CertificateRequestStatus status;

    //The credential wallet that the graduate wants to add the certificate to
    private String accountAddress;
    
    @JsonIgnore
  	@ManyToOne(fetch=FetchType.LAZY)
  	@JoinTable(name="GRADUATE_CERTIFICATE_REQUEST",
  /* id for this class */		  joinColumns= @JoinColumn(name="CERTFICATE_REQUEST_ID"),
  /* id for the other class */ inverseJoinColumns=@JoinColumn(name="GRADUATE_ID"))
    private Graduate graduate;
}
