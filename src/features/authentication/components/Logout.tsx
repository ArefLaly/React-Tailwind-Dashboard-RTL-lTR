import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useEffect } from "react";
import useUser from "../../../hooks/useUser";
import { useTranslation } from "react-i18next";
import UIRoutes from "../../../routes/UIRoutes";
type props = {
  children: JSX.Element;
  className: string;
};
const Logout = ({ children, className }: props) => {
  const { t } = useTranslation();
  const { setLogout, user } = useUser();
  const navigate = useNavigate();

  const handleClick = () => {
    swal({
      title: t("Logout"),
      text: t("Are you sure?"),
      icon: "warning",
      buttons: [t("Cancel"), t("Ok")],
      dangerMode: true,
    }).then((ok) => {
      if (ok) {
        setLogout();
        navigate(UIRoutes.Auth.Login);
      }
    });
  };
  useEffect(() => {}, [user]);
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};
export default Logout;
