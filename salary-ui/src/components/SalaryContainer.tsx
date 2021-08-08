import {SalaryCalculation} from './SalaryCalculation'
import {useEffect} from 'react'

export const SalaryContainer = () => {

    useEffect(() => {
    }, [])

    return (
        <div className="slider">

            <div className="slides">
                <SalaryCalculation id="slide-1"/>
                <SalaryCalculation id="slide-2"/>
            </div>
            <div className="navigation-panel">
                <a href="#slide-1">1</a>
                <a href="#slide-2">2</a>
            </div>
        </div>
    )
}