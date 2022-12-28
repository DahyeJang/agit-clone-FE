import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import basicImg from "../../img/basicImg.png";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { AiOutlineEllipsis } from "react-icons/ai";
import Button from "../elem/Button";
import ModalMenu from "./ModalMenu";
import ModalMenuComment from "./ModalMenuComment";

const CreateAgitForm = () => {
  const navigate = useNavigate();
  const postList = useSelector((state) => state.agitInfoSlice.data.postList);
  //console.log("agitInfo", agitInfo);

  const createAgitBtn = () => {
    navigate("/");
  };

  const [show, setShow] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [text, setText] = useState("");
  const [textComment, setTextComment] = useState("");

  const onChangeInputHandler = (e) => {
    setText(e.target.value);
    setShow(true);
  };

  const onClickCancel = () => {
    setShow(false);
    setText("");
  };

  const onChangeInputCommentHandler = (e) => {
    setTextComment(e.target.value);
    setShowComment(true);
  };

  const onClickCommentCancel = () => {
    setShowComment(false);
    setTextComment("");
  };

  return (
    <>
      {postList?.map((post) => (
        <>
          <MainDiv key={post.id}>
            {/* <HeaderDiv>아지트 명</HeaderDiv> */}
            <SuvDiv>
              <Photo src={basicImg} />
              <InDiv>
                <Nick>{post.nickname}</Nick>
                <DateDiv>{post.createdAt}</DateDiv>
              </InDiv>
            </SuvDiv>
            <Content>{post.content}</Content>
            <BtnDiv>
              <div>
                <MsgBtn>
                  <span>댓글</span>
                  <Num>{post.commentList.length}</Num>
                </MsgBtn>
                <LikeBtn type="button">
                  <BsHandThumbsUp />
                </LikeBtn>
                <HateBtn type="button">
                  <BsHandThumbsDown />
                </HateBtn>
              </div>
              <EtcBtn type="button">
                <AiOutlineEllipsis />
              </EtcBtn>
              <ModalMenu />
            </BtnDiv>
            <PostInput
              placeholder="댓글을 입력해주세요."
              onChange={onChangeInputHandler}
              value={text}
            ></PostInput>
            {show && (
              <FormButton>
                <Button onClick={onClickCancel}>취소</Button>
                <Button
                  borderColor="rgba(88, 132, 224, 0.2)"
                  backgroundColor="var(--color-point-blue)"
                  color="white"
                >
                  작성하기
                </Button>
              </FormButton>
            )}
          </MainDiv>
          {post.commentList?.map((comment) => (
            <>
              <MMainDiv>
                <SuvDiv>
                  <PPhoto src={basicImg} />
                  <InDiv>
                    <NNick>{comment.nickname}</NNick>
                    <DateDiv>{comment.createdAt}</DateDiv>
                  </InDiv>
                </SuvDiv>
                <CContent>{comment.content}</CContent>
                <EtcBtn
                  type="button"
                  rol="tab"
                  aria-controls="postModal"
                  aria-expanded="true"
                >
                  <AiOutlineEllipsis />
                </EtcBtn>
                <ModalMenuComment />
                <BtnDiv>
                  <CmtInput
                    placeholder="댓글을 입력해주세요."
                    onChange={onChangeInputCommentHandler}
                    value={textComment}
                  ></CmtInput>
                </BtnDiv>
                {showComment && (
                  <FormButton2>
                    <Button onClick={onClickCommentCancel}>취소</Button>
                    <Button
                      borderColor="rgba(88, 132, 224, 0.2)"
                      backgroundColor="var(--color-point-blue)"
                      color="white"
                    >
                      작성하기
                    </Button>
                  </FormButton2>
                )}
              </MMainDiv>
            </>
          ))}
        </>
      ))}
    </>
  );
};

export default CreateAgitForm;

const MainDiv = styled.div`
  //height: 222px;
  border: 1px solid #e2e2e2;
  padding: 0px 20px 30px;
  background-color: #fff;
  margin-top: 15px;
  display: inline-block;
`;

const MMainDiv = styled.div`
  //height: 198px;
  width: 723px;
  border: 1px solid #e2e2e2;
  padding: 0px 20px 50px 0px;
  background-color: #fafbfc;
  display: inline-block;
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

const PPhoto = styled.img`
  display: inline-block;
  position: relative;
  padding-left: 20px;
  border-radius: 50%;
  background-origin: padding-box;
  background-position: 50% 50%;
  background-size: cover;
  vertical-align: top;
  width: 36px;
  height: 36px;
`;

const SuvDiv = styled.div`
  position: relative;
  display: flex;
  clear: both;
  padding-top: 15px;
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

const NNick = styled.div`
  display: block;
  font-weight: bold;
  font-size: 13px;
  line-height: 21px;
  color: #404040;
`;

const DateDiv = styled.div`
  font-weight: 400;
  font-size: 11px;
  color: #979797;
`;

const Content = styled.div`
  width: 678px;
  padding-top: 10px;
  padding-left: 10px;
  margin-bottom: 0;
  word-wrap: break-word;
  word-break: break-all;
  color: #404040;
`;

const CContent = styled.div`
  //width: 678px;
  //padding-top: 10px;
  padding-left: 60px;
  margin-bottom: 0;
  font-size: 13px;
  word-wrap: break-word;
  word-break: break-all;
  color: #404040;
`;

const BtnDiv = styled.div`
  //width: 720px;
  height: 24px;
  display: flex;
  //position: relative;
  //clear: both;
  margin-top: 25px;
  padding-left: 10px;
  justify-content: space-between;
`;

const MsgBtn = styled.span`
  display: inline-block;
  height: 22px;
  margin-right: 10px;
  padding: 0 6px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  font-size: 13px;
  line-height: 22px;
  color: #5c5c5c;
  text-align: center;
  vertical-align: top;
`;

const Num = styled.span`
  padding-left: 4px;
  color: #5985dc;
`;

const LikeBtn = styled.button`
  background-color: white;
  margin-right: 10px;
  color: #5c5c5c;
  margin-top: 0.3px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  width: 26px;
  height: 23px;
`;

const HateBtn = styled.button`
  background-color: white;
  color: #5c5c5c;
  margin-top: 0.3px;
  //margin-left: 5px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  width: 26px;
  height: 23px;
`;

const EtcBtn = styled.button`
  background-color: white;
  color: #5c5c5c;
  margin-top: 0.3px;
  //margin-left: 575px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  width: 26px;
  height: 23px;
  float: right;
`;

const PostInput = styled.input`
  width: 687px;
  margin: 20px 0px 10px 10px;
  //padding-right: -10px;
  //margin-bottom: 30px;
  height: 27px;
  color: #333333;
  //padding: 0px 0px 0px 15px;
  //margin-left: 50px;
  border: 1px solid #e0e0e0;
`;

const CmtInput = styled.input`
  width: 100%;
  height: 27px;
  color: #333333;
  padding: 0px 0px 0px 15px;
  //margin-left: 50px;
  border: 1px solid #e0e0e0;
  margin: 20px 0px 10px 50px;
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

const FormButton2 = styled.div`
  position: relative;
  height: 28px;
  padding-top: 45px;
  float: right;
  Button {
    &:first-child {
      margin-right: 5px;
    }
  }
`;
