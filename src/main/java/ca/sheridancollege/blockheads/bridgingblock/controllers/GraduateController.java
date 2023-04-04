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

import ca.sheridancollege.blockheads.bridgingblock.beans.Graduate;
import ca.sheridancollege.blockheads.bridgingblock.repositories.GraduateRepository;
import lombok.AllArgsConstructor;

@RestController 
@AllArgsConstructor
@RequestMapping("/api/graduates")
public class GraduateController {
	
	private GraduateRepository gradRepo;
	
	@GetMapping(value={"/", ""})
	public List<Graduate> getGraduateCollection() {
		return gradRepo.findAll();
	}
	
	@GetMapping("/{id}")
	public Graduate getGraduateElement(@PathVariable Long id) {
		Optional<Graduate> graduate = gradRepo.findById(id);
		if (graduate.isPresent()) {
			return gradRepo.findById(id).get();
		} else {
			return null;
		}
	}
	
	@PostMapping(value={"/", ""}, headers="Content-type=application/json")
	public String postItemCollection(@RequestBody Graduate graduate) {
		graduate.setId(null);

		Graduate g = gradRepo.save(graduate);
		return "Record was added at index " + g.getId();
	}
	
	@PutMapping(value={"/{id}"}, headers="Content-type=application/json")
	public Graduate putGraduateElement(@PathVariable Long id, @RequestBody Graduate graduate) {
		graduate.setId(id);
		return gradRepo.save(graduate);
	}
	
	@DeleteMapping("/{id}")
	public String deleteGraduateElement(@PathVariable Long id) {
		if (id != null && gradRepo.findById(id).isPresent()) {
			gradRepo.deleteById(id);
			return "Graduate at index " + id + " was deleted.";
		} else {
			return "Could not delete Graduate at index " + id;
		}
	} 

}
