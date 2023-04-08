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
    @PostMapping(value={"/",""},headers="content-type=application/json")
    public void postGraduateCollection(@RequestBody Graduate graduate){
        graduate.setId(null);
        graduateRepo.save(graduate);
    }

//@PostMapping(value={"/",""}, headers="content-type=application/json")
//public ResponseEntity<String> postGraduateCollection(@RequestBody Graduate graduate) {
//    if(graduateRepo.findAll().contains(graduate)) {
//        System.out.println("Graduate already exists");
//        return ResponseEntity.badRequest().body("Graduate already exists");
//    } else {
//        graduate.setId(null);
//        graduateRepo.save(graduate);
//        System.out.println("Graduate saved successfully");
//        return ResponseEntity.status(HttpStatus.CREATED).body("Graduate saved successfully");
//    }
//}

}
