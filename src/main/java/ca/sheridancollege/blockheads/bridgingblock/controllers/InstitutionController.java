package ca.sheridancollege.blockheads.bridgingblock.controllers;

import ca.sheridancollege.blockheads.bridgingblock.beans.Institution;
import ca.sheridancollege.blockheads.bridgingblock.repositories.InstitutionRepository;
import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/api/institutions")
@CrossOrigin(origins = "http://localhost:3000")
public class InstitutionController {

    InstitutionRepository institutionRepo;

    //Get for all institutions(collection)
    @GetMapping(value={"/",""})
    public List<Institution> getInstitutionCollection(){
        return institutionRepo.findAll();
    }


    //Get - For a single institution by id
    @GetMapping("/{id}")
    public Institution getInstitution(@PathVariable Long id) {
        Optional<Institution> institution = institutionRepo.findById(id);
        if (institution.isPresent()) {
            return institutionRepo.findById(id).get();
        } else {
            return null;
        }

    }
    @PostMapping(value={"/",""},headers="content-type=application/json")
    public void postInstitutionCollection(@RequestBody Institution institution){
        institution.setId(null);
        institutionRepo.save(institution);
    }
}
