import * as React from 'react'
import styled from 'styled-components'
export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledHeading>Salary Equivalence</StyledHeading>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  padding: 5px;
  background: #449e47;
`;

const StyledHeading = styled.h1`
  max-width: 650px;
  color: white;
  font-size: 3.5rem;
  letter-spacing: 4px;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  animation: typing 3.5s steps(40, end) infinite,
    blink-caret 0.75s step-end infinite;
`;