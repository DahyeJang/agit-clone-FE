import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __postcontents } from "../../redux/modules/contentsSlice";
import { __getAgit } from "../../redux/modules/userInfoGetSlice";
import Button from "../elem/Button";

const PostForm = () => {
  const [enableButton, setEnableButton] = useState("");
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const [backgroundColor, setBackgroundColor] = useState(
    "rgba(88, 132, 224, 0.7)"
  );

  useEffect(() => {
    dispatch(__getAgit());
  }, []);
  
  const agitInfo = useSelector((state) => state.agitInfoSlice.data);

  const onChangeInputHandler = (e) => {
    setEnableButton(e.target.value);
    setDisabled(true);
    setBackgroundColor("var(--color-point-blue)");
  };

  const onClickPostContents = (id) => {
    dispatch(__postcontents({ content: enableButton, agitId: id }));
    window.location.reload();
  };

  return (
    <PostForm2>
      <PostFormContent>
        <Textarea
          placeholder={"Cmd+Enter를 누르면 글이 등록됩니다."}
          onChange={onChangeInputHandler}
          type="text"
        ></Textarea>
        <FormButton>
          <Button>취소</Button>
          <Button
            borderColor="rgba(88, 132, 224, 0.2)"
            backgroundColor={backgroundColor}
            color="white"
            type="button"
            disabled={!disabled}
            onClick={() => {
              onClickPostContents(agitInfo.agitId);
            }}
          >
            작성하기
          </Button>
        </FormButton>
      </PostFormContent>
    </PostForm2>
  );
};

const PostForm2 = styled.form`
  margin: 15px 0 15px 0;
  border-radius: 3px;
  border: solid 1px #dfe2e6;
  background: #fff;
  width: 100%;
  height: 200px;
`;

const PostFormContent = styled.div`
  padding: 20px 20px 30px;
`;
const Textarea = styled.textarea`
  border-color: #e3e3e3;
  background-color: #fcfcfc;
  width: 100%;
  min-height: 99px;
`;

const FormButton = styled.div`
  position: relative;
  height: 28px;
  padding-top: 10px;
  float: right;
  Button {
    &:first-child {
      margin-right: 5px;
    }
  }
`;

export default PostForm;
