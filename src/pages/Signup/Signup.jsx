import { useCallback, useRef, useState } from "react";
import loginApi from "services/loginApi";
function Signup() {
  console.log("SignupContainer 렌더링... 🎨");

  const companyNameRef = useRef();
  const roleRef = useRef();
  const nameRef = useRef();
  const idRef = useRef();
  const pswRef = useRef();
  const pswConfirmRef = useRef();
  const emailRef = useRef();
  const [isPswEqual, setIsPswEqual] = useState(true);

  const onSubmitHandler = useCallback((e) => {
    e.preventDefault();
    console.log("회원가입 시도");
    const res = loginApi.signup({
      account: idRef.current.value,
      password: pswRef.current.value,
      name: nameRef.current.value,
      email: emailRef.current.value,
      company: companyNameRef.current.value,
      role: roleRef.current.value,
    });
  });

  const confirmPsw = () => {
    pswRef.current.value === pswConfirmRef.current.value
      ? setIsPswEqual(true)
      : setIsPswEqual(false);
  };

  return (
    <div className="mem_contents">
      <label htmlFor="id">회사명</label>
      <input
        type="text"
        name="companyName"
        id="companyName"
        ref={companyNameRef}
        required
      />
      <br />
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="role">역할 구분</label>
        <select id="role" ref={roleRef} required>
          <option value="">선택</option>
          <option value="interviewer">면접관</option>
          <option value="interviewee">면접 대상</option>
        </select>
        <br />
        <label htmlFor="id">아이디</label>
        <input type="text" name="id" id="id" ref={idRef} required />
        <br />
        <label htmlFor="psw">비밀번호</label>
        <input
          type="password"
          name="psw"
          id="psw"
          ref={pswRef}
          onChange={confirmPsw}
          required
        />
        <br />
        <label htmlFor="pswConfirm">비밀번호 확인</label>
        <input
          type="password"
          name="pswConfirm"
          id="pswConfirm"
          ref={pswConfirmRef}
          onChange={confirmPsw}
          required
        />
        {isPswEqual ? null : "비번 다름"}
        <br />
        <label htmlFor="name">이름</label>
        <input type="text" name="name" id="name" ref={nameRef} required />
        <br />
        <label htmlFor="email">이메일</label>
        <input type="text" name="email" id="email" ref={emailRef} required />
        <br />
        <input type="submit" value="회원가입" disabled={!isPswEqual} />
      </form>
    </div>
  );
}
export default Signup;
