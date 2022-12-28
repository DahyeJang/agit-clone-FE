// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import styled from "styled-components";
// import { __delContent } from "../../redux/modules/contentsSlice";
// import { __getAgit } from "../../redux/modules/userInfoGetSlice";

// const ModalMenu = () => {

//모달창 관련
const ModalMenuFrame = styled.div`
  /* top: 834px; */
  left: 580px;
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
  }
`;

//   const dispatch = useDispatch();
//   const { postLists } = props;
//   console.log("postLists" ,postLists)
//   // const agitInfo = useSelector((state) => state.agitInfoSlice.data.postList);
//   // console.log("agitInfo.postList", agitInfo);
  
//   const onClickDelContent = (id) => {
//     dispatch(__delContent(id))
//   }

//   return (
//     <>
//     {postLists?.map((post)=> (
//       <ModalMenuFrame id="postModal">
//       <li>수정하기</li>
//       <li 
//         type="button"
//         onClick={()=> {
//         onClickDelContent(post.id)}}>삭제하기</li>
//     </ModalMenuFrame>
//     ))}
//     </>
//   );
// };

// //모달창 관련
// const ModalMenuFrame = styled.div`
//   /* top: 834px; */
//   left: 580px;
//   position: absolute;
//   z-index: 10;
//   min-width: 118px;
//   width: auto;
//   border: 1px solid #d0d0d0;
//   border-radius: 2px;
//   background-color: #fff;
//   li {
//     height: 32px;
//     border-bottom: 1px solid #dcdfe4;
//     display: block;
//     width: 100%;
//     height: 100%;
//     padding: 0 10px;
//     font-size: 12px;
//     line-height: 33px;
//     color: #222;
//     text-align: left;
//     white-space: nowrap;
//   }
//   button {
//     /* display: block;
//     width: 100%;
//     height: 100%;
//     padding: 0 10px;
//     font-size: 12px;
//     line-height: 33px;
//     color: #222;
//     text-align: left;
//     white-space: nowrap; */
//   }
// `;

// export default ModalMenu;
