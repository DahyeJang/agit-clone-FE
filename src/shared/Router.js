import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Detail from "../pages/Detail";
import Layout from "../components/layout/Layout";
import SignUp from "../pages/SignUp";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/@:nickname">
              <Route index element={<Main />} />
              <Route path=":postId" element={<Detail />} />
            </Route>
          </Route>
          <Route path="/create" element={<Create />} />
          <Route path="/create/:postId" element={<Create />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
