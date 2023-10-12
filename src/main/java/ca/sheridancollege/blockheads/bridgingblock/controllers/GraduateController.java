package ca.sheridancollege.blockheads.bridgingblock.controllers;

import ca.sheridancollege.blockheads.bridgingblock.beans.Graduate;
import ca.sheridancollege.blockheads.bridgingblock.beans.Wallet;
import ca.sheridancollege.blockheads.bridgingblock.repositories.GraduateRepository;
import ca.sheridancollege.blockheads.bridgingblock.repositories.WalletRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Example;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/api/graduates")
@CrossOrigin(origins = "http://localhost:3000")
public class GraduateController {
    GraduateRepository graduateRepo;

    //Get for all graduates(collection)
    @GetMapping(value={"/",""})
    public List<Graduate> getGraduateCollection(){
        return graduateRepo.findAll();
    }


    //Get - For a single graduate by id
    @GetMapping("/{id}")
    public Graduate getGraduate(@PathVariable Long id) {
        Optional<Graduate> grad = graduateRepo.findById(id);
        if (grad.isPresent()) {
            return graduateRepo.findById(id).get();
        } else {
            return null;
        }
    }
    
  //Get - For a single graduate by their account address
    @GetMapping("/account-address/{address}")
    public Graduate getGraduateByAddress(@PathVariable String address) {
        Optional<Graduate> grad = Optional.ofNullable(graduateRepo.findGraduateByAccountAddress(address));
        if (grad.isPresent()) {
            return graduateRepo.findGraduateByAccountAddress(address);
        } else {
        	return null;
        }
    }


    @PostMapping(value={"/",""})
    public ResponseEntity<Graduate> createGraduate(@RequestBody Graduate graduate) {
        if (!graduate.isValidEthereumAddress()) {
            return ResponseEntity.badRequest().build();
        }

        String address = graduate.getAccountAddress();
        Optional<Graduate> optionalGraduate = Optional.ofNullable(graduateRepo.findGraduateByAccountAddress(address));
        if (optionalGraduate.isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }

        Graduate savedGraduate = graduateRepo.save(graduate);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedGraduate);
    }

}
