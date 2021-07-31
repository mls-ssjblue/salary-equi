package com.controller;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigDecimal;

public class TaxResponse {

    @JsonProperty
    BigDecimal annualTax;

    @JsonProperty
    BigDecimal monthlyTax;

    @JsonProperty
    BigDecimal netSalary;

    public TaxResponse(BigDecimal annualTax, BigDecimal monthlyTax,
                       BigDecimal netSalary) {
        this.annualTax = annualTax;
        this.monthlyTax = monthlyTax;
        this.netSalary = netSalary;
    }
}
