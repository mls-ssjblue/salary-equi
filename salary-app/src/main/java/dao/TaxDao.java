package dao;

import model.TaxBracket;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TaxDao {

    private TaxRepository taxRepository;

    public List<TaxBracket> getTaxBracketsByCountry(String country){
        return taxRepository.findByCountry(country);
    }

    public void insertTaxBracket(TaxBracket taxBracket){
        taxRepository.save(taxBracket);
    }

}
