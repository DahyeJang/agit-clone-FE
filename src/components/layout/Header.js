import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getUser } from "../../redux/modules/userInfoGetSlice";
import { baseURL, instance } from "../../core/api/axios";
import { useCookies } from "react-cookie";

const Header = () => {
  const dispatch = useDispatch();
  const [isMine, setIsMine] = useState(false);
  // const [data, setData] = useState("");

  const [cookie, setCookie] = useCookies();
  console.log("cookie", cookie);

  useEffect(() => {
    if (!cookie) {
      return;
    }
    dispatch(__getUser());
    // const myInfo = async () => {
    //   try {
    //     const data = await baseURL.get(`/user`);
    //     //console.log("data.data.data", data.data.data);
    //     setData(data.data.data);
    //     setIsMine(true)
    //   } catch (error) {
    //     //console.log(error);
    //     setIsMine(false);
    //   }
    // };
    // myInfo();
    setIsMine(true);
  }, []);

  // useEffect(() => {
  //   if (!cookie) {
  //     return;
  //   }
  //   const firstAgit = myAgitList[0].id;
  //   dispatch(__getAgitMember(firstAgit));
  //   //console.log(agitList[0].id);
  // }, [myAgitList]);

  const aaa = useSelector((state) => state.userInfoGet.userInfo);
  console.log("aaa", aaa);

  return (
    <MainTitle>
      <StDiv>
        <a href="/">
          <HIcon
            src={
              "https://velog.velcdn.com/images/posinity/post/3a461e10-687b-49d8-87b3-803beaf707a1/image.png"
            }
            alt="Hicon"
          ></HIcon>
        </a>
        <StLine></StLine>
        {isMine ? <p>{aaa.nickname}의 아지트</p> : <p>항해99 아지트</p>}
      </StDiv>
    </MainTitle>
  );
};

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
