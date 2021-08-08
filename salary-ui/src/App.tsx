import React from "react"
import "./App.css"
import {Header} from "./header/Header"
import {SalaryContainer} from "./components/SalaryContainer"
import {setupCountries, setupMap} from './services/StartupService'

const App: React.FC = () => {


    setupCountries()
    setupMap()

    return (
        <div className="App">
            <Header/>
            <SalaryContainer/>
        </div>
    )
}

export default App
