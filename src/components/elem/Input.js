import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return (
    <StInput
      backgroundColor={props.backgroundColor}
      background={props.background}
      color={props.color}
      hoverBacground={props.hoverBacground}
      hoverColor={props.hoverColor}
      type={props.type || "input"}
      onClick={props.onClick}
      fontSize={props.fontSize}
      margin={props.margin}
      width={props.width}
      fontFamily={props.fontFamily}
      padding={props.padding}
      height={props.height}
      onChange={props.onChange}
      placeholder={props.placeholder}
    >
      {props.children}
    </StInput>
  );
};

export default Input;
const StInput = styled.input`
  border-radius: 3px;
  //padding: ${({ padding }) => padding || "5px 10px 6px"};
  //cursor: pointer;
  //margin: ${({ margin }) => margin || "0 5px 0 0"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  color: ${({ color }) => color || "#525355"};
  border: ${({ border }) => border || "1px solid #dcdcdc"};
  font-size: ${({ fontSize }) => fontSize || "14px"};
  font-weight: ${({ fontWeight }) => fontWeight || "500"};
  font-family: ${({ fontFamily }) => fontFamily};
  width: ${({ width }) => width || "110px"};
  height: ${({ height }) => height || "28px"};
`;
