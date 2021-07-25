package com.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigDecimal;

@Entity
public class TaxBracket {
    @Id
    private String id;
    private String country;
    private String bracket;
    private BigDecimal low;
    private BigDecimal high;
    private BigDecimal taxRate;

    public TaxBracket(String id, String country,  String bracket, BigDecimal low, BigDecimal high, BigDecimal taxRate) {
        this.id = id;
        this.country = country;
        this.bracket = bracket;
        this.low = low;
        this.high = high;
        this.taxRate = taxRate;
    }

    public TaxBracket() {

    }

    public BigDecimal getLow() {
        return low;
    }

    public BigDecimal getHigh() {
        return high;
    }

    public BigDecimal getTaxRate() {
        return taxRate;
    }
}
