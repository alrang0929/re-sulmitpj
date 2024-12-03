// 슬밋pj -  로그인 페이지///
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import $ from "jquery";
import useCusto from "../../../store/authStore";
//css
// import "../../css/login.scss";
//로컬 스토리지 셋팅 함수 호출!
// import { initData } from "../func/memFn";

/////import area///////////////////////////////////////////////

export default function Login() {
// zustand useAuthStore 상태관리자 import
const { userId, setUserId, pwd, setPwd } = useAuthStore();


const Login = () => {
const { errorMessage, setErrorMessage, resetErrorMessage } = useGetErrorMsg();

const handleLogin = async () => {
try {
await someLoginApiCall(); // 가상 API 호출
resetErrorMessage(); // 에러 메시지 초기화
} catch (error) {
setErrorMessage("loginFailed"); // 에러 메시지 설정
}
};

  //// 코드 리턴구역 //////////////
  return (
    <>

  return (
    <div>
      <button onClick={handleLogin}>로그인</button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};


    </>
  );
} /////////// Login /////////////////////
