import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Layout from "../components/layout/Layout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import CreateAgit from "../pages/CreateAgit"

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/">
              <Route index element={<Main />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="createagit" element={<CreateAgit />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
