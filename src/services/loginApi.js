import axios from "axios";

const getUserInfo = async (evalId, recruitId) => {
  const response = await axios.get("/eval", {
    params: {
      evalId,
      recruitId,
    },
  });

  return response.data;
};

const updatePw = (evalId, params) => {
  // console.log('updatePw', evalName, evalId, evalPw);
  return axios.patch(`/auth/${evalId}`, params);
};

const login = (evalId, evalPw) => {
  return axios.post("/auth/login", {
    evalId,
    evalPw,
  });
};

const logout = () => {
  localStorage.removeItem("evalInfo");
};

const refresh = async (refreshToken) => {
  const res = await axios.post("/auth/refresh", {
    token: refreshToken,
  });
  localStorage.setItem("evalInfo", JSON.stringify(res.data));
  return res.data;
};

const getProfile = async () => {
  const res = await axios.get("/auth/profile");

  return res.data;
};

const loginApi = {
  getUserInfo,
  updatePw,
  login,
  logout,
  refresh,
  getProfile,
};

export default loginApi;
