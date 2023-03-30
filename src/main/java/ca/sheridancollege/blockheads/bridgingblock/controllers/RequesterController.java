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

import ca.sheridancollege.blockheads.bridgingblock.beans.Requester;
import ca.sheridancollege.blockheads.bridgingblock.repositories.RequesterRepository;
import lombok.AllArgsConstructor;

@RestController 
@AllArgsConstructor
@RequestMapping("/api/requesters")
public class RequesterController {
	
	private RequesterRepository requestRepo;
	
	@GetMapping(value={"/", ""})
	public List<Requester> getRequesterCollection() {
		return requestRepo.findAll();
	}
	
	@GetMapping("/{id}")
	public Requester getRequesterElement(@PathVariable Long id) {
		Optional<Requester> requester = requestRepo.findById(id);
		if (requester.isPresent()) {
			return requestRepo.findById(id).get();
		} else {
			return null;
		}
	}
	
	@PostMapping(value={"/", ""}, headers="Content-type=application/json")
	public String postRequesterCollection(@RequestBody Requester requester) {
		requester.setId(null);

		Requester r = requestRepo.save(requester);
		return "Record was added at index " + r.getId();
	}
	
	@PutMapping(value={"/{id}"}, headers="Content-type=application/json")
	public Requester putRequesterElement(@PathVariable Long id, @RequestBody Requester requester) {
		requester.setId(id);
		return requestRepo.save(requester);
	}
	
	@DeleteMapping("/{id}")
	public String deleteRequesterElement(@PathVariable Long id) {
		if (id != null && requestRepo.findById(id).isPresent()) {
			requestRepo.deleteById(id);
			return "Requester at index " + id + " was deleted.";
		} else {
			return "Could not delete Requester at index " + id;
		}
	}


}
