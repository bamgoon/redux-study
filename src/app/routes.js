import { MainForm, Login, Interviewer, Interviewee } from "../pages";

const routes = [
  {
    path: "/",
    component: MainForm,
  },
  {
    path: "/:recruitId/:userId",
    component: Login,
  },
  {
    path: "/interviewer",
    component: Interviewer,
  },
  {
    path: "/interviewee",
    component: Interviewee,
  },
];

export default routes;
