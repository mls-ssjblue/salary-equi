package com.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.service.TaxService;

import java.math.BigDecimal;

@RestController
@RequestMapping("v1")
public class TaxController{

    public TaxController(TaxService taxService) {
        this.taxService = taxService;
    }

    private TaxService taxService;
    @GetMapping("/taxPayable")
    public TaxResponse getTaxPayable(@RequestParam("country") String country,
                                     @RequestParam("salary")BigDecimal salary){
        return new TaxResponse(taxService.getTaxPayable(country,salary));

    }

}