package ca.sheridancollege.blockheads.bridgingblock.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.sheridancollege.blockheads.bridgingblock.beans.Certificate;
import ca.sheridancollege.blockheads.bridgingblock.beans.CredentialWallet;
import ca.sheridancollege.blockheads.bridgingblock.repositories.CertificateRepository;
import ca.sheridancollege.blockheads.bridgingblock.repositories.CredentialWalletRepository;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/certificates")
@CrossOrigin(origins = "http://localhost:3000")
public class CertificateController {
	
	CertificateRepository certRepo;
	CredentialWalletRepository credentialWalletRepo;

    //Get for all graduates(collection)
    @GetMapping(value={"/",""})
    public List<Certificate> getCertificateCollection(){
        return certRepo.findAll();
    }


    //Get - For a single graduate by id
    @GetMapping("/{id}")
    public Certificate getCertificate(@PathVariable Long id) {
        Optional<Certificate> cert = certRepo.findById(id);
        if (cert.isPresent()) {
            return certRepo.findById(id).get();
        } else {
            return null;
        }
    }


    @PostMapping(value = {"/", ""}, headers = "content-type=application/json")
    public ResponseEntity<Certificate> createCertificate(@RequestBody Certificate certificate) {

    	certificate.setId(null);
		
		//Create link to credential wallet in database
		String accountAddress = certificate.getAccountAddress();
		CredentialWallet assignedCredenentialWallet = credentialWalletRepo.
				findCredentialWalletByAccountAddress(accountAddress);
		certificate.setCredentialWallet(assignedCredenentialWallet);

        Certificate savedCertificate = certRepo.save(certificate);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedCertificate);
    }

}
