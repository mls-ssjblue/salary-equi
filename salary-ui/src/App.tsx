import React from "react"
import logo from "./logo.svg"
import "./App.css"
import styled from "styled-components"
import {Header} from "./header/Header"
import {SalaryContainer} from "./components/SalaryContainer"
import Container from "@material-ui/core/Container"

const App: React.FC = () => {
    return (
        <div className="App">
            <Header/>
            <StyledContainer>
                {/*<Container maxWidth="sm">*/}
                    <SalaryContainer/>
                {/*</Container>*/}
            </StyledContainer>
        </div>
    )
}

const StyledContainer = styled.div`
  margin: 0 5% 0 5%;
  display: flex;
  justify-content: center;
`

export default App
