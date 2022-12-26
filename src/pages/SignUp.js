import React from "react";
import styled from "styled-components";
import SignUpForm from "../components/SignUp/SignUpForm";

const SignUp = () => {
  return (
    <StDiv>
      <SignUpForm/>
    </StDiv>
    )
};

const StDiv = styled.div`
  color: var(--color-point-blue);
  width: 1000px;
  height: 600px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default SignUp;