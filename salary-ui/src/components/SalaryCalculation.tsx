import styled from 'styled-components'
import '../Salary.css'
import {useState} from "react"
import {Button, FormControl, InputLabel, MenuItem, Select, Input, TextField,
Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import classNames from "classnames";
import '@fontsource/roboto';

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
    const handleChange = (event: any) => {
        setCountry(event.target.value);
    };
    const classes = useStyles();

    return (
        <StyledStage>
            <div className="salary">
                <div className="field">
                    <FormControl className={classNames(classes.formControl, classes.text)}>
                        <InputLabel style={{fontSize: '18px'}}>Country</InputLabel>
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
                        <InputLabel>Salary</InputLabel>
                        <Input onChange={e => setSalary(+e.target.value)}/>
                    </FormControl>
                </div>
                <div className="field">

                    <Button className={classNames(classes.submitBtn)}
                            onClick={() => calculateTax(country, salary)}> Calculate</Button>
                </div>

                <div className="results">
                    <Typography variant="h6" style={{textAlign: 'left'}}>Tax: {tax}</Typography>
                </div>
            </div>
        </StyledStage>
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
        display: "flex"
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
        [theme.breakpoints.down("xs")]: {
            width: "100%"
        },
        background:'cadetblue',
        float: "right",
        marginTop: "20px"
    }
}));


const StyledStage = styled.div`
    margin:20px;
    padding: 10px;
    text-align: center;
    display:flex;
`

interface ApiResponse {
    tax: number
}