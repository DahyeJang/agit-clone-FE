import React from "react";
import styled from "styled-components";
import Button from "../elem/Button";
import Input from "../elem/Input";

const Invite = () => {
  return (
    <>
      <StInvite>
        <p>현재 아지트에 멤버 초대하기</p>
        <div>
          <Input />
          <Button backgroundColor="var(--color-point-blue)" color="#fff">
            초대
          </Button>
        </div>
      </StInvite>
    </>
  );
};

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
  padding: 10px 20px 20px 20px;
  align-content: center;

  div {
    display: flex;
    gap: 5px;
  }
`;

export default Invite;
