package com.controller;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigDecimal;

public class TaxResponse {

    @JsonProperty
    BigDecimal annualTax;

    @JsonProperty
    BigDecimal monthlyTax;

    public TaxResponse(BigDecimal annualTax, BigDecimal monthlyTax) {
        this.annualTax = annualTax;
        this.monthlyTax = monthlyTax;
    }
}
