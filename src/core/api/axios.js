import axios from "axios";
import { serverUrl } from ".";
import { getCookie } from "./cookie";
// import { useCookies } from "react-cookie";

// 헤더 없이 사용하는 경우
export const instance = axios.create({
  baseURL: serverUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// 헤더 토큰 값이 들어가야 하는 경우
export const baseURL = axios.create({
  baseURL: serverUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// interceptors를 통해 토큰값을 보내주는 것에 사용
baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = getCookie("id");
  config.headers["Authorization"] = `${token}`;
  return config;
});

// 로컬, 쿠키, 세션, 헤더에 셋 쿠키 형식 
// removeCookie 쿠키 삭제