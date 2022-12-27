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
      setUserNameMsg("올바른 형식이 아닙니다.");
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

  const onUserNameCheck = (e) => {
    // e.preventDefault();
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
      <StDiv>
        <IdInput
          type="text"
          placeholder="영문 소문자, 숫자가 모두 포함된 4~12자리로 작성해주세요.."
          onChange={onChangeUserName}
          // disabled={isUserName}
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
          style={{ color: isUserName ? "var(--color-point-blue)" : "#f85032" }}
          className={`message ${isUserName ? "success" : "error"}`}
        >
          {usernameMsg}
        </span>
      )}
      <StDiv>
        <StInput
          type="text"
          placeholder="닉네임을 입력해주세요."
          onChange={onChangeNickName}
          // disabled={isNickName}
        />
      </StDiv>
      {nickname.length > 1 && (
        <span
          style={{ color: isNickName ? "var(--color-point-blue)" : "#f85032" }}
          className={`message ${isNickName ? "success" : "error"}`}
        >
          {nicknameMsg}
        </span>
      )}
      <StDiv>
        <StInput
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={onChangePassword}
        />
      </StDiv>
      {password.length > 0 && (
        <span
          style={{ color: isPassword ? "var(--color-point-blue)" : "#f85032" }}
          className={`message ${isPassword ? "success" : "error"}`}
        >
          {passwordMsg}
        </span>
      )}
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
          }}
          className={`message ${isPasswordCheck ? "success" : "error"}`}
        >
          {passwordCheckMsg}
        </span>
      )}
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
  margin-bottom: 10px;
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
// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import Button from "../elem/Button";
// // 리덕스
// import { useDispatch, useSelector } from "react-redux";
// import {
//   changeField,
//   initializeForm,
//   __postSignUp,
//   __postCheckId,
//   __postCheckNickname,
// } from "../../redux/modules/signUpSlice";
// import { useRef } from "react";
// import { useNavigate } from "react-router-dom";

// const SignUpForm = () => {
//   const dispatch = useDispatch();
//   const inputLoginId = useRef(null);
//   const inputNickname = useRef(null);
//   const navigate = useNavigate();
//   const { form } = useSelector(({ signUpPost }) => ({
//     form: signUpPost.signUp,
//   }));
//   const result = useSelector(({ signUpPost }) => signUpPost.result);
//   const isLoginIdValid = useSelector(
//     ({ signUpPost }) => signUpPost.isLoginIdValid
//   );
//   const isNicknameValid = useSelector(
//     ({ signUpPost }) => signUpPost.isNicknameValid
//   );

//   // input값 수정
//   const onChangeInputHandler = (event) => {
//     const { name, value } = event.target;
//     dispatch(
//       changeField({
//         form: "signUp",
//         key: name,
//         value,
//       })
//     );
//   };

//   // Username 중복 찾기
//   const onClickCheckUsername = (event) => {
//     event.preventDefault();
//     dispatch(__postCheckId({ loginId: form.loginId }));
//     if (isLoginIdValid !== true) {
//       inputLoginId.current.focus();
//     }
//   };

//   // 닉네임 중복 찾기
//   const onClickCheckNicknameId = (event) => {
//     event.preventDefault();
//     dispatch(__postCheckNickname({ nickname: form.nickname }));
//     if (isNicknameValid !== true) {
//       inputNickname.current.focus();
//     }
//   };

//   // 회원가입 버튼 클릭
//   const onClickSignUpHandler = (event) => {
//     event.preventDefault();
//     console.log(isLoginIdValid);
//     console.log(isNicknameValid);
//     if (
//       form.username === "" ||
//       form.password === "" ||
//       form.passwordCheck === "" ||
//       form.nickname === "" ||
//       form.desc === ""
//     ) {
//       alert("빈값을 입력해주세요!");
//     } else if (!isLoginIdValid) {
//       alert("id 중복을 확인해주세요");
//     } else if (!isNicknameValid) {
//       alert("닉네임 중복을 확인해주세요");
//     } else {
//       const payloadForm = {
//         loginId: form.loginId,
//         password: form.password,
//         nickname: form.nickname,
//         description: form.description,
//       };
//       dispatch(__postSignUp(payloadForm), [dispatch]);
//       // console.log(result)
//       if (result === "success") {
//         navigate("/login");
//       }
//     }
//   };

//   return (
//     <Container>
//       <h1>환영합니다!</h1>
//       <h3>기본 회원 정보를 등록해주세요</h3>
//       <form>
//         <label htmlFor="loginId">아이디</label>
//         <div>
//           <input
//             name="loginId"
//             value={form.loginId}
//             autoComplete="username"
//             id="loginId"
//             onChange={onChangeInputHandler}
//             ref={inputLoginId}
//             placeholder="영문 소문자, 숫자가 모두 포함된 4~12자리로 작성해주세요."
//           ></input>
//           <Button
//             margin="0 0 0 15px"
//             fontFamily="bold"
//             onClick={onClickCheckUsername}
//           >
//             중복체크
//           </Button>
//         </div>
//         {/* 아이디 규칙 적용 경고 수정필요*/}
//         {!/^(?=.*\d)(?=.*[a-z])[0-9a-z]{4,12}$/.test(form.loginId) &&
//           form.loginId && (
//             <p>영문 소문자, 숫자가 모두 포함된 4~12자리로 작성해주세요.</p>
//           )}

//         <label htmlFor="password">비밀번호</label>
//         <input
//           type="password"
//           name="password"
//           autoComplete="new-password"
//           value={form.password}
//           id="password"
//           onChange={onChangeInputHandler}
//           placeholder="영문, 숫자, 특수문자가 모두 포함된 8~16자리로 작성해주세요."
//         ></input>
//         {/* 비밀번호 규칙 적용 경고 수정 필요*/}
//         {!/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/.test(
//           form.password
//         ) &&
//           form.password && (
//             <p>영문, 숫자, 특수문자가 모두 포함된 8~16자리로 작성해주세요.</p>
//           )}

//         <label htmlFor="passwordCheck">비밀번호 확인</label>
//         <input
//           type="password"
//           name="passwordCheck"
//           autoComplete="new-password"
//           value={form.passwordCheck}
//           id="passwordCheck"
//           onChange={onChangeInputHandler}
//         ></input>

//         {form.password !== form.passwordCheck && form.passwordCheck !== "" && (
//           <p>비밀번호와 일치하지 않습니다</p>
//         )}

//         <label htmlFor="nickname">닉네임</label>
//         <div>
//           <input
//             name="nickname"
//             value={form.nickname}
//             id="nickname"
//             ref={inputNickname}
//             onChange={onChangeInputHandler}
//             placeholder="영문 소문자, 한글, 숫자로 구성된 2~8자리로 작성해주세요."
//           ></input>
//           <Button
//             margin="0 0 0 15px"
//             fontFamily="bold"
//             onClick={onClickCheckNicknameId}
//           >
//             중복체크
//           </Button>
//         </div>
//         {/* 닉네임 규칙 적용 경고*/}
//         {!/^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,8}$/.test(form.nickname) &&
//           form.nickname && (
//             <p>영문 소문자, 한글, 숫자로만 구성된 2~8자리로 작성해주세요.</p>
//           )}
//         <label htmlFor="description">한줄 소개</label>
//         <input
//           name="description"
//           value={form.description}
//           id="description"
//           onChange={onChangeInputHandler}
//         ></input>
//       </form>
//       <ButtonContainer>
//         <Button
//           width="50%"
//           margin="5px 5px 0 0"
//           fontFamily="bold"
//           fontSize="16px"
//           onClick={() => {
//             navigate("/login");
//           }}
//         >
//           취소
//         </Button>
//         <Button
//           width="50%"
//           margin="5px 0 0 5px"
//           fontFamily="bold"
//           fontSize="16px"
//           onClick={onClickSignUpHandler}
//         >
//           회원가입
//         </Button>
//       </ButtonContainer>
//     </Container>
//   );
// };

// const Container = styled.div`
//   width: 450px;
//   color: white;
//   margin-top: 100px;
//   margin-bottom: 100px;
//   h1 {
//     margin-bottom: 10px;
//     font-family: bold;
//   }
//   h3 {
//     margin-bottom: 20px;
//     font-size: 16px;
//     font-family: light;
//   }
//   form {
//     margin-bottom: 40px;
//     display: flex;
//     flex-direction: column;
//     div {
//       display: flex;
//       input {
//         flex: 1;
//       }
//     }
//     p {
//       color: red;
//       margin-top: 5px;
//     }
//     label {
//       display: inline-block;
//       margin-top: 20px;
//       font-weight: 100;
//     }
//     input {
//       flex: 1;
//       padding: 10px 0;
//       background: none;
//       border-left-width: 0;
//       border-right-width: 0;
//       border-top-width: 0;
//       border-bottom: solid 2px white;
//       color: white;
//     }
//   }
// `;

// const ButtonContainer = styled.div`
//   display: flex;
// `;

// export default SignUpForm;
