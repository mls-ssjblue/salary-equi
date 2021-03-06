package com.service;

import com.dao.TaxDao;
import com.model.TaxBracket;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;

@Service
public class TaxService {
    private TaxDao taxDao;

    public TaxService(TaxDao taxDao) {
        this.taxDao = taxDao;
    }

    public BigDecimal getTaxPayable(String country, BigDecimal salary) {
        List<TaxBracket> taxBrackets = taxDao.getTaxBracketsByCountry(country);
        BigDecimal taxPayable = BigDecimal.ZERO;
        int idx = 0;
        do {
            TaxBracket cur = taxBrackets.get(idx);
            if(salary.compareTo(cur.getHigh())<=0)break;
            BigDecimal subtract = cur.getHigh().subtract(cur.getLow());
            taxPayable = taxPayable.add(subtract.multiply(cur.getTaxRate().multiply(BigDecimal.valueOf(0.01))));
            idx++;
        }
        while (salary.compareTo(taxBrackets.get(idx).getHigh()) >= 0);
        taxPayable = taxPayable.add(salary.subtract(taxBrackets.get(idx).getLow()).multiply(
                taxBrackets.get(idx).getTaxRate().multiply(BigDecimal.valueOf(0.01))));

        return taxPayable;

    }

    public BigDecimal monthlyTaxPayable(BigDecimal annualTax){

        BigDecimal monthlyTax  = annualTax.divide(BigDecimal.valueOf(12), RoundingMode.FLOOR);
        return monthlyTax.setScale(2,RoundingMode.FLOOR);
    }

    public BigDecimal getNetMonthlySalary(BigDecimal monthlyTax, BigDecimal salary){
        BigDecimal monthlySalary  = salary.divide(BigDecimal.valueOf(12), RoundingMode.FLOOR);
        monthlySalary.setScale(2,RoundingMode.FLOOR);
        return monthlySalary.subtract(monthlyTax);
    }

}
