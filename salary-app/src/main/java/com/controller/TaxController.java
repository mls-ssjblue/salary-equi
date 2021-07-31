package com.controller;

import org.springframework.web.bind.annotation.*;
import com.service.TaxService;

import java.math.BigDecimal;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class TaxController{

    public TaxController(TaxService taxService) {
        this.taxService = taxService;
    }

    private TaxService taxService;


    @GetMapping("/taxPayable")
    public TaxResponse getTaxPayable(@RequestParam("country") String country,
                                     @RequestParam("salary")BigDecimal salary){
        BigDecimal annualTax = taxService.getTaxPayable(country,salary);
        BigDecimal monthlyTax = taxService.monthlyTaxPayable(annualTax);
        return new TaxResponse(annualTax, monthlyTax,
                taxService.getNetMonthlySalary(monthlyTax, salary));
    }


}