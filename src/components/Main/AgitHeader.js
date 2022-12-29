import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import {
  __getAgitPost,
} from "../../redux/modules/agitInfoSlice";

const AgitHeader = () => {
  const dispatch = useDispatch();

  const agitInfo = useSelector((state) => state.agitInfoSlice.data);
  const agitList = useSelector((state) => state.userInfoGet.agitList);

  useEffect(() => {
    if (agitList.length === 0) {
      return;
    }
    const firstAgit = agitList[0].id;
    dispatch(__getAgitPost(firstAgit));
  }, []);

  return (
    <>
      <StheaderImg>
        <HeaderContent>
          <AgitName>{agitInfo.agitName}</AgitName>
          <p>{agitInfo.agitInfo}</p>
        </HeaderContent>
      </StheaderImg>
    </>
  );
};

const StheaderImg = styled.div`
  position: relative;
  height: 175px;
  background-image: url(../../img/agitheader.png);
  background-position: center;
  background-size: cover;
  border-radius: 2px 2px 0 0;
`;
const AgitName = styled.h1`
  color: #fff;
`;

const HeaderContent = styled.div`
  position: relative;
  padding: 25px 18px 21px 30px;
  color: #fff;
  font-size: 14px;
  line-height: 17px;
`;

export default AgitHeader;
