import React from "react";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (id, value, option) => {
  return cookies.set(id, value, { ...option });
}

export const getCookie = (id) => {
  return cookies.get(id);
}

function cookieControler() {
  return null;
}

export default cookieControler;