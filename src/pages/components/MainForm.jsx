import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "redux/features/loginSlice";

function MainForm() {
  console.log("MainForm 렌더링... 🎨");
  const navigate = useNavigate();
  const recruitRef = useRef();
  const idRef = useRef();
  const pswRef = useRef();
  const { loading, isLoggedIn, isError, name, role } = useSelector((state) => ({
    loading: state.login.loading,
    isLoggedIn: state.login.isLoggedIn,
    isError: state.login.isError,
    name: state.login.name,
    role: state.login.role,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    recruitRef.current.focus();
  }, []);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("hi");
          const aaaaa = dispatch(
            login({
              account: "abc123",
              password: "aaaa",
            })
          );
          console.log(aaaaa);
        }}
      >
        <select ref={recruitRef} required>
          <option value="">모집 구분..?</option>
          <option value="test1">구분 테스트1</option>
          <option value="test2">구분 테스트2</option>
        </select>
        <br />
        <input type="text" placeholder="아이디" ref={idRef} required />
        <br />
        <input type="password" placeholder="비밀번호" ref={pswRef} required />
        <br />
        <input type="submit" value="로그인" />
        <br />
      </form>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate("/signup");
        }}
      >
        회원가입
      </button>
      <div>{name}</div>
    </div>
  );
}

export default MainForm;
