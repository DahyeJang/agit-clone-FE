import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../elem/Button";
// 리덕스
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  initializeForm,
  __postSignUp,
  __postCheckId,
  __postCheckNickname,
} from "../../redux/modules/signUpSlice";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const inputLoginId = useRef(null);
  const inputNickname = useRef(null);
  const navigate = useNavigate();
  const { form } = useSelector(({ signUpPost }) => ({
    form: signUpPost.signUp,
  }));
  const result = useSelector(({ signUpPost }) => signUpPost.result);
  const isLoginIdValid = useSelector(
    ({ signUpPost }) => signUpPost.isLoginIdValid
  );
  const isNicknameValid = useSelector(
    ({ signUpPost }) => signUpPost.isNicknameValid
  );

  // input값 수정
  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    dispatch(
      changeField({
        form: "signUp",
        key: name,
        value,
      })
    );
  };

  // Username 중복 찾기
  const onClickCheckUsername = (event) => {
    event.preventDefault();
    dispatch(__postCheckId({ loginId: form.loginId }));
    if (isLoginIdValid !== true) {
      inputLoginId.current.focus();
    }
  };

  // 닉네임 중복 찾기
  const onClickCheckNicknameId = (event) => {
    event.preventDefault();
    dispatch(__postCheckNickname({ nickname: form.nickname }));
    if (isNicknameValid !== true) {
      inputNickname.current.focus();
    }
  };

  // 회원가입 버튼 클릭
  const onClickSignUpHandler = (event) => {
    event.preventDefault();
    console.log(isLoginIdValid);
    console.log(isNicknameValid);
    if (
      form.username === "" ||
      form.password === "" ||
      form.passwordCheck === "" ||
      form.nickname === "" ||
      form.desc === ""
    ) {
      alert("빈값을 입력해주세요!");
    } else if (!isLoginIdValid) {
      alert("id 중복을 확인해주세요");
    } else if (!isNicknameValid) {
      alert("닉네임 중복을 확인해주세요");
    } else {
      const payloadForm = {
        loginId: form.loginId,
        password: form.password,
        nickname: form.nickname,
        description: form.description,
      };
      dispatch(__postSignUp(payloadForm), [dispatch]);
      // console.log(result)
      if (result === "success") {
        navigate("/login");
      }
    }
  };

  return (
    <Container>
      <h1>환영합니다!</h1>
      <h3>기본 회원 정보를 등록해주세요</h3>
      <form>
        <label htmlFor="loginId">아이디</label>
        <div>
          <input
            name="loginId"
            value={form.loginId}
            autoComplete="username"
            id="loginId"
            onChange={onChangeInputHandler}
            ref={inputLoginId}
            placeholder="영문 소문자, 숫자가 모두 포함된 4~12자리로 작성해주세요."
          ></input>
          <Button
            margin="0 0 0 15px"
            fontFamily="bold"
            onClick={onClickCheckUsername}
          >
            중복체크
          </Button>
        </div>
        {/* 아이디 규칙 적용 경고 수정필요*/}
        {!/^(?=.*\d)(?=.*[a-z])[0-9a-z]{4,12}$/.test(form.loginId) &&
          form.loginId && (
            <p>영문 소문자, 숫자가 모두 포함된 4~12자리로 작성해주세요.</p>
          )}

        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          name="password"
          autoComplete="new-password"
          value={form.password}
          id="password"
          onChange={onChangeInputHandler}
          placeholder="영문, 숫자, 특수문자가 모두 포함된 8~16자리로 작성해주세요."
        ></input>
        {/* 비밀번호 규칙 적용 경고 수정 필요*/}
        {!/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/.test(
          form.password
        ) &&
          form.password && (
            <p>영문, 숫자, 특수문자가 모두 포함된 8~16자리로 작성해주세요.</p>
          )}

        <label htmlFor="passwordCheck">비밀번호 확인</label>
        <input
          type="password"
          name="passwordCheck"
          autoComplete="new-password"
          value={form.passwordCheck}
          id="passwordCheck"
          onChange={onChangeInputHandler}
        ></input>

        {form.password !== form.passwordCheck && form.passwordCheck !== "" && (
          <p>비밀번호와 일치하지 않습니다</p>
        )}

        <label htmlFor="nickname">닉네임</label>
        <div>
          <input
            name="nickname"
            value={form.nickname}
            id="nickname"
            ref={inputNickname}
            onChange={onChangeInputHandler}
            placeholder="영문 소문자, 한글, 숫자로 구성된 2~8자리로 작성해주세요."
          ></input>
          <Button
            margin="0 0 0 15px"
            fontFamily="bold"
            onClick={onClickCheckNicknameId}
          >
            중복체크
          </Button>
        </div>
        {/* 닉네임 규칙 적용 경고*/}
        {!/^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,8}$/.test(form.nickname) &&
          form.nickname && (
            <p>영문 소문자, 한글, 숫자로만 구성된 2~8자리로 작성해주세요.</p>
          )}
        <label htmlFor="description">한줄 소개</label>
        <input
          name="description"
          value={form.description}
          id="description"
          onChange={onChangeInputHandler}
        ></input>
      </form>
      <ButtonContainer>
        <Button
          width="50%"
          margin="5px 5px 0 0"
          fontFamily="bold"
          fontSize="16px"
          onClick={() => {
            navigate("/login");
          }}
        >
          취소
        </Button>
        <Button
          width="50%"
          margin="5px 0 0 5px"
          fontFamily="bold"
          fontSize="16px"
          onClick={onClickSignUpHandler}
        >
          회원가입
        </Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 450px;
  color: white;
  margin-top: 100px;
  margin-bottom: 100px;
  h1 {
    margin-bottom: 10px;
    font-family: bold;
  }
  h3 {
    margin-bottom: 20px;
    font-size: 16px;
    font-family: light;
  }
  form {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      input {
        flex: 1;
      }
    }
    p {
      color: red;
      margin-top: 5px;
    }
    label {
      display: inline-block;
      margin-top: 20px;
      font-weight: 100;
    }
    input {
      flex: 1;
      padding: 10px 0;
      background: none;
      border-left-width: 0;
      border-right-width: 0;
      border-top-width: 0;
      border-bottom: solid 2px white;
      color: white;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

export default SignUpForm;
