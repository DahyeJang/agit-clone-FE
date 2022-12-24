import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <StButton
      backgroundColor={props.backgroundColor}
      background={props.background}
      color={props.color}
      hoverBacground={props.hoverBacground}
      hoverColor={props.hoverColor}
      type={props.type || "button"}
      onClick={props.onClick}
      fontSize={props.fontSize}
      margin={props.margin}
      width={props.width}
      fontFamily={props.fontFamily}
      padding={props.padding}
      height={props.height}
    >
      {props.children}
    </StButton>
  );
};

export default Button;
const StButton = styled.button`
  border-radius: 3px;
  padding: ${({ padding }) => padding || "5px 10px 6px"};
  cursor: pointer;
  //margin: ${({ margin }) => margin || "0 5px 0 0"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  color: ${({ color }) => color || "#525355"};
  border: ${({ border }) => border || "1px solid #dcdcdc"};
  font-size: ${({ fontSize }) => fontSize || "14px"};
  font-weight: ${({ fontWeight }) => fontWeight || "500"};
  font-family: ${({ fontFamily }) => fontFamily};
  width: ${({ width }) => width || "80px"};
  height: ${({ height }) => height || "32px"};
  &:disabled {
    background-color: ${({ backgroundColor }) =>
      backgroundColor || "rgba(88, 132, 224, 0.7)"};
    color: ${({ color }) => color || "#fff"};
  }
  &:active {
    background-color: ${({ backgroundColor }) =>
      backgroundColor || "var(--color-point-blue)"};
    color: ${({ color }) => color || "#fff"};
  }
`;
