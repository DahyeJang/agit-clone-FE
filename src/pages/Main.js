import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL, instance } from "../../src/core/api/axios";

import styled from "styled-components";
import Button from "../components/elem/Button";
import Profile from "../components/Main/Profile";
import PostForm from "../components/Main/PostForm";
import Invite from "../components/Main/Invite";
import PostList from "../components/Main/PostList";
import AgitList from "../components/Main/AgitList";
import AgitHeader from "../components/Main/AgitHeader";
//import { AiOutlinePlus } from "react-icons/ai";

const Main = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [isHaveAgit, setHaveAgit] = useState(false);

  const userInfoGetData = useSelector((state) => state.userInfoGet);

  useEffect(() => {
    const myInfo = async () => {
      try {
        const data = await baseURL.get(`/user`);
        //console.log("data.data.data", data.data.data);
        setIsLogin(data.data.data);
      } catch (error) {
        //console.log(error);
        setIsLogin(false);
      }
    };
    myInfo();

    if (userInfoGetData.agitList.length !== 0) {
      setHaveAgit(true); //오류생김. 0인데 왜 true?
    }
  }, []);

  //const { userInfo, agitList } = userInfoGetData;

  //console.log("isHaveAgit", userInfoGetData.agitList.length);

  // useEffect(() => {
  //   //이게 되는 것임!
  //   if (userInfoGetData.userInfo.length !== undefined) {
  //     setIsLogin(true);
  //   }

  //   //모달 만들기 위해
  //   // if (userInfoGetData.userInfo !== null) {
  //   //   setIsLogin(true);
  //   // }

  //   if (userInfoGetData.agitList.length !== 0) {
  //     setHaveAgit(true);
  //   }
  //   // switch (userInfoGetData) {
  //   //   case userInfoGetData.userInfo !== null:
  //   //     setIsLogin(true);
  //   //   case userInfoGetData.agitList.length !== 0:
  //   //     setHaveAgit(true);
  //   //     break;
  //   // }
  // }, []);

  //console.log("isHaveAgit", isHaveAgit);

  return (
    <>
      <StLeft>
        <Profile />
        <Button
          height="47px"
          width="100%"
          backgroundColor="var(--color-point-blue)"
          color="#fff"
          onClick={() => {
            navigate("createagit");
          }}
          // display="flex"
          // justifyContent="space-around"
          // gap="10px"
        >
          {/* <AiOutlinePlus /> */}
          새로운 아지트 만들기
        </Button>
        <Invite />
        <AgitList />
      </StLeft>
      <StRight>
        {!isLogin && <h3>로그인을 진행해주세요</h3>}
        {isLogin && !isHaveAgit && <h3>아지트를 만드세요</h3>}
        {isLogin && isHaveAgit && (
          <>
            <AgitHeader />
            <PostForm />
            <UpdateP>업데이트순</UpdateP>
            <PostList />
          </>
        )}
      </StRight>
    </>
  );
};

const StLeft = styled.div`
  float: left;
  width: 25%;
  padding-right: 20px;
`;
const StRight = styled.div`
  float: left;
  position: relative;
  width: 73%;
  margin-bottom: 50px;
  h3 {
    display: flex;
    justify-content: center;
  }
`;

const UpdateP = styled.div`
  padding-left: 10px;
  color: #878787;
`;

export default Main;
