package dao;

import model.TaxBracket;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TaxRepository extends CrudRepository<TaxBracket, Integer> {
    List<TaxBracket> findByCountry(String country);
}
