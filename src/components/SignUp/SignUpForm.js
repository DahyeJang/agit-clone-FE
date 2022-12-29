import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../core/api/axios";
import { __postsignup } from "../../redux/modules/signUpSlice";

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUserName] = useState("");
  const [nickname, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [usernameMsg, setUserNameMsg] = useState("");
  const [nicknameMsg, setNickNameMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [passwordCheckMsg, setPasswordCheckMsg] = useState("");

  const [isUserName, setIsUserName] = useState(false);
  const [isNickName, setIsNickName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordCheck, setIsPassworkCheck] = useState(false);
  const [isUserNameCheck, setIsUserNameCheck] = useState(false);

  const usernameRegex = /^(?=.*?[a-z])(?=.*?[0-9]).{4,12}$/;
  // 소문자 + 숫자 4자 이상 12자 이하 유저네임
  const onChangeUserName = useCallback((e) => {
    const usernameCurrent = e.target.value;
    setUserName(usernameCurrent);

    if (!usernameRegex.test(usernameCurrent)) {
      setUserNameMsg(
        "영문 소문자, 숫자가 모두 포함된 4~12자리로 작성해주세요."
      );
      setIsUserName(false);
    } else {
      setUserNameMsg("올바른 형식 입니다.");
      setIsUserName(true);
    }
  }, []);
  // 2자이상 10자 이하 닉네임 (특수문자 공백 x)
  const onChangeNickName = useCallback((e) => {
    setNickName(e.target.value);
    if (e.target.value < 2 || e.target.value > 10) {
      setNickNameMsg(`올바르지 않은 닉네임 형식 입니다.`);
      setIsNickName(false);
    } else {
      setNickNameMsg(`올바른 닉네임 형식 입니다.`);
      setIsNickName(true);
    }
  }, []);
  // 8자 이상 영문 소문자,특수문자,숫자 조합 비밀번호
  const onChangePassword = useCallback(
    (e) => {
      const passwordRegex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,25}$/;
      const passwordCurrent = e.target.value;
      setPassword(passwordCurrent);

      if (!passwordRegex.test(passwordCurrent)) {
        setPasswordMsg(
          "영문자+숫자+특수문자 조합으로 8자리 이상 입력해주세요."
        );
        setIsPassword(false);
      } else {
        setPasswordMsg("안전한 비밀번호입니다.");
        setIsPassword(true);
      }
    },
    [password]
  );
  // 위에 password와 일치하는지 여부 확인
  const onChangePasswordCheck = useCallback(
    (e) => {
      const passwordCheckCurrent = e.target.value;
      setPasswordCheck(passwordCheckCurrent);

      if (password === passwordCheckCurrent) {
        setPasswordCheckMsg("비밀번호가 일치합니다.");
        setIsPassworkCheck(true);
      } else {
        setPasswordCheckMsg("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
        setIsPassworkCheck(false);
      }
    },
    [password]
  );

  const onUserNameCheck = () => {
    if (username.length === 0) {
      alert("아이디를 입력해주세요.");
      return;
    } else if (!usernameRegex.test(username)) {
      alert("올바른 형식이 아닙니다.");
      return;
    }
    userNameCheck({ username });
  };

  const userNameCheck = async (post) => {
    try {
      const data = await instance.post(`/user/idcheck`, post);
      if (data.data.statusCode === 200) {
        alert("사용 가능한 아이디 입니다.");
        setIsUserNameCheck(true);
      } else {
        alert("중복된 아이디 입니다.");
      }
    } catch (error) {}
  };

  const onClickSignUpBtn = () => {
    dispatch(__postsignup({ username, nickname, password }));
    alert("회원가입 완료!");
    navigate("/login");
  };

  return (
    <div>
      <Login>아지트 회원가입</Login>
      <div
        style={{
          position: "relative",
        }}
      >
        <StDiv>
          <IdInput
            type="text"
            placeholder="아이디를 입력해주세요."
            onChange={onChangeUserName}
          />
          <OverlapBtn
            type="button"
            onClick={() => {
              onUserNameCheck();
            }}
          >
            중복체크
          </OverlapBtn>
        </StDiv>
        {username.length > 0 && (
          <span
            style={{
              color: isUserName ? "var(--color-point-blue)" : "#f85032",
              position: "absolute",
            }}
            className={`message ${isUserName ? "success" : "error"}`}
          >
            {usernameMsg}
          </span>
        )}
      </div>
      <div
        style={{
          position: "relative",
        }}
      >
        <StDivv>
          <StInput
            type="text"
            placeholder="닉네임을 입력해주세요."
            onChange={onChangeNickName}
          />
        </StDivv>
        {nickname.length > 1 && (
          <span
            style={{
              color: isNickName ? "var(--color-point-blue)" : "#f85032",
              position: "absolute",
            }}
            className={`message ${isNickName ? "success" : "error"}`}
          >
            {nicknameMsg}
          </span>
        )}
      </div>
      <div
        style={{
          position: "relative",
        }}
      >
        <StDivvv>
          <StInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={onChangePassword}
          />
        </StDivvv>
        {password.length > 0 && (
          <span
            style={{
              color: isPassword ? "var(--color-point-blue)" : "#f85032",
              position: "absolute",
            }}
            className={`message ${isPassword ? "success" : "error"}`}
          >
            {passwordMsg}
          </span>
        )}
      </div>
      <div
        style={{
          position: "relative",
        }}
      >
        <StDiv>
          <StInput
            type="password"
            placeholder="비밀번호를 확인해주세요."
            onChange={onChangePasswordCheck}
          />
        </StDiv>
        {passwordCheck.length > 0 && (
          <span
            style={{
              color: isPasswordCheck ? "var(--color-point-blue)" : "#f85032",
              position: "absolute",
            }}
            className={`message ${isPasswordCheck ? "success" : "error"}`}
          >
            {passwordCheckMsg}
          </span>
        )}
      </div>
      <StDiv>
        <CreateBtn
          type="submit"
          disabled={
            !(
              isUserName &&
              isNickName &&
              isPassword &&
              isPasswordCheck &&
              isUserNameCheck
            )
          }
          onClick={onClickSignUpBtn}
        >
          회원가입
        </CreateBtn>
      </StDiv>
    </div>
  );
};

export default SignUpForm;

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
  margin-top: 25px;
`;

const StDivv = styled.div`
  margin-top: 25px;
`;

const StDivvv = styled.div`
  margin-top: 25px;
`;

const StInput = styled.input`
  width: 482px;
  height: 60px;
  padding: 0px 0px 0px 20px;
  font-size: medium;
  border: 1px solid #e2e2e2;
`;
const IdInput = styled.input`
  width: 422px;
  height: 60px;
  padding: 0px 0px 0px 20px;
  font-size: medium;
  border: 1px solid #e2e2e2;
`;

const CreateBtn = styled.button`
  color: white;
  width: 504px;
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

const OverlapBtn = styled.button`
  height: 61px;
  color: white;
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
