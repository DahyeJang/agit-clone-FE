import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { __getAgit } from "../../redux/modules/userInfoGetSlice";
import {
  __getAgitMember,
  __getAgitPost,
} from "../../redux/modules/agitInfoSlice";

const AgitList = () => {
  const dispatch = useDispatch();
  const [listOpen, setIListOpen] = useState(true);
  const [memberOpen, setMemberOpen] = useState(true);

  useEffect(() => {
    //dispatch(__getInfo(param));
    dispatch(__getAgit());
  }, []);

  const agitList = useSelector((state) => state.userInfoGet.agitList);
  console.log("agitList", agitList);

  useEffect(() => {
    if (agitList.length === 0) {
      return;
    }
    const firstAgit = agitList[0].id;
    dispatch(__getAgitMember(firstAgit));
    //console.log(agitList[0].id);
  }, [agitList]);

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

  //console.log(listOpen);

  return (
    <>
      <StAgitList>
        <StSubject>
          <HIcon
            src={"../../img/arrowdownicon.png"}
            alt="Hicon"
            onClick={openListHandler}
          ></HIcon>
          내 아지트 목록
        </StSubject>
        {listOpen && (
          <>
            {agitList.map((agitList) => (
              <Stlist>
                <li
                  key={agitList.id}
                  onClick={() => {
                    dispatch(__getAgitPost(agitList.id));
                    dispatch(__getAgitMember(agitList.id));
                  }}
                >
                  {agitList.agitName}
                </li>
              </Stlist>
            ))}
          </>
        )}
      </StAgitList>
      <StAgitList>
        <StSubject>
          <HIcon
            src={"../../img/arrowdownicon.png"}
            alt="Hicon"
            onClick={openMemberHandler}
          ></HIcon>
          아지트 멤버 목록
        </StSubject>
        {memberOpen && (
          <Stlist>
            <li>멤버1</li>
            <li>멤버2</li>
            <li>멤버3</li>
            <li>멤버4</li>
            <li>멤버5</li>
          </Stlist>
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
`;

const HIcon = styled.img`
  width: 16px;
  margin-left: -17px;
  padding-right: 5px;
`;

export default AgitList;
