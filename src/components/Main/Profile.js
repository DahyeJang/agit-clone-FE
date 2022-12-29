import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../elem/Button";
import basicImg from "../../img/basicImg.png";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../core/api/axios";
import { useCookies } from "react-cookie";
import { getCookies } from "../../core/api/cookieControler";

const Profile = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [cookie, setCookie, removeCookie] = useCookies();
  const token = getCookies("Authorization");

  const logOut = () => {
    if (!window.confirm("로그아웃 하시겠습니까?")) {
      return;
    } else {
      removeCookie("Authorization", { path: "/" });
      setIsLogin(false);
      window.location.reload();
    }
  };

  useEffect(async() => {
      try {
        const data = await baseURL.get(`/user`);
        setIsLogin(data.data.data);
      } catch (error) {
        setIsLogin(false);
      }
  }, []);


  return (
    <>
      {isLogin === false ? (
        <StProfile>
          <StButtonSet>
            <Button
              backgroundColor="var(--color-point-blue)"
              color="#fff"
              onClick={() => {
                navigate("/login");
                window.location.reload();
              }}
            >
              로그인
            </Button>
            <Button
              onClick={() => {
                navigate("/signup");
                window.location.reload();
              }}
            >
              회원가입
            </Button>
          </StButtonSet>
        </StProfile>
      ) : (
        <StLogin>
          <SuvDiv>
            <Photo src={basicImg} />
            <InDiv>
              <Nick>{isLogin.nickname}</Nick>
              <DateDiv>{isLogin.username}</DateDiv>
            </InDiv>
          </SuvDiv>
          <CiLogout type="button" onClick={logOut} cursor="pointer" />
        </StLogin>
      )}
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
  display: flex;
  padding-top: 15px;
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
  font-size: 13px;
`;

export default Profile;
