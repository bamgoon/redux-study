import { useParams, useNavigate } from "react-router-dom";

function LoginContainer() {
  const { recruitId, userId } = useParams();
  const navigate = useNavigate();
  console.log("LoginContainer 렌더링... 🎨");
  return (
    <div>
      <div>{recruitId}</div>
      <div>{userId}</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        뒤로 가기
      </button>
    </div>
  );
}

export default LoginContainer;
