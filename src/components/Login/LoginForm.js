import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginForm = () => {

  const navigate = useNavigate();

  const signUpBtn = () => {
    navigate("/SignUp")
  }
  return (
    <div>
      <Login>아지트 로그인</Login>
      <StDiv>
       <StInput placeholder="아이디"></StInput>
    </StDiv>
    <StDiv>
    <StInput placeholder="비밀번호"></StInput>
    </StDiv>
    <StDiv>
    <BtnDiv><EndButton>다음</EndButton>
      <EndButton onClick={signUpBtn}>회원가입</EndButton></BtnDiv>
    </StDiv>
    </div>
  )
}

export default LoginForm;

const Login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 35px;
  color: black;
`

const StDiv = styled.div`
  margin-bottom: 10px;
`

const StInput = styled.input`
  width: 482px;
  height: 60px;
  padding: 0px 0px 0px 20px;
  font-size: medium;
  border: 1px solid #e2e2e2;
`

const EndButton = styled.button`
  color: white;
  width:250px;
  height: 60px;
  font-size: medium;
  border: 1px solid var(--color-point-blue);
  background-color: var(--color-point-blue);

  &:hover,
  &:active {
    color: white;
    background: #5a86dd;
    border-color: #5a86dd;
  }
  &:focus {
    outline: none;
  }
`

const BtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
`