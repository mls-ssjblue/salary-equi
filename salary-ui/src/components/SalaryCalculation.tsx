import styled from 'styled-components'
import '../Salary.css'
import {useState} from "react";

export const SalaryCalculation = () => {
    const tax = useState(0);
    return (
        <StyledStage>
            <div className="salary">
                <div className="field">
                    <span>Country: </span>
                    <select>
                        <option>UK</option>
                        <option>Singapore</option>
                    </select>
                </div>
                <div className="field">
                    <span>Salary: </span>
                    <input/>
                </div>
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
`;