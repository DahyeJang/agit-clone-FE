import React from "react";
import styled from "styled-components";
import Button from "../components/elem/Button";

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
  height: 89px;
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

export default Main;
