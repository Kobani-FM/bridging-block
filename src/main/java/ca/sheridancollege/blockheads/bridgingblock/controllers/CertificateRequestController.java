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

import ca.sheridancollege.blockheads.bridgingblock.beans.CertificateRequest;
import ca.sheridancollege.blockheads.bridgingblock.beans.Graduate;
import ca.sheridancollege.blockheads.bridgingblock.repositories.CertificateRequestRepository;
import ca.sheridancollege.blockheads.bridgingblock.repositories.GraduateRepository;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/certificate-requests")
@CrossOrigin(origins = "http://localhost:3000")
public class CertificateRequestController {
	
	CertificateRequestRepository certRequestRepo;
	GraduateRepository gradRepo;

    //Get for all certificate requests(collection)
    @GetMapping(value={"/",""})
    public List<CertificateRequest> getCertificateRequestCollection(){
        return certRequestRepo.findAll();
    }


    //Get - For a single graduate by id
    @GetMapping("/{id}")
    public CertificateRequest getCertificateRequest(@PathVariable Long id) {
        Optional<CertificateRequest> certRequest = certRequestRepo.findById(id);
        if (certRequest.isPresent()) {
            return certRequestRepo.findById(id).get();
        } else {
            return null;
        }
    }


    @PostMapping(value = {"/", ""}, headers = "content-type=application/json")
    public ResponseEntity<CertificateRequest> createCertificateRequest(@RequestBody CertificateRequest certificateRequest) {

//    	certificateRequest.setId(null);
		
		//Create link to graduate in database
		String accountAddress = certificateRequest.getAccountAddress();
		Graduate requestingGraduate = gradRepo.
				findGraduateByAccountAddress(accountAddress);
		certificateRequest.setGraduate(requestingGraduate);

        CertificateRequest savedCertificateRequest = certRequestRepo.save(certificateRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedCertificateRequest);
    }

    @GetMapping("/{accountAddress}")
    public List<CertificateRequest> getCertificateRequestsByAccountAddress(@PathVariable String accountAddress) {
        return certRequestRepo.findCertificateRequestByAccountAddress(accountAddress);
    }
}
