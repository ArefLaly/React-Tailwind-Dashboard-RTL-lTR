import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import TopLoader from "../features/template/components/TopLoader";
import RouteGuard from "../features/authentication/components/RouteGuard";
import Login from "../pages/Login";

import ProtectedRoutes from "./ProtectedRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      {ProtectedRoutes.map((item) => (
        <Route
          key={"route-" + item.path}
          path={item.path}
          element={
            <RouteGuard>
              <Suspense fallback={<TopLoader />}>{item.component}</Suspense>
            </RouteGuard>
          }
        />
      ))}

      <Route path="/auth/user" element={<Login />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
export default AppRoutes;
