// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import styled from "styled-components";
// import { __getAgit } from "../../redux/modules/userInfoGetSlice";
// import { __getAgitMember } from "../../redux/modules/agitInfoSlice";

// const AgitList = () => {
//   const dispatch = useDispatch();

//   const agitList = useSelector((state) => state.userInfoGet.agitList);
//   const firstAgit = agitList[0].id;
//   console.log("firstAgit", firstAgit);

//   useEffect(() => {
//     //dispatch(__getInfo(param));
//     dispatch(__getAgitMember(firstAgit));
//   }, [dispatch]);

//   return (
//     <>
//       <StAgitList>
//         <StSubject>
//           <HIcon src={"../../img/arrowdownicon.png"} alt="Hicon"></HIcon>
//           아지트 멤버 목록
//         </StSubject>

//         <Stlist>
//           <li>멤버1</li>
//           <li>멤버2</li>
//           <li>멤버3</li>
//           <li>멤버4</li>
//           <li>멤버5</li>
//         </Stlist>
//       </StAgitList>
//     </>
//   );
// };

// const StAgitList = styled.div`
//   margin-top: 10px;
//   //border: 1px solid #dcdfe4;
//   border-bottom: 1px solid #e9e9e9;
//   border-radius: 2px;
//   padding: 10px 10px 22px 24px;

//   /* display: flex; */
//   //justify-content: center;
//   //align-items: flex-start;
//   //align-content: center;
//   /* flex-direction: column;
//   height: auto; */
//   //overflow: auto;
//   //float: none;
// `;

// const StSubject = styled.p`
//   color: #222;
//   font-weight: 700;
// `;

// const Stlist = styled.ul`
//   height: 25px;
//   line-height: 26px;
//   color: #808080;
//   display: contents;
// `;

// const HIcon = styled.img`
//   width: 16px;
//   margin-left: -17px;
//   padding-right: 5px;
// `;

// export default AgitList;
