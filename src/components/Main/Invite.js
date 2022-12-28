import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __postinvite } from "../../redux/modules/inviteSlice";
import { __postInvite } from "../../redux/modules/agitInfoSlice";
import Button from "../elem/Button";
import Input from "../elem/Input";

const Invite = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(
    "rgba(88, 132, 224, 0.7)"
  );
  const dispatch = useDispatch("");
  const agitId = useSelector((state) => state.agitInfoSlice.data.agitId);
  //console.log("agitId", agitId);

  const onChangeInputHandler = (e) => {
    setUsername(e.target.value);
    setDisabled(true);
    setBackgroundColor("var(--color-point-blue)");
  };

  //console.log(enableButton);
  const onInviteBtn = (e) => {
    e.preventDefault();
    dispatch(__postInvite({ username, agitId }));
    //navigate("/");
    window.location.reload();
  };

  // const state = useSelector((state) => state);
  // console.log("state", state);

  return (
    <>
      <StInvite>
        <p>현재 아지트에 멤버 초대하기</p>
        <div>
          <Input
            onChange={onChangeInputHandler}
            placeholder={"아이디 입력"}
            type="text"
          />
          <Button
            backgroundColor={backgroundColor}
            color="white"
            type="button"
            disabled={!disabled}
            onClick={(e) => {
              onInviteBtn(e);
            }}
          >
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
