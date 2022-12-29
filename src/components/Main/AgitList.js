import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TfiArrowCircleUp } from "react-icons/tfi";

import styled from "styled-components";
import { __getAgit } from "../../redux/modules/userInfoGetSlice";
import {
  __getAgitMember,
  __getAgitPost,
} from "../../redux/modules/agitInfoSlice";

const AgitList = () => {
  const dispatch = useDispatch();
  const [listOpen, setIListOpen] = useState(false);
  const [memberOpen, setMemberOpen] = useState(false);

  useEffect(() => {
    dispatch(__getAgit());
  }, []);

  const myAgitList = useSelector((state) => state.userInfoGet.agitList);
  const state = useSelector((state) => state);

  useEffect(() => {
    if (myAgitList.length === 0) {
      return;
    }
    const firstAgit = myAgitList[0].id;
    dispatch(__getAgitMember(firstAgit));
  }, [myAgitList]);

  const memberList = useSelector((state) => state.agitInfoSlice.agitMember);

  const openListHandler = () => {
    {
      listOpen ? setIListOpen(false) : setIListOpen(true);
    }
  };

  const openMemberHandler = () => {
    {
      memberOpen ? setMemberOpen(false) : setMemberOpen(true);
    }
  };

  return (
    <>
      <StAgitList>
        <StSubject>
          <HIcon
            src={
              listOpen
                ? "../../img/arrowdownicon.png"
                : "../../img/arrowupicon.png"
            }
            alt="Hicon"
            onClick={openListHandler}
            cursor="pointer"
          ></HIcon>
          내 아지트 목록
        </StSubject>
        {listOpen && (
          <>
            {myAgitList?.map((agit) => (
              <Stlist key={agit.id}>
                <li
                  onClick={() => {
                    dispatch(__getAgitPost(agit.id));
                    dispatch(__getAgitMember(agit.id));
                  }}
                >
                  {agit.agitname}
                </li>
              </Stlist>
            ))}
          </>
        )}
      </StAgitList>
      <StAgitList>
        <StSubject>
          <HIcon
            src={
              memberOpen
                ? "../../img/arrowdownicon.png"
                : "../../img/arrowupicon.png"
            }
            alt="Hicon"
            onClick={openMemberHandler}
            cursor="pointer"
          ></HIcon>
          아지트 멤버 목록
        </StSubject>
        {memberOpen && (
          <>
            {memberList?.map((member) => (
              <Stlist>
                <li>
                  {member.nickname}({member.username})
                </li>
              </Stlist>
            ))}
          </>
        )}
      </StAgitList>
    </>
  );
};

const StAgitList = styled.div`
  margin-top: 10px;
  //border: 1px solid #dcdfe4;
  border-bottom: 1px solid #e9e9e9;
  border-radius: 2px;
  padding: 10px 10px 22px 24px;

  /* display: flex; */
  //justify-content: center;
  //align-items: flex-start;
  //align-content: center;
  /* flex-direction: column;
  height: auto; */
  //overflow: auto;
  //float: none;
`;

const StSubject = styled.p`
  color: #222;
  font-weight: 700;
`;

const Stlist = styled.ul`
  height: 25px;
  line-height: 26px;
  color: #808080;
  display: contents;
  cursor: pointer;
  li:hover {
    background-color: #ececec;
  }
`;

const HIcon = styled.img`
  width: 16px;
  margin-left: -17px;
  padding-right: 5px;
  cursor: pointer;
`;

export default AgitList;
