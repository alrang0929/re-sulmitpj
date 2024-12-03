import { create } from "zustand";
import errorMessages from "../../backend/log/errorMessages";

const exceptionMsg = "문제가 발생했습니다. 잠시후 다시 시도해 주세요"
const useGetErrorMsg = create((set) => ({
    // 에러메세지
    errorMsg: "",
    setErrorMsg: (msgKey) => {

      // 전달받은 props로 메세지 저장소에서 조회
      const resloveMsg = errorMsg[msgKey] || 

    },


    //에러 메세지 초기화
    resetErrorMsg: () => set({errorMsg: ""}),
  }));
  
  export default useGetErrorMsg;