import { useSelector, useDispatch } from "react-redux";
import {
  logout,
  selectCurrentUser,
  setCredentials,
} from "../context/slice/auth.slice";
import { User } from "../data/models/auth/User";
import appService from "../data/services/app.service";

const useUser = (): {
  user: User | null;
  setUser: Function;
  setLogout: Function;
} => {
  const dispatch = useDispatch();
  const user: User | null = useSelector(selectCurrentUser);
  if (appService.authService.isTokenExpired()) {
    dispatch(setCredentials({ user: null }));
  }
  function setUser(token: string) {
    if (token !== undefined || token !== null || token !== "") {
      appService.authService.storeToken(token);
      dispatch(
        setCredentials({ user: appService.authService.getCurrentUser() })
      );
    }
  }
  function setLogout() {
    appService.authService.logout();
    dispatch(logout());
  }
  return { user, setUser, setLogout };
};
export default useUser;
