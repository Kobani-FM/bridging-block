package ca.sheridancollege.blockheads.bridgingblock.bootstrap;


import ca.sheridancollege.blockheads.bridgingblock.beans.Institution;
import ca.sheridancollege.blockheads.bridgingblock.beans.InstitutionStatus;
import ca.sheridancollege.blockheads.bridgingblock.repositories.InstitutionRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;


@Component
@AllArgsConstructor
public class BootstrapData implements CommandLineRunner {
	
	private InstitutionRepository intsRepo;


	@Override
	public void run(String... args) throws Exception {

		List<String> colleges = new ArrayList<>();
		colleges.add("Seneca College");
		colleges.add("Humber College");
		colleges.add("Centennial College");
		colleges.add("George Brown College");
		colleges.add("Sheridan College");
		for (String college : colleges){
			Institution inst = Institution.builder().name(college).status(InstitutionStatus.ISSUER).build();
			intsRepo.save(inst);
		}

	}

}
