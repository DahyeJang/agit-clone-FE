import React from "react";
import styled from "styled-components";
import Button from "../elem/Button";

const Profile = () => {
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

export default Profile;
