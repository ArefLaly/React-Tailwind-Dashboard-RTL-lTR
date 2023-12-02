import { lazy } from "react";
// const Exams = lazy(() => import("../pages/Exams"));
const Home = lazy(() => import("../pages/Home"));
const FormElement = lazy(() => import("../pages/FormElements"));
const Profile = lazy(() => import("../pages/Profile"));
const UIElement = lazy(() => import("../pages/UIElements"));
const Settings = lazy(() => import("../pages/Settings"));

const ProtectedRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/profile",
    component: <Profile />,
  },
  {
    path: "/forms",
    component: <FormElement />,
  },
  {
    path: "/ui-elements",
    component: <UIElement />,
  },
  {
    path: "/settings",
    component: <Settings />,
  },
];

export default ProtectedRoutes;
