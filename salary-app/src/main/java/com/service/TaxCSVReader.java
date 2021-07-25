package com.service;

import com.opencsv.CSVReader;
import com.model.TaxBracket;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class TaxCSVReader {
    private BufferedReader bufferedReader;
    private CSVReader csvReader;
    private List<TaxBracket> taxBrackets = new ArrayList<>();

    public List<TaxBracket> parse(String fileName) {
        bufferedReader = new BufferedReader(
                new InputStreamReader(Objects.requireNonNull(
                        getClass().getResourceAsStream("/" + fileName)))

        );
        csvReader = new CSVReader(bufferedReader);
        List<String> record;
        try {
            csvReader.readNext();

            record = List.of(csvReader.readNext());
            while(true){
//                System.out.println();
                record.forEach(String::trim);
                taxBrackets.add(buildTaxBracket(record));
                String[] nextLine = csvReader.readNext();
                if(nextLine == null)break;
                record = List.of(csvReader.readNext());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return taxBrackets;
    }

    private TaxBracket buildTaxBracket(List<String> record) {
        return new TaxBracket(record.get(0),record.get(1), record.get(2), new BigDecimal(record.get(3)),
                new BigDecimal(record.get(4)), new BigDecimal(record.get(5)));
    }
}
