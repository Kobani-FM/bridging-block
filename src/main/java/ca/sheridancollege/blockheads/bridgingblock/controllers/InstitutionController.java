package ca.sheridancollege.blockheads.bridgingblock.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.sheridancollege.blockheads.bridgingblock.beans.Institution;
import ca.sheridancollege.blockheads.bridgingblock.repositories.InstitutionRepository;
import lombok.AllArgsConstructor;

@RestController 
@AllArgsConstructor
@RequestMapping("/api/institutions")
public class InstitutionController {
	
	private InstitutionRepository instituteRepo;
	
	@GetMapping(value={"/", ""})
	public List<Institution> getInstitutionCollection() {
		return instituteRepo.findAll();
	}
	
	@GetMapping("/{id}")
	public Institution getInstitutionElement(@PathVariable Long id) {
		Optional<Institution> institution = instituteRepo.findById(id);
		if (institution.isPresent()) {
			return instituteRepo.findById(id).get();
		} else {
			return null;
		}
	}
	
	@PostMapping(value={"/", ""}, headers="Content-type=application/json")
	public String postInstitutionCollection(@RequestBody Institution institution) {
		institution.setId(null);

		Institution i = instituteRepo.save(institution);
		return "Record was added at index " + i.getId();
	}
	
	@PutMapping(value={"/{id}"}, headers="Content-type=application/json")
	public Institution putInstitutionElement(@PathVariable Long id, @RequestBody Institution institution) {
		institution.setId(id);
		return instituteRepo.save(institution);
	}
	
	@DeleteMapping("/{id}")
	public String deleteInstitutionElement(@PathVariable Long id) {
		if (id != null && instituteRepo.findById(id).isPresent()) {
			instituteRepo.deleteById(id);
			return "Institution at index " + id + " was deleted.";
		} else {
			return "Could not delete Institution at index " + id;
		}
	}

}
