import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __postcreateagit } from "../../redux/modules/agitCreateSlice";

const CreateAgitForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [agitName, setAgitName] = useState("");
  const [agitInfo, setAgitInfo] = useState("");

  const onCreateAgitBtn = (e) => {
    e.preventDefault();
    if (agitName === "" || agitInfo === "") {
      alert("아지트 명, 아지트 소개를 확인해주세요.");
    } else {
      dispatch(__postcreateagit({ agitName, agitInfo }));
      alert("아지트 생성 완료!");
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <div>
      <Create>아지트 생성하기</Create>
      <StDiv>
        <IdInput
          name="agitName"
          type="text"
          placeholder="아지트명을 입력해주세요."
          onChange={(e) => {
            const { value } = e.target;
            setAgitName(value);
          }}
        ></IdInput>
      </StDiv>
      <StDiv>
        <IdInput
          name="agitInfo"
          type="text"
          placeholder="아지트를 소개해주세요."
          onChange={(e) => {
            const { value } = e.target;
            setAgitInfo(value);
          }}
        ></IdInput>
      </StDiv>
      <StDiv>
        <CreateBtn
          onClick={(e) => {
            onCreateAgitBtn(e);
          }}
        >
          생성하기
        </CreateBtn>
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
