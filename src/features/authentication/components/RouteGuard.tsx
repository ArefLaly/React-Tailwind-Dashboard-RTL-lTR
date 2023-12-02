import { Navigate, useLocation } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import appService from "../../../data/services/app.service";
import UIRoutes from "../../../routes/UIRoutes"
type props = {
    children: JSX.Element
}
const RouteGuard = ({ children }: props): JSX.Element => {
    const { user } = useUser();
    const location = useLocation();
    if (!user) {
        return <Navigate to={UIRoutes.Auth.Login} state={{ from: location.pathname }} />;
    }
    if (appService.authService.isTokenExpired()) {
        // setLogout();
        return <></>
    }

    return children;
}

export default RouteGuard;