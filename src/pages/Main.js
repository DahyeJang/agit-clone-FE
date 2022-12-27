import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import Button from "../components/elem/Button";
import Profile from "../components/Main/Profile";
import PostForm from "../components/Main/PostForm";
import Invite from "../components/Main/Invite";
import PostList from "../components/Main/PostList";
import AgitList from "../components/Main/AgitList";
import AgitMember from "../components/Main/AgitMember";
import AgitHeader from "../components/Main/AgitHeader";
//import { AiOutlinePlus } from "react-icons/ai";

const Main = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isHaveAgit, setHaveAgit] = useState(false);

  // const data = useSelector((state) => state);

  // const loginUser = useSelector((state) => state.userInfoGet.userInfo);
  // //console.log("userInfoGet", userInfoGet);
  // //console.log("data", data);

  const userInfoGetData = useSelector((state) => state.userInfoGet);
  //const { userInfo, agitList } = userInfoGetData;

  // console.log("agitList", agitList);

  useEffect(() => {
    if (userInfoGetData.userInfo !== null) {
      setIsLogin(true);
    }

    if (userInfoGetData.agitList.length !== 0) {
      setHaveAgit(true);
    }
    // switch (userInfoGetData) {
    //   case userInfoGetData.userInfo !== null:
    //     setIsLogin(true);
    //   case userInfoGetData.agitList.length !== 0:
    //     setHaveAgit(true);
    //     break;
    // }
  }, []);

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
`;

const UpdateP = styled.div`
  padding-left: 10px;
  color: #878787;
`;

export default Main;
