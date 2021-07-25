package com.dao;

import com.model.TaxBracket;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TaxDao {

    public TaxDao(TaxRepository taxRepository) {
        this.taxRepository = taxRepository;
    }

    private TaxRepository taxRepository;

    public List<TaxBracket> getTaxBracketsByCountry(String country){
        return taxRepository.findByCountry(country);
    }

    public void insertTaxBracket(TaxBracket taxBracket){
        taxRepository.save(taxBracket);
    }

}
