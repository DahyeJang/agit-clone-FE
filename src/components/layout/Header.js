import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <MainTitle>
      <StDiv>
        <HIcon
          src={
            "https://velog.velcdn.com/images/posinity/post/3a461e10-687b-49d8-87b3-803beaf707a1/image.png"
          }
          alt="Hicon"
        ></HIcon>
        <StLine></StLine>
        <p>항해99의 아지트</p>
      </StDiv>
    </MainTitle>
  );
};

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: aliceblue;
`;

const MainTitle = styled.div`
  min-width: 1020px;
  width: 100%;
  height: 69px;
  color: #444;
  background-color: rgba(255, 255, 255, 0.96);
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  -webkit-backdrop-filter: blur(40px);
  transform: translateZ(0);
  background-repeat: no-repeat;
  background-size: 90px auto;
  background-position: left center;
  display: flex;
  align-items: center;
  align-content: center;
  /*상단메뉴 고정*/
  background-color: rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const StDiv = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
  gap: 10px;
  p {
    font-size: 18px;
    font-weight: 500;
    color: var(--color-point-blue);
  }
`;

const HIcon = styled.img`
  width: 40px;
  padding-left: 80px;
`;

const StLine = styled.div`
  width: 1px;
  height: 20px;
  background-color: #d8d8d8;
`;

export default Header;
