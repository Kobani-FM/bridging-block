package ca.sheridancollege.blockheads.bridgingblock.bootstrap;


import ca.sheridancollege.blockheads.bridgingblock.beans.CredentialWallet;
import ca.sheridancollege.blockheads.bridgingblock.beans.Graduate;
import ca.sheridancollege.blockheads.bridgingblock.beans.Institution;
import ca.sheridancollege.blockheads.bridgingblock.beans.InstitutionStatus;
import ca.sheridancollege.blockheads.bridgingblock.beans.Wallet;
import ca.sheridancollege.blockheads.bridgingblock.repositories.CredentialWalletRepository;
import ca.sheridancollege.blockheads.bridgingblock.repositories.GraduateRepository;
import ca.sheridancollege.blockheads.bridgingblock.repositories.InstitutionRepository;
import ca.sheridancollege.blockheads.bridgingblock.repositories.WalletRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;


@Component
@AllArgsConstructor
public class BootstrapData implements CommandLineRunner {
	
	private InstitutionRepository intsRepo;
	private GraduateRepository gradRepo;
	private WalletRepository walletRepo;
	private CredentialWalletRepository credRepo;

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
		
		//Adding test sample data to the database
		List<Institution> list = new ArrayList<>();
		Graduate g1 = Graduate.builder().firstName("Meow").lastName("Meow").email("meow@sheridancollege.ca")
				.StudentID(999999999).accountAddress("0xb0cc4447594a6B57528d948EAbD76a3BE3483cb9")
				.institutions(list).build();
		g1.getInstitutions().add(intsRepo.findInstitutionByName("Sheridan College"));
		g1 = gradRepo.save(g1);
		
		Wallet w1 = Wallet.builder().address(g1.getAccountAddress()).build();
		w1 = walletRepo.save(w1);
		
		CredentialWallet cw1 = CredentialWallet.builder().accountAddress(g1.getAccountAddress())
				.wallet(w1).graduate(g1).build();
		cw1 = credRepo.save(cw1);

	}

}
