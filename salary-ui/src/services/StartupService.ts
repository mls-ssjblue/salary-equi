import {Country} from '../components/Country'

export let countries: Array<Country> = new Array<Country>();
// export let countryMap: Map<string, Country> = new Map<string, Country>()

export const setup = () => {
    // countries.push(new Country("India","IN",70, "en-IN","INR"));
    console.log('Creating countries ...')
    let sgCountry = new Country('Singapore', "SG", 1.3, "en-SG", "SGD")
    countries.push(sgCountry)
    // countryMap.set("Singapre", sgCountry)
    let ukCountry = new Country('UK', "UK", 0.8, "en-UK", "GBP")
    countries.push(ukCountry)
}
