import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const FormElement = lazy(() => import("../pages/FormElements"));
const Profile = lazy(() => import("../pages/Profile"));
const UIElement = lazy(() => import("../pages/UIElements"));
const Settings = lazy(() => import("../pages/Settings"));
const Tables = lazy(() => import("../features/UIElement/components/Tables"));
const Error404 = lazy(() => import("../features/errors/components/Error404"));
const Error500 = lazy(() => import("../features/errors/components/Error500"));

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
    path: "/ui-elements/tables",
    component: <Tables />,
  },
  {
    path: "/settings",
    component: <Settings />,
  },
  {
    path: "/errors/404",
    component: <Error404 />,
  },
  {
    path: "/errors/500",
    component: <Error500 />,
  },
];

export default ProtectedRoutes;
