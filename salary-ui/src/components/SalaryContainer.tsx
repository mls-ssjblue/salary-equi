import {SalaryCalculation} from './SalaryCalculation'
import {useEffect} from 'react'
// import {setupCountries} from '../services/StartupService'
// import {Country} from './Country'

export const SalaryContainer = () => {
    // let countries: Country [] = []

    useEffect(() => {
        // countries= [];
    }, []);

    return (
        <>
        <SalaryCalculation />
        </>
    )
}