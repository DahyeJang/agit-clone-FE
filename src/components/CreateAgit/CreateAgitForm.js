import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import basicImg from "../../img/basicImg.png";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { AiOutlineEllipsis } from "react-icons/ai";
const CreateAgitForm = () => {
  const navigate = useNavigate();

  const createAgitBtn = () => {
    navigate("/");
  };

  return (
    <div>
      <Create>아지트 생성하기</Create>
      <StDiv>
        <IdInput placeholder="아지트명을 입력해주세요."></IdInput>
      </StDiv>
      <StDiv>
        <CreateBtn onClick={createAgitBtn}>생성하기</CreateBtn>
      </StDiv>
    </div>
  );
};

export default CreateAgitForm;

const Create = styled.div`
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

const IdInput = styled.input`
  width: 482px;
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

//

const MainDiv = styled.div`
  display: block;
  width: 728px;
  height: 222px;
  border: 1px solid #e2e2e2;
  padding: 0px 20px 20px;
`;

const MMainDiv = styled.div`
  display: block;
  width: 728px;
  height: 198px;
  border: 1px solid #e2e2e2;
  padding: 12px 20px 20px;
`;

const HeaderDiv = styled.div`
  color: #333333;
  font-size: medium;
  padding: 20px 0px 14px;
  border-bottom: 1px solid #e2e2e2;
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
  width: 678px;
  padding-top: 10px;
  padding-left: 60px;
  margin-bottom: 0;
  font-size: 13px;
  word-wrap: break-word;
  word-break: break-all;
  color: #404040;
`;

const BtnDiv = styled.div`
  width: 720px;
  height: 24px;
  position: relative;
  clear: both;
  padding-top: 25px;
  padding-left: 10px;
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
  margin-left: 5px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  width: 26px;
  height: 23px;
`;

const EtcBtn = styled.button`
  background-color: white;
  color: #5c5c5c;
  margin-top: 0.3px;
  margin-left: 575px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  width: 26px;
  height: 23px;
`;

const CmtInput = styled.input`
  width: 610px;
  height: 22px;
  color: #333333;
  padding: 0px 0px 0px 15px;
  margin-left: 50px;
  border: 1px solid #e0e0e0;
`;
