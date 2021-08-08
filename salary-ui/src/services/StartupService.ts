// import {Country} from '../components/Country'

export let countries: Array<Country> = new Array<Country>()
export let countryMap: Map<string, Country> = new Map<string, Country>()

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

export function setupCountries(): Country[] {
    countries = []
    console.log('Creating countries ...')
    let sgCountry = new Country('Singapore', "SG", 1.3, "en-SG", 'SGD')
    countries.push(sgCountry)
    // countryMap.set("Singapre", sgCountry)
    let ukCountry = new Country('UK', "UK", 0.8, "en-UK", 'GBP')
    countries.push(ukCountry)

    let inCountry = new Country('India', "IN", 70, "en-IN", 'INR')
    countries.push(inCountry)

    console.log(countries)
    return countries
}

export function setupMap() {
    let countries: Array<Country> = setupCountries()
    // let map: Map<String, Country> = new Map()
    for (let i = 0; i < countries.length; i++) {
        countryMap.set(countries[i].name, countries[i])
    }
    console.log(countryMap)
}

// setupCountries()
// setupMap()

