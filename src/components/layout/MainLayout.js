import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  width: 990px;
  margin: 101px auto 0;
  padding: 0 15px;
  background-color: aliceblue;
`;
export default MainLayout;
