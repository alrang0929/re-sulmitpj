// 슬밋pj -  로그인 페이지///
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import $ from "jquery";
import useCustomerStore from "../../../store/authStore";
//css
// import "../../css/login.scss";
//로컬 스토리지 셋팅 함수 호출!
// import { initData } from "../func/memFn";

/////import area///////////////////////////////////////////////

export default function Login() {
// zustand useCustomerStore 상태관리자 import
const { userId, setUserId, pwd, setPwd } = useCustomerStore();

  ///화면 랜더링 구역///////////////////////////////////
  useEffect(() => {
    //아이디 입력창 포커스
    $("#mid").focus();

    //로컬 스토리지에 저장된 아이디가 있다면 체크박스를 체크
    //아이디 입력값을 설정
    const savedUserId = localStorage.getItem("savedUserId");
    if (savedUserId) {
      setChkSaveId(true);
      setUserId(savedUserId);
    }
  }, []);
  ///화면 랜더링 구역///////////////////////////////////
  useEffect(() => {
    if (chkSaveId) {
      localStorage.setItem("savedUserId", userId);
    } else {
      localStorage.removeItem("savedUserId");
    }
  }, [chkSaveId, userId]);

  //// 코드 리턴구역 //////////////
  return (
    <>
      <main id="login-area">
        {/* 1. 타이틀 문구 */}
        <section>
          <div className="title">
            <h3>슬밋 Seulmit</h3>
            <h3>슬밋 아우라 뷰티가 시작됩니다</h3>
          </div>
          <form action="">
            {/* input-wrap */}
            <div className="input-wrap">
              {/*2. 아이디 입력창 */}
              <div className="minput">
                <input
                  className="input-box"
                  id="mid"
                  name="mid"
                  type="text"
                  maxLength="16"
                  placeholder="아이디(이메일)를 입력해주세요"
                  value={userId}
                  onChange={changeUserId}
                  // onKeyUp={onSubmit}
                ></input>
                {
                  // 에러 메세지 출력
                  userIdError && (
                    <div className="msg" style={{ padding: "2px" }}>
                      <small
                        style={{
                          textAlign: "left",
                          color: "yellow",
                          fontSize: "13px",
                        }}
                      >
                        {idMsg}
                      </small>
                    </div>
                  )
                }
              </div>

              {/*3. 비밀번호 입력창 */}
              <div className="minput">
                <input
                  className="input-box"
                  id="mpw"
                  name="mpw"
                  type="password"
                  maxLength="16"
                  placeholder="비밀번호를 입력해주세요(6~12자 이내)"
                  value={pwd}
                  onChange={changePwd}
                  // onKeyUp={onSubmit}
                ></input>
                {
                  // 에러 메세지 출력
                  pwdError && (
                    <div className="msg" style={{ padding: "2px" }}>
                      <small
                        style={{
                          textAlign: "left",
                          color: "yellow",
                          fontSize: "13px",
                        }}
                      >
                        {pwdMsg}
                      </small>
                    </div>
                  )
                }
              </div>
              {/* 4. 아이디 저장 */}
              <div className="saveId">
                <input
                  type="checkbox"
                  id="saveId"
                  name="saveId"
                  onChange={(e) => {
                    setChkSaveId(e.target.checked);
                    // console.log("상태확인",setChkSaveId)
                  }}
                  checked={chkSaveId}
                />
                <label htmlFor="saveId">아이디 저장</label>
              </div>
              {/* input-wrap end */}
            </div>

            {/* btn-wrap-start */}
            <div className="btn-wrap">
              <button
                className="button-nomal2"
                onClick={onSubmit}
                onKeyUp={onSubmit}
              >
                LOG IN
              </button>
              <div className="desc-wrap fx-box">
                <span>아이디/비밀번호를 잊어버리셨나요?</span>
                <div className="fx-box">
                  <a href=""> 아이디</a>
                  <a href="">비밀번호 찾기</a>
                </div>
              </div>
              <div className="desc">
                <span>슬밋 Seulmit이 처음이신가요?</span>
              </div>
              <Link to="/member">
                <button className="button-fill">SING UP</button>
              </Link>
            </div>
            {/* btn-wrap-end */}
          </form>
        </section>
      </main>
    </>
  );
} /////////// Login /////////////////////
