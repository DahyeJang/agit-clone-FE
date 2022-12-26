import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../elem/Button";
import basicImg from "../../img/basicImg.png";
import { CiLogout } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { __getUser } from "../../redux/modules/userInfoGetSlice";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(__getInfo(param));
    dispatch(__getUser());
  }, [dispatch]);

  const aaa = useSelector((state) => state);

  return (
    <>
      <StProfile>
        <StButtonSet>
          <Button backgroundColor="var(--color-point-blue)" color="#fff">
            로그인
          </Button>
          <Button>회원가입</Button>
        </StButtonSet>
      </StProfile>
      <StLogin>
        <SuvDiv>
          <Photo src={basicImg} />
          <InDiv>
            <Nick>아이디</Nick>
            <DateDiv>닉네임</DateDiv>
          </InDiv>
        </SuvDiv>
        <CiLogout />
      </StLogin>
    </>
  );
};

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

const StButtonSet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  align-content: center;
`;

const StLogin = styled.div`
  margin-bottom: 10px;
  border: 1px solid #dcdfe4;
  border-radius: 2px;
  background-color: #fff;
  height: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  align-content: center;
`;

const SuvDiv = styled.div`
  //position: relative;
  display: flex;
  //clear: both;
  padding-top: 15px;
  //justify-content: flex-start;
`;

const Photo = styled.img`
  display: inline-block;
  position: relative;
  border-radius: 50%;
  background-origin: padding-box;
  background-position: 50% 50%;
  background-size: cover;
  vertical-align: top;
  width: 50px;
  height: 50px;
`;

const InDiv = styled.div`
  padding-left: 10px;
  margin-bottom: 26px;
  padding-top: 9px;
`;

const Nick = styled.div`
  display: block;
  font-weight: bold;
  font-size: 17px;
  line-height: 21px;
  color: #404040;
`;

const DateDiv = styled.div`
  font-weight: 400;
  font-size: 11px;
  color: #979797;
`;

export default Profile;
