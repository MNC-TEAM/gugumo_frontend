import React from 'react'
import ReactModal from 'react-modal'

const modalStyle: ReactModal.Styles = {
  overlay: { // 바깥
    backgroundColor: " rgba(0, 0, 0, 0.38)",
    width: "100%",
    height: "100%",
    zIndex: "50",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: { // 안쪽
    zIndex: "100",
    width: "339px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background : "#fff",
    padding : "37px 40px 21px",
    boxSizing : "border-box",
    borderRadius : 12,
    border : 0,
    textAlign : "center",
  },
};

export default function Login() {
  return (
    <ReactModal
      isOpen={true}
      style={modalStyle}
    >
      <div>
        <img src="/asset/image/icon.png" alt="아이콘" />
      </div>
      <h5>이메일로 로그인</h5>
      <div>
        <input type="text" placeholder='아이디를 입력하세요.' />
        <input type="text" placeholder='비밀번호를 입력하세요.' />
      </div>
      <div>
        <p>간편 로그인</p>
        <div>
          <button>네이버</button>
          <button>카카오</button>
          <button>구글</button>
        </div>
      </div>
      <button>회원가입 하기</button>
    </ReactModal>
  )
}
