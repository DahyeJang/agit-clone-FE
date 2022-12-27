// import React, { useEffect } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   changeField,
//   initializeForm,
//   __postLogin,
// } from "../../redux/modules/loginSlice";
// import Button from "../elem/Button";
// import LoginInput from "./LoginInput";

// const LoginForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { form } = useSelector(({ login }) => ({
//     form: login.login,
//   }));

//   // 컴포넌트가 처음 렌더링 될 때 form 초기화
//   useEffect(() => {
//     dispatch(initializeForm("login"));
//   }, [dispatch]);

//   // input값
//   const onChangeInputHandler = (e) => {
//     const { name, value } = e.target;
//     dispatch(
//       changeField({
//         form: "login",
//         key: name,
//         value,
//       })
//     );
//   };

//   // 로그인 버튼
//   const onClickToLoginHandler = (event) => {
//     event.preventDefault();
//     if (form.username === "" || form.password === "") {
//       alert("빈값을 입력해주세요!");
//     } else {
//       dispatch(__postLogin(form)).then((res) => {
//         navigate(`/@${res.payload.data.nickname}`);
//       });
//     }
//   };

//   return (
//     <div>
//       <FormContainer>
//         <form>
//           <LoginInput
//             name="loginId"
//             value={form.loginId}
//             onChangeInputHandler={onChangeInputHandler}
//             placeholder="아이디를 입력해주세요"
//           />
//           <LoginInput
//             name="password"
//             type="password"
//             value={form.password}
//             onChangeInputHandler={onChangeInputHandler}
//             placeholder="아이디를 입력해주세요"
//           />
//           <Button
//             width="100%"
//             margin="40px 0 0 0"
//             fontFamily="bold"
//             onClick={onClickToLoginHandler}
//           >
//             로그인
//           </Button>
//         </form>
//       </FormContainer>
//     </div>
//   );
// };

// const FormContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// export default LoginForm;
