import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import basicImg from "../../img/basicImg.png";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { AiOutlineEllipsis } from "react-icons/ai";
import Button from "../elem/Button";
const CreateAgitForm = () => {
  const navigate = useNavigate();

  const createAgitBtn = () => {
    navigate("/");
  };

  return (
    <div>
      <MainDiv>
        {/* <HeaderDiv>아지트 명</HeaderDiv> */}
        <SuvDiv>
          <Photo src={basicImg} />
          <InDiv>
            <Nick>닉네임이 들어갑니다.</Nick>
            <DateDiv>2022월 12월 23일(금)23:39</DateDiv>
          </InDiv>
        </SuvDiv>
        <Content>내용이 들어갑니다.</Content>
        <BtnDiv>
          <div>
            <MsgBtn>
              <span>댓글</span>
              <Num>1</Num>
            </MsgBtn>
            <LikeBtn type="button">
              <BsHandThumbsUp />
            </LikeBtn>
            <HateBtn type="button">
              <BsHandThumbsDown />
            </HateBtn>
          </div>
          <EtcBtn type="button">
            <AiOutlineEllipsis />
          </EtcBtn>
        </BtnDiv>
        <PostInput placeholder="댓글을 입력해주세요."></PostInput>
        <FormButton>
          <Button>취소</Button>
          <Button
            borderColor="rgba(88, 132, 224, 0.2)"
            backgroundColor="rgba(88, 132, 224, 0.7)"
            color="white"
            //disabled={!isActive}
          >
            작성하기
          </Button>
        </FormButton>
      </MainDiv>
      <MMainDiv>
        <SuvDiv>
          <PPhoto src={basicImg} />
          <InDiv>
            <NNick>닉네임이 들어갑니다.</NNick>
            <DateDiv>2022월 12월 23일(금)23:39</DateDiv>
          </InDiv>
        </SuvDiv>
        <CContent>댓글이 들어갑니다.</CContent>
        <BtnDiv>
          <CmtInput placeholder="댓글을 입력해주세요."></CmtInput>
        </BtnDiv>
      </MMainDiv>
    </div>
  );
};

export default CreateAgitForm;

const MainDiv = styled.div`
  //height: 222px;
  border: 1px solid #e2e2e2;
  padding: 0px 20px 30px;
  background-color: #fff;
  margin-top: 15px;
  display: inline-block;
`;

const MMainDiv = styled.div`
  //height: 198px;
  border: 1px solid #e2e2e2;
  padding: 12px 20px 40px;
  background-color: #fff;
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

const PPhoto = styled.img`
  display: inline-block;
  position: relative;
  padding-left: 20px;
  border-radius: 50%;
  background-origin: padding-box;
  background-position: 50% 50%;
  background-size: cover;
  vertical-align: top;
  width: 36px;
  height: 36px;
`;

const SuvDiv = styled.div`
  position: relative;
  display: flex;
  clear: both;
  padding-top: 15px;
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

const NNick = styled.div`
  display: block;
  font-weight: bold;
  font-size: 13px;
  line-height: 21px;
  color: #404040;
`;

const DateDiv = styled.div`
  font-weight: 400;
  font-size: 11px;
  color: #979797;
`;

const Content = styled.div`
  width: 678px;
  padding-top: 10px;
  padding-left: 10px;
  margin-bottom: 0;
  word-wrap: break-word;
  word-break: break-all;
  color: #404040;
`;

const CContent = styled.div`
  //width: 678px;
  //padding-top: 10px;
  padding-left: 60px;
  margin-bottom: 0;
  font-size: 13px;
  word-wrap: break-word;
  word-break: break-all;
  color: #404040;
`;

const BtnDiv = styled.div`
  //width: 720px;
  height: 24px;
  display: flex;
  //position: relative;
  //clear: both;
  margin-top: 25px;
  padding-left: 10px;
  justify-content: space-between;
`;

const MsgBtn = styled.span`
  display: inline-block;
  height: 22px;
  margin-right: 10px;
  padding: 0 6px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  font-size: 13px;
  line-height: 22px;
  color: #5c5c5c;
  text-align: center;
  vertical-align: top;
`;

const Num = styled.span`
  padding-left: 4px;
  color: #5985dc;
`;

const LikeBtn = styled.button`
  background-color: white;
  margin-right: 10px;
  color: #5c5c5c;
  margin-top: 0.3px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  width: 26px;
  height: 23px;
`;

const HateBtn = styled.button`
  background-color: white;
  color: #5c5c5c;
  margin-top: 0.3px;
  //margin-left: 5px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  width: 26px;
  height: 23px;
`;

const EtcBtn = styled.button`
  background-color: white;
  color: #5c5c5c;
  margin-top: 0.3px;
  //margin-left: 575px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  width: 26px;
  height: 23px;
`;

const PostInput = styled.input`
  width: 687px;
  margin: 20px 0px 10px 10px;
  //padding-right: -10px;
  //margin-bottom: 30px;
  height: 27px;
  color: #333333;
  //padding: 0px 0px 0px 15px;
  //margin-left: 50px;
  border: 1px solid #e0e0e0;
`;

const CmtInput = styled.input`
  width: 610px;
  height: 27px;
  color: #333333;
  padding: 0px 0px 0px 15px;
  margin-left: 50px;
  border: 1px solid #e0e0e0;
`;

const FormButton = styled.div`
  position: relative;
  height: 28px;
  padding-top: 10px;
  float: right;
  Button {
    &:first-child {
      margin-right: 5px;
    }
  }
`;
