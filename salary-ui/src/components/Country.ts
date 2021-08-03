export class Country {
    name: string;
    countryCode: string;
    usdConversion: number=0;
    locale: string | undefined;
    currency: string;

    constructor(name: string, countryCode :string, usdConversion: number,
                locale: string, currency: string) {
        this.name = name;
        this.countryCode = countryCode;
        this.usdConversion = usdConversion;
        this.locale = locale;
        this.currency = currency;
    }

}