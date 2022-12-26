import React from "react";
import styled from "styled-components";
import Button from "../components/elem/Button";
import Profile from "../components/Main/Profile";
import PostForm from "../components/Main/PostForm";
import Invite from "../components/Main/Invite";
import PostList from "../components/Main/PostList";
//import { AiOutlinePlus } from "react-icons/ai";

const Main = () => {
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
        <StAgitList>
          <StSubject>
            <HIcon src={"../../img/arrowdownicon.png"} alt="Hicon"></HIcon>내
            아지트 목록
          </StSubject>
          <Stlist>
            <li>아지트1</li>
            <li>아지트2</li>
            <li>아지트3</li>
          </Stlist>
        </StAgitList>
        <StAgitList>
          <StSubject>
            <HIcon src={"../../img/arrowdownicon.png"} alt="Hicon"></HIcon>
            아지트 멤버 목록
          </StSubject>

          <Stlist>
            <li>멤버1</li>
            <li>멤버2</li>
            <li>멤버3</li>
            <li>멤버4</li>
            <li>멤버5</li>
          </Stlist>
        </StAgitList>
      </StLeft>
      <StRight>
        <StheaderImg>
          <HeaderContent>
            <AgitName>아지트 이름</AgitName>
            <p>아지트 설명</p>
          </HeaderContent>
        </StheaderImg>
        <PostForm />
        <UpdateP>업데이트순</UpdateP>
        <PostList />
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

// const StlistFrame = styled.div`
//   height: auto;
//   border-bottom: 1px solid #e9e9e9;
// `;

const StAgitList = styled.div`
  margin-top: 10px;
  //border: 1px solid #dcdfe4;
  border-bottom: 1px solid #e9e9e9;
  border-radius: 2px;
  padding: 10px 10px 22px 24px;

  /* display: flex; */
  //justify-content: center;
  //align-items: flex-start;
  //align-content: center;
  /* flex-direction: column;
  height: auto; */
  //overflow: auto;
  //float: none;
`;

const StSubject = styled.p`
  color: #222;
  font-weight: 700;
`;

const Stlist = styled.ul`
  height: 25px;
  line-height: 26px;
  color: #808080;
  display: contents;
`;

const HIcon = styled.img`
  width: 16px;
  margin-left: -17px;
  padding-right: 5px;
`;

const StheaderImg = styled.div`
  position: relative;
  height: 175px;
  background-image: url(../../img/agitheader.png);
  background-position: center;
  background-size: cover;
  border-radius: 2px 2px 0 0;
`;
const AgitName = styled.h1`
  color: #fff;
`;

const HeaderContent = styled.div`
  position: relative;
  padding: 25px 18px 21px 30px;
  color: #fff;
  font-size: 14px;
  line-height: 17px;
`;

const UpdateP = styled.div`
  padding-left: 10px;
  color: #878787;
`;

export default Main;
