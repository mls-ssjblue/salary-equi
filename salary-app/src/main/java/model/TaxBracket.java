package model;

import java.math.BigDecimal;

public class TaxBracket {
    private String id;
    private String country;
    private String currency;
    private String bracket;
    private BigDecimal low;
    private BigDecimal high;
    private BigDecimal taxRate;

    public TaxBracket(String id, String country, String currency, String bracket, BigDecimal low, BigDecimal high, BigDecimal taxRate) {
        this.id = id;
        this.country = country;
        this.currency = currency;
        this.bracket = bracket;
        this.low = low;
        this.high = high;
        this.taxRate = taxRate;
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
