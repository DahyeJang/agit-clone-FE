import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { baseURL, instance } from "../../core/api/axios";
import { setCookies } from "../../core/api/cookieControler";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const postLogin = async (post) => {
    try {
      const data = await baseURL.post("/user/login", post);
      if (data.data.statusCode === 200) {
        return data;
      } else {
        alert("아이디, 비밀번호를 확인해주세요.");
      }
    } catch (error) {}
  };  

  const onSubmitHandler = () => {
    if (username === "" || password === "") {
      alert("아이디, 비밀번호를 확인해주세요.");
    } else {
    }
    postLogin({
      username,
      password,
    }).then((res) => {
      if (res === undefined) {
        navigate("/login");
      } else {
        setCookies("Authorization", res.headers.authorization, { path: "/" });
        alert("로그인 완료!");
        navigate("/");
      }
    });
  };

  return (
    <div>
      <Login>아지트 로그인</Login>
      <StDiv>
        <StInput
          name="username"
          type="text"
          placeholder="아이디"
          onChange={(e) => {
            const { value } = e.target;
            setUserName(value);
          }}
        ></StInput>
      </StDiv>
      <StDiv>
        <StInput
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={(e) => {
            const { value } = e.target;
            setPassword(value);
          }}
        ></StInput>
      </StDiv>
      <StDiv>
        <BtnDiv>
          <EndButton
            onClick={(e) => {
              onSubmitHandler(e);
            }}
          >
            로그인
          </EndButton>
          <EndButton
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </EndButton>
        </BtnDiv>
      </StDiv>
    </div>
  );
};

export default LoginForm;

const Login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 35px;
  color: black;
`;

const StDiv = styled.div`
  margin-bottom: 10px;
`;

const StInput = styled.input`
  width: 482px;
  height: 60px;
  padding: 0px 0px 0px 20px;
  font-size: medium;
  border: 1px solid #e2e2e2;
`;

const EndButton = styled.button`
  color: white;
  width: 250px;
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
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
