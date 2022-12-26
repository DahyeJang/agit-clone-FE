import React from "react";
import styled from "styled-components";
import CreateAgitForm from "../components/CreateAgit/CreateAgitForm";

const CreateAgit = () => {
  return (
    <StDiv>
      <CreateAgitForm />
    </StDiv>
    )
};

const StDiv = styled.div`
  color: var(--color-point-blue);
  width: 1000px;
  height: 600px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default CreateAgit;
