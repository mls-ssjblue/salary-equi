package com.controller;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigDecimal;

public class TaxResponse {

    @JsonProperty
    BigDecimal taxPayable;

    public TaxResponse(BigDecimal taxPayable) {
        this.taxPayable = taxPayable;
    }
}
