import React from "react";
import styled from "styled-components";
import Button from "../components/elem/Button";
import Input from "../components/elem/Input";

const Main = () => {
  return (
    <>
      <StLeft>
        <StProfile>
          <StButtonSet>
            <Button backgroundColor="var(--color-point-blue)" color="#fff">
              로그인
            </Button>
            <Button>회원가입</Button>
          </StButtonSet>
        </StProfile>
        <Button
          height="47px"
          width="100%"
          backgroundColor="var(--color-point-blue)"
          color="#fff"
        >
          새로운 아지트 만들기
        </Button>
        <StInvite>
          <p>현재 아지트에 멤버 초대하기</p>
          <div>
            <Input />
            <Button backgroundColor="var(--color-point-blue)" color="#fff">
              초대
            </Button>
          </div>
        </StInvite>
        <StAgitList>
          <StSubject>내 아지트 목록</StSubject>
          <Stlist>
            <li>아지트1</li>
            <li>아지트2</li>
            <li>아지트3</li>
          </Stlist>
        </StAgitList>
        <StAgitList>
          <StSubject>아지트 멤버 목록</StSubject>
          <Stlist>
            <li>멤버1</li>
            <li>멤버2</li>
            <li>멤버3</li>
            <li>멤버4</li>
            <li>멤버5</li>
          </Stlist>
        </StAgitList>
      </StLeft>
      <StRight>들리니?</StRight>
    </>
  );
};

const StLeft = styled.div`
  float: left;
  width: 26.263%;
`;
const StRight = styled.div`
  float: left;
  position: relative;
  width: 73.737%;
  margin-bottom: 50px;
`;

const StProfile = styled.div`
  margin-bottom: 10px;
  border: 1px solid #dcdfe4;
  border-radius: 2px;
  background-color: #fff;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  align-content: center;
`;

const StInvite = styled.div`
  margin-top: 10px;
  border: 1px solid #dcdfe4;
  border-radius: 2px;
  background-color: #fff;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  align-content: center;

  div {
    display: flex;
    gap: 5px;
  }
`;

const StButtonSet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  align-content: center;
`;
const StlistFrame = styled.div`
  height: auto;
  border-bottom: 1px solid #e9e9e9;
`;

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

export default Main;
