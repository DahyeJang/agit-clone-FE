import React from "react";
import styled from "styled-components";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  return (
    <StDiv>
      <LoginForm />
    </StDiv>
  );
};

export default Login;

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
