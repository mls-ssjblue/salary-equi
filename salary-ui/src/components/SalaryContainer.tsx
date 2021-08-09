import {SalaryCalculation} from './SalaryCalculation'
import {useEffect, useState} from 'react'

export const SalaryContainer = () => {

    useEffect(() => {
    }, [])

    const [activeStage, setActiveStage] = useState(1)

    return (
        <div className="slider">

            <div className="slides">
                <SalaryCalculation id="slide-1"/>
                <SalaryCalculation id="slide-2"/>
            </div>
            <div className="navigation-panel">
                <a href="#slide-1" className={activeStage==1?'active':''} onClick={()=>setActiveStage(1)}>1</a>
                <a href="#slide-2" className={activeStage==2?'active':''} onClick={()=>setActiveStage(2)}>2</a>
            </div>
        </div>
    )
}