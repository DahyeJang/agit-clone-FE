import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../core/api/axios";

import styled from "styled-components";
import Button from "../components/elem/Button";
import Profile from "../components/Main/Profile";
import PostForm from "../components/Main/PostForm";
import Invite from "../components/Main/Invite";
import PostList from "../components/Main/PostList";
import AgitList from "../components/Main/AgitList";
import AgitHeader from "../components/Main/AgitHeader";

const Main = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [isHaveAgit, setHaveAgit] = useState(false);

  const userInfoGetData = useSelector((state) => state.userInfoGet);

  useEffect(async () => {
    try {
      const data = await baseURL.get(`/user`);
      setIsLogin(data.data.data);
    } catch (error) {
      setIsLogin(false);
    }
  }, []);

  useEffect(() => {
    if (userInfoGetData.agitList.length !== 0) {
      setHaveAgit(true); //오류생김. 0인데 왜 true? > 기본값이 빈객체 , 1[{}]
    }

  }, [userInfoGetData]);

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
            navigate("/createagit");
            window.location.reload();
          }}
        >
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
