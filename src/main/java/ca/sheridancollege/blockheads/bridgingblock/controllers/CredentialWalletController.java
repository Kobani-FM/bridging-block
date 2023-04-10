package ca.sheridancollege.blockheads.bridgingblock.controllers;

import ca.sheridancollege.blockheads.bridgingblock.beans.CredentialWallet;
import ca.sheridancollege.blockheads.bridgingblock.beans.Graduate;
import ca.sheridancollege.blockheads.bridgingblock.beans.Wallet;
import ca.sheridancollege.blockheads.bridgingblock.repositories.CredentialWalletRepository;
import ca.sheridancollege.blockheads.bridgingblock.repositories.GraduateRepository;
import ca.sheridancollege.blockheads.bridgingblock.repositories.WalletRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/api/credential-wallets")
@CrossOrigin(origins = "http://localhost:3000")
public class CredentialWalletController {

    private CredentialWalletRepository credentialWalletRepo;
    private GraduateRepository graduateRepo;
    private WalletRepository walletRepo;

    // GET method to retrieve all CredentialWallets
    @GetMapping(value = {"/", ""})
    public List<CredentialWallet> getAllCredentialWallets() {
        return credentialWalletRepo.findAll();
    }

    // POST method to create a new CredentialWallet
    @PostMapping(value = {"/", ""})
    public ResponseEntity<CredentialWallet> createCredentialWallet(@RequestBody CredentialWallet credentialWallet) {
//        if (!credentialWallet.isValidEthereumAddress()) {
//            return ResponseEntity.badRequest().build();
//        }

        String address = credentialWallet.getAccountAddress();
        Optional<Graduate> optionalGraduate = Optional.ofNullable(graduateRepo.findGraduateByAccountAddress(address));
        Optional<Wallet> optionalWallet = Optional.ofNullable(walletRepo.findWalletsByAddress(address));
        Optional<CredentialWallet> optionalCredentialWallet = Optional.ofNullable(
                credentialWalletRepo.findCredentialWalletByAccountAddress(address)
        );

        if (optionalCredentialWallet.isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }

        CredentialWallet savedCredentialWallet = credentialWallet;
        if (optionalGraduate.isPresent() && optionalWallet.isPresent()) {
            credentialWallet.setGraduate(optionalGraduate.get());
            credentialWallet.setWallet(optionalWallet.get());
            savedCredentialWallet = credentialWalletRepo.save(credentialWallet);
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(savedCredentialWallet);
    }


    // DELETE method to delete a CredentialWallet by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCredentialWallet(@PathVariable Long id) {
        credentialWalletRepo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}