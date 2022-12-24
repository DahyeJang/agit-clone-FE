import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

const Layout = () => {
  return (
    <Container>
      <Header />
      <StLayout>
        <Outlet />
      </StLayout>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StLayout = styled.div`
  width: 1020px;
  margin: 101px auto 0;
  padding: 0 15px;
`;
