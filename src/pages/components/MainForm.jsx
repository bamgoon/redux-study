import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function MainForm() {
  console.log("MainForm 렌더링... 🎨");
  const navigate = useNavigate();
  const recruitRef = useRef();
  const idRef = useRef();
  const pswRef = useRef();
  useEffect(() => {
    recruitRef.current.focus();
  }, []);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/${recruitRef.current.value}/${idRef.current.value}`);
        }}
      >
        <select ref={recruitRef} required>
          <option value="">모집 구분..?</option>
          <option value="test1">구분 테스트1</option>
          <option value="test2">구분 테스트2</option>
        </select>
        <input type="text" placeholder="아이디" ref={idRef} required />
        <input type="password" placeholder="비밀번호" ref={pswRef} required />
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
}

export default MainForm;
