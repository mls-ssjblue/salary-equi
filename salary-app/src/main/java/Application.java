import dao.TaxDao;
import model.TaxBracket;

import java.util.List;

public class Application {

    private static TaxDao taxDao;

    public static void main(String[] args) {
        TaxCSVReader taxCSVReader = new TaxCSVReader();
        List<TaxBracket> taxBrackets= taxCSVReader.parse("tax_data.csv");
        taxBrackets.forEach(t -> taxDao.insertTaxBracket(t));
    }
}
