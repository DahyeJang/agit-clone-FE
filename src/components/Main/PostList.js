import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import basicImg from "../../img/basicImg.png";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { AiOutlineEllipsis } from "react-icons/ai";
import Button from "../elem/Button";

import { __delContent } from "../../redux/modules/contentsSlice";
import { __posthate, __postlike } from "../../redux/modules/likeSlice";
import { __getAgit } from "../../redux/modules/userInfoGetSlice";
import {
  __getAgitPost,
  __postComment,
  __deleteComment,
  __modifyComment,
} from "../../redux/modules/agitInfoSlice";
import { baseURL } from "../../core/api/axios";

const PostList = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.agitInfoSlice.data.postList);
  const [like, setLike] = useState(false);
  const [hate, setHate] = useState(false);
  const [show, setShow] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [text, setText] = useState("");
  const [textComment, setTextComment] = useState("");
  console.log(postList)
  const navigate = useNavigate();
  // const [posts, setPosts] = useState(postList);
  const [isEditMode, setIsEditMode] = useState(false);
  const [commentId, setCommentId] = useState("");
  // console.log("posts", posts)
  // const lc = useSelector((state) => state.likeSlice.like?.data?.likeCount)
  // console.log(lc)
  // const hc = useSelector((state)=> state.likeSlice.hate?.data?.hateCount)
  // console.log(hc)
  // //댓글 추가

  const onChangeInputHandler = (e) => {
    setText(e.target.value);
    setShow(true);
  };

  const onClickPostHandler = (id) => {
    dispatch(__postComment({ content: text, id: id }));
    setText("");
    window.location.reload();
  };

  //댓글 수정
  const onClickCommentModifyToggle = (id) => {
    setIsEditMode(true);
    setModalOpen(false);
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
    setIsEditMode(false);
  };

  const onClickCommentDelete = (commentId, postId) => {
    dispatch(__deleteComment({ postId, commentId }));
    window.location.reload();
  };

  const ModalHandler = (id) => {
    setCommentId(id);
    {
      modalOpen ? setModalOpen(false) : setModalOpen(true);
    }
    setIsEditMode(false);
  };

  const onClickCommentModify = (commentId, postId) => {
    dispatch(
      __modifyComment({
        postId: postId,
        commentId: commentId,
        content: textComment,
      })
    );
    //dispatch(__getAgitPost(postId));
    window.location.reload();
  };

  const onClickDelContent = (id) => {
    dispatch(__delContent(id));
  };

  const onClickLike = (a, c) => {
    dispatch(__postlike(a));
    if (c === null) {
      setLike(false);
      setHate(false);
      
    } else if (c === true) {
      setLike(true);
      setHate(false);
      
    }
  };

  const onClickHate = (a, c, e) => {
    dispatch(__posthate(a));
    if (c === null) {
      setLike(false);
      setHate(false);
      
    } else if (c === false) {
      setLike(false);
      setHate(true);
      
    }
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
                <DateDiv>
                  {post.createdAt.slice(0, 10) +
                    "  " +
                    post.createdAt.slice(11, 13) +
                    "시" +
                    "  " +
                    post.createdAt.slice(14, 16) +
                    "분"}
                </DateDiv>
                {post.modified ? <Modify>수정됨</Modify> : ""}
              </InDiv>
            </SuvDiv>
            <Content>{post.content}</Content>
            <BtnDiv>
              <div>
                <MsgBtn>
                  <span>댓글</span>
                  <Num>{post.commentList.length}</Num>
                </MsgBtn>
                <LikeBtn
                  type="button"
                  onClick={() => onClickLike(post.id, post.postLike)}
                >
                  <BsHandThumbsUp />
                </LikeBtn>
                {post.likeCount}
                <HateBtn
                  type="button"
                  onClick={() => onClickHate(post.id, post.postLike)}
                >
                  <BsHandThumbsDown />
                </HateBtn>
                  {post.hateCount}
              </div>
              <EtcBtn type="button">
                <AiOutlineEllipsis />
              </EtcBtn>
              <ModalMenuFrame id="postModal">
                <li>수정하기</li>
                <li
                  type="button"
                  onClick={() => {
                    onClickDelContent(post.id);
                  }}
                >
                  삭제하기
                </li>
              </ModalMenuFrame>
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
                  onClick={() => {
                    onClickPostHandler(post.id);
                  }}
                >
                  작성하기
                </Button>
              </FormButton>
            )}
          </MainDiv>

          {/* 댓글 표시되는 부분 */}
          {post.commentList?.map((comment) => (
            // <Comment comment={comment} post={post} />
            <>
              <MMainDiv key={comment.id}>
                <>
                  <SuvDiv>
                    <PPhoto src={basicImg} />
                    <InDiv>
                      <NNick>{comment.nickname}</NNick>
                      <DateDiv>{comment.createdAt}</DateDiv>
                    </InDiv>
                  </SuvDiv>
                  {isEditMode && comment.id === commentId ? (
                    <>
                      {comment.id === commentId && (
                        <>
                          <BtnDiv>
                            <CmtInput
                              placeholder={comment.content}
                              onChange={onChangeInputCommentHandler}
                              value={textComment}
                            ></CmtInput>
                          </BtnDiv>
                          <FormButton2>
                            <Button onClick={onClickCommentCancel}>취소</Button>
                            <Button
                              borderColor="rgba(88, 132, 224, 0.2)"
                              backgroundColor="var(--color-point-blue)"
                              color="white"
                              onClick={() => {
                                onClickCommentModify(comment.id, post.id);
                              }}
                            >
                              수정하기
                            </Button>
                          </FormButton2>
                        </>
                      )}
                    </>
                  ) : (
                    <CContent>{comment.content}</CContent>
                  )}
                  <EtcBtn
                    onClick={() => {
                      ModalHandler(comment.id);
                    }}
                  >
                    <AiOutlineEllipsis />
                  </EtcBtn>
                  {modalOpen && comment.id === commentId && (
                    <ModalMenuFrame>
                      <li
                        onClick={() => {
                          onClickCommentModifyToggle();
                        }}
                      >
                        수정하기
                      </li>
                      <li
                        onClick={() => {
                          onClickCommentDelete(comment.id, post.id);
                        }}
                      >
                        삭제하기
                      </li>
                    </ModalMenuFrame>
                  )}

                  {/* <BtnDiv>
                  <CmtInput
                    placeholder="댓글을 입력해주세요."
                    onChange={onChangeInputCommentHandler}
                    value={textComment}
                  ></CmtInput>
                </BtnDiv> */}
                  {/* {showComment && (
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
                  )} */}
                </>
              </MMainDiv>
            </>
          ))}
        </>
      ))}
    </>
  );
};
export default PostList;

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
  position: relative;
  width: 723px;
  border: 1px solid #e2e2e2;
  padding: 0px 20px 30px 0px;
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
  display: inline;

  font-weight: 400;
  font-size: 12px;
  color: #979797;
`;
const Modify = styled.div`
  display: inline;
  font-weight: 400;
  font-size: 12px;
  color: #414141;
  margin-left: 5px;
  font-weight: 400;
  font-size: 11px;
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
  margin-right: 5px;
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
  margin-left: 5px;
  margin-right: 5px;
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
  cursor: pointer;
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

//모달창 관련
const ModalMenuFrame = styled.div`
  bottom: -50px;
  right: 20px;
  position: absolute;
  z-index: 10;
  min-width: 118px;
  width: auto;
  border: 1px solid #d0d0d0;
  border-radius: 2px;
  background-color: #fff;
  li {
    height: 32px;
    border-bottom: 1px solid #dcdfe4;
    display: block;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    font-size: 12px;
    line-height: 33px;
    color: #222;
    text-align: left;
    white-space: nowrap;
    cursor: pointer;
  }
  button {
    /* display: block;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    font-size: 12px;
    line-height: 33px;
    color: #222;
    text-align: left;
    white-space: nowrap; */
  }
`;
