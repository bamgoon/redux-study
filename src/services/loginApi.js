import axios from "axios";
import j from "utils/jwtUtils";
const signup = async (params) => {
  const response = await axios.post("/api/auth/signup", params);

  return response.data;
};

const signin = async (params) => {
  const response = await axios.post("/api/auth/signin", params);

  return response;
};

const loginApi = {
  signup,
  signin,
};

export default loginApi;
