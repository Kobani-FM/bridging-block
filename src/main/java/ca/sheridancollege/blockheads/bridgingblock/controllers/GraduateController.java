package ca.sheridancollege.blockheads.bridgingblock.controllers;

import ca.sheridancollege.blockheads.bridgingblock.beans.Graduate;
import ca.sheridancollege.blockheads.bridgingblock.beans.Wallet;
import ca.sheridancollege.blockheads.bridgingblock.repositories.GraduateRepository;
import ca.sheridancollege.blockheads.bridgingblock.repositories.WalletRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

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
        Optional<Graduate> wallet = graduateRepo.findById(id);
        if (wallet.isPresent()) {
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
}
