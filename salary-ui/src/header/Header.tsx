import * as React from "react"
import styled from "styled-components"
import Typography from "@material-ui/core/Typography"

export const Header: React.FC = () => {
    return (
        <StyledHeader>
            SALARY EQUIVALENCE
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
  padding: 5px;
  background: #87D691FF;
   font-size: 3rem;
  letter-spacing: 2px;
  justify-content: center;
  overflow-x: auto;
  width: 100vw;
`
//
// const StyledHeading = styled.h1`
//   max-width: 650px;
//   color: white;
//   font-size: 3.5rem;
//   letter-spacing: 4px;
//   overflow: hidden; /* Ensures the content is not revealed until the animation */
//   white-space: nowrap; /* Keeps the content on a single line */
//   margin: 0 auto; /* Gives that scrolling effect as the typing happens */
//   background: #87D691FF;
// `

