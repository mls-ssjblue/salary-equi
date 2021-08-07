import styled from 'styled-components'
import './Salary.css'
import {useEffect, useState} from "react"
import {
    Button,
    FormControl,
    FormControlLabel, Icon,
    Input,
    InputLabel,
    MenuItem,
    Select,
    Switch,
    withStyles
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import classNames from "classnames"
import '@fontsource/roboto'
import {countries, Country, countryMap} from '../services/StartupService'
import {green, grey} from '@material-ui/core/colors'
import {AddCircleOutline} from '@material-ui/icons'
const getCurrencyFormattedValue = (country: Country, amount: number, isUsdToggled: boolean,
                                   currencyToUsd: number) => {
    if (isUsdToggled) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: "USD"
        }).format(amount * currencyToUsd)
    } else {
        return new Intl.NumberFormat(country.locale, {
            style: 'currency',
            currency: country.currency
        }).format(amount)
    }

}

interface LooseObject {
    [key: string]: any
}

export const SalaryCalculation = () => {
    const [salary, setSalary] = useState(0)
    const [annualTax, setAnnualTax] = useState(0)
    const [monthlyTax, setMonthlyTax] = useState(0)
    const [netMonthlySalary, setNetMonthlySalary] = useState(0)

    const [currentCountryName, setCountryName] = useState('Singapore')
    const [currentCountry, setCurrentCountry] = useState(countries[0])
    const [showInUsd, setShowInUsd] = useState(false)
    const [currencyRates, setCurrencyRates] = useState({} as LooseObject)

    let currencyFormattedValue = new Intl.NumberFormat(currentCountry.locale, {
        style: 'currency',
        currency: currentCountry.currency
    }).format(0)

    useEffect(() => {
        currencyFormattedValue = new Intl.NumberFormat(currentCountry.locale, {
            style: 'currency',
            currency: currentCountry.currency
        }).format(0)
        calculateTax(currentCountryName, salary)
    }, [currentCountry])

    useEffect(() => {
        console.log('Fetching currency')
        try {
            fetch(`https://currencyapi.net/api/v1/rates?key=9GDrLrEkr2W5XIL1rpDAHQqA9PqpDAW8rxNM&base=USD`, {
                "method": "GET",
                "headers": {
                    "content-type": "application/json",
                    "accept": "application/json"
                }
            }).then(response => response.json())
                .then(response => {
                    setCurrencyRates(response.rates)
                    console.log(currencyRates)
                    console.log(currencyRates[currentCountry.currency])
                })
        } catch (e) {
            console.log('Error occurred while fetching currency rates: ' + e)
        } finally {
        }
    }, [showInUsd])


    const calculateTax = (country: string, salary: number) => {
        fetch(`/api/v1/taxPayable?country=${country}&salary=${salary}`, {
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
        const c = countryMap.get(event.target.value)
        if (c != undefined) {
            setCountryName(c.name)
            setCurrentCountry(c)

            console.log('current country :- ' + currentCountry.name)
            console.log('current currency :- ' + currentCountry.currency)
            console.log('current locale :- ' + currentCountry.locale)
        }
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
                            value={currentCountryName}
                            onChange={handleChange}
                        >

                            {countries?.map((item) => {
                                return (
                                    <MenuItem key={item.countryCode} value={item.name}>
                                        {item.name}
                                    </MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>

                </div>
                <div className="field">
                    <FormControl className={classNames(classes.formControl, classes.text)}>
                        <InputLabel style={{fontSize: '19px'}}>Annual Salary</InputLabel>
                        <Input onChange={e => {
                            setSalary(+e.target.value)
                            setAnnualTax(0)
                            setMonthlyTax(0)
                            setNetMonthlySalary(0)
                        }}
                               placeholder={currencyFormattedValue}/>
                    </FormControl>
                </div>

                <div className="results">
                    <div className="result">
                        {/*<div className="label">Show in USD</div>*/}
                        <div>
                            <FormControlLabel control={
                                <GreenSwitch
                                    checked={showInUsd}
                                    onChange={() => setShowInUsd(!showInUsd)}
                                    color="primary"
                                    name="usdToggle"
                                    inputProps={{'aria-label': 'primary checkbox'}}
                                />} label="Show in USD"/>

                        </div>
                    </div>
                    <div className="result">
                        <div className="label">Annual Tax</div>
                        <div className="value" id="tax">
                            {getCurrencyFormattedValue(currentCountry, annualTax, showInUsd,
                                1 / currencyRates[currentCountry.currency])}</div>
                    </div>
                    <div className="result">
                        <div className="label">Monthly Tax</div>

                        <div className="value"
                             id="tax">{getCurrencyFormattedValue(currentCountry, monthlyTax, showInUsd,
                            1 / currencyRates[currentCountry.currency])}</div>
                    </div>
                    <div className="result">
                        <div className="label">Monthly Salary</div>

                        <div className="value"
                             id="nms">{getCurrencyFormattedValue(currentCountry, salary / 12, showInUsd,
                            1 / currencyRates[currentCountry.currency])}</div>
                    </div>
                    <div className="result">
                        <div className="label">Net Monthly Salary</div>

                        <div className="value"
                             id="nms">{getCurrencyFormattedValue(currentCountry, netMonthlySalary, showInUsd,
                            1 / currencyRates[currentCountry.currency])}</div>
                    </div>
                    <div id="submit-button"><Button className={classNames(classes.submitBtn)}
                                                    onClick={() => calculateTax(currentCountryName, salary)}> Calculate</Button>
                    </div>
                     <AddCircleOutline style={{ fontSize: 40 }} onClick={()=>console.log('e')}/>
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


const GreenSwitch = withStyles({
    switchBase: {
        color: grey[300],
        '&$checked': {
            color: green[500],
        },
        '&$checked + $track': {
            backgroundColor: green[500],
        },
    },
    checked: {},
    track: {},
})(Switch)
