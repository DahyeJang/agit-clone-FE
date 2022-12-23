import React from "react";
import styled from "styled-components";
import SignUpForm from "../components/signUp/SignUpForm";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const SignUp = () => {
  return (
    <Container>
      <SignUpForm />
    </Container>
  );
};

export default SignUp;
