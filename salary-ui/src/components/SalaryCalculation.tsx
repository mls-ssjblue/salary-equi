import styled from 'styled-components'
import '../Salary.css'
import {useState} from "react"

export const SalaryCalculation = () => {
    const [salary, setSalary] = useState(0)
    const [country, setCountry] = useState('Singapore')
    const [tax, setTax] = useState(0)


    const calculateTax = (country: string, salary: number) => {
        fetch(`http://localhost:8080/api/v1/taxPayable?country=${country}&salary=${salary}`, {
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            }
        }).then(response => response.json())
            .then(response => {
                console.log(response);
                setTax(response.taxPayable);
                console.log(tax);
            });

    }
    return (
        <StyledStage>
            <div className="salary">
                <div className="field">
                    <span>Country: </span>
                    <select onChange={(e) =>
                        setCountry(e.target.value)}>
                        <option>UK</option>
                        <option>Singapore</option>
                    </select>
                </div>
                <div className="field">
                    <span>Salary: </span>
                    <input onChange={e => setSalary(+e.target.value)}/>
                </div>
                <button onClick={() => calculateTax(country, salary)}> Calculate</button>
                <div className="tax">Tax: {tax}</div>

            </div>
        </StyledStage>
    )
}


const StyledStage = styled.div`
    margin:20px;
    padding: 10px;
    text-align: center;
    display:flex;
`

interface ApiResponse {
    tax: number
}