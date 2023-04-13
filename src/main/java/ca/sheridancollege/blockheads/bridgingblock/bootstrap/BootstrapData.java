package ca.sheridancollege.blockheads.bridgingblock.bootstrap;


import ca.sheridancollege.blockheads.bridgingblock.beans.*;
import ca.sheridancollege.blockheads.bridgingblock.repositories.*;
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
	private CertificateRepository certificateRepo;

	@Override
	public void run(String... args) throws Exception {

		List<String> colleges = new ArrayList<>();
		colleges.add("Seneca College");
		colleges.add("Humber College");
		colleges.add("Centennial College");
		colleges.add("George Brown College");
		colleges.add("Sheridan College");
		for (String college : colleges) {
			Institution inst = Institution.builder().name(college).status(InstitutionStatus.ISSUER).build();
			intsRepo.save(inst);
		}

		//Adding test sample data to the database
		List<Institution> emptyList = new ArrayList<>();

		//A real account address: 0xb0cc4447594a6B57528d948EAbD76a3BE3483cb9                    
		Graduate g1 = Graduate.builder().firstName("Meow").lastName("Meow").email("meow@sheridancollege.ca")
				.accountAddress("AaAaAaAaAaAaAa01234AaAaAaAaAaAaAa22256789a")
				.institutions(emptyList).build();
		g1.getInstitutions().add(intsRepo.findInstitutionByName("Sheridan College"));
		g1 = gradRepo.save(g1);
		Wallet w1 = Wallet.builder().address(g1.getAccountAddress()).build();
		w1 = walletRepo.save(w1);
		CredentialWallet cw1 = CredentialWallet.builder().accountAddress(g1.getAccountAddress())
				.wallet(w1).graduate(g1).build();
		cw1 = credRepo.save(cw1);


		emptyList.clear();
		Graduate g2 = Graduate.builder().firstName("Woof").lastName("Woof").email("woof@humbercollege.ca")
				.accountAddress("BbBbBbBbBbBbBb98765111BbBbBbBbBbBbBb4321dD")
				.institutions(emptyList).build();
		g2.getInstitutions().add(intsRepo.findInstitutionByName("Humber College"));
		g2 = gradRepo.save(g2);
		Wallet w2 = Wallet.builder().address(g2.getAccountAddress()).build();
		w2 = walletRepo.save(w2);
		CredentialWallet cw2 = CredentialWallet.builder().accountAddress(g2.getAccountAddress())
				.wallet(w2).graduate(g2).build();
		cw2 = credRepo.save(cw2);


		emptyList.clear();
		Graduate g3 = Graduate.builder().firstName("Bob").lastName("Builder").email("bobthebuilder@gmail.com")
				.accountAddress("02f23j0ogh2JHAFo2309hokh94u0t2gjokB9024hgi")
				.institutions(emptyList).build();
		g3.getInstitutions().add(intsRepo.findInstitutionByName("Sheridan College"));
		g3.getInstitutions().add(intsRepo.findInstitutionByName("Seneca College"));
		g3.getInstitutions().add(intsRepo.findInstitutionByName("George Brown College"));
		g3 = gradRepo.save(g3);

		Wallet w3 = Wallet.builder().address(g3.getAccountAddress()).build();
		w3 = walletRepo.save(w3);

		CredentialWallet cw3 = CredentialWallet.builder().accountAddress(g3.getAccountAddress())
				.wallet(w3).graduate(g3).build();
		cw3 = credRepo.save(cw3);


		Certificate certificate1 = Certificate.builder()
				.name("Engineering Ethics and Professional Practice")
				.institution("Sheridan College")
				.studentID(12345)
				.yearIssued(2022)
				.gpa(3.8)
				.accountAddress("0x1234567890")
				.build();

		Certificate certificate2 = Certificate.builder()
				.name("Project Manager")
				.institution("Humber College")
				.studentID(67890)
				.yearIssued(2021)
				.gpa(3.5)
				.accountAddress("0x0987654321")
				.build();

		Certificate certificate3 = Certificate.builder()
				.name("Environmental Engineering")
				.institution("George Brown College")
				.studentID(24680)
				.yearIssued(2020)
				.gpa(3.2)
				.accountAddress("0x1357908642")
				.build();

		Certificate certificate4 = Certificate.builder()
				.name("Civil Engineering")
				.institution("Seneca College")
				.studentID(97531)
				.yearIssued(2019)
				.gpa(3.9)
				.accountAddress("0x2468135790")
				.build();

		certificateRepo.save(certificate1);
		certificateRepo.save(certificate2);
		certificateRepo.save(certificate3);
		certificateRepo.save(certificate4);


	}
}
