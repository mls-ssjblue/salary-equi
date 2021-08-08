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
        <div className="slider">
            <div className="salary-container">
                <SalaryCalculation id="slide-1"/>
                <SalaryCalculation id="slide-2"/>
            </div>
            <a href="#slide-1">1</a>
            <a href="#slide-2">2</a>
            <a href="#slide-3">3</a>
            <a href="#slide-4">4</a>
            <a href="#slide-5">5</a>
        </div>
    )
}