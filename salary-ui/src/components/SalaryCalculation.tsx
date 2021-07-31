import styled from 'styled-components'
import './Salary.css'
import {useState} from "react"
import {
    Button, FormControl, InputLabel, MenuItem, Select, Input
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import classNames from "classnames"
import '@fontsource/roboto'

export const SalaryCalculation = () => {
    const [salary, setSalary] = useState(0)
    const [country, setCountry] = useState('Singapore')
    const [annualTax, setAnnualTax] = useState(0)
    const [monthlyTax, setMonthlyTax] = useState(0)
    const [netMonthlySalary, setNetMonthlySalary] = useState(0)


    const calculateTax = (country: string, salary: number) => {
        fetch(`http://localhost:8080/api/v1/taxPayable?country=${country}&salary=${salary}`, {
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            }
        }).then(response => response.json())
            .then(response => {
                setAnnualTax(response.annualTax)
                setMonthlyTax(response.monthlyTax)
                setNetMonthlySalary(response.netMonthlySalary)
            })

    }
    const handleChange = (event: any) => {
        setCountry(event.target.value)
    }
    const classes = useStyles()

    return (
        <div className="stage-container">
            <div className="stage">
                <div className="field">
                    <FormControl className={classNames(classes.formControl, classes.text)}>
                        <InputLabel style={{fontSize: '24px'}}>Country</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={country}
                            onChange={handleChange}
                        >
                            <MenuItem value={"Singapore"}>Singapore</MenuItem>
                            <MenuItem value={"UK"}>UK</MenuItem>
                        </Select>
                    </FormControl>

                </div>
                <div className="field">
                    <FormControl className={classNames(classes.formControl, classes.text)}>
                        <InputLabel style={{fontSize: '19px'}}>Annual Salary</InputLabel>
                        <Input onChange={e => setSalary(+e.target.value)}/>
                    </FormControl>
                </div>

                <div className="results">
                    <div className="result">
                        <div className="label">Annual Tax</div>
                        <div className="value" id="tax">{annualTax}</div>
                    </div>
                    <div className="result">
                        <div className="label">Monthly Tax</div>

                        <div className="value" id="tax">{monthlyTax}</div>
                    </div>
                    <div className="result">
                        <div className="label">Net Monthly Salary</div>

                        <div className="value" id="nms">{netMonthlySalary}</div>
                    </div>
                    <div id="submit-button"><Button className={classNames(classes.submitBtn)}
                                                    onClick={() => calculateTax(country, salary)}> Calculate</Button>
                    </div>


                </div>

            </div>
        </div>
    )
}


const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    },
    form: {
        width: 800,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        minWidth: 120
    },
    type: {
        fontWeight: 600
    },
    formControl: {
        margin: 10,
        display: "flex",

    },
    input: {
        padding: "10px 14px"
    },
    select: {
        maxWidth: 130
    },
    search: {
        maxWidth: 180
    },
    submitBtn: {
        // [theme.breakpoints.down("xs")]: {
        //     width: "50%"
        // },
        width: "150px",
        background: '#126b0f',
        float: "right",
        marginTop: "28px",
        color: "#f0f6ef",
        '&:hover': {
            background: '#288a3c',
        },
        fontSize: "14px",
    }
}))


const StyledStage = styled.div`
    margin:20px;
    padding: 10px;
    text-align: center;
    display:flex;
    background: blue;
`

interface ApiResponse {
    tax: number
}