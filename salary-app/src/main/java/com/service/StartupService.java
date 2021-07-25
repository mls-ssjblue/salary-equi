package com.service;

import com.dao.TaxDao;
import com.model.TaxBracket;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StartupService {

    private final TaxDao taxDao;

    public StartupService(TaxDao taxDao) {
        this.taxDao = taxDao;
    }


    @EventListener
    public void appReady(ApplicationReadyEvent event) {

        TaxCSVReader taxCSVReader = new TaxCSVReader();
        List<TaxBracket> taxBrackets= taxCSVReader.parse("tax_data.csv");
        taxBrackets.forEach(t -> taxDao.insertTaxBracket(t));
    }
}