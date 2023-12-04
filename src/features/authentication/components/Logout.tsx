import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useContext, useEffect } from "react";
import useUser from "../../../hooks/useUser";
import { useTranslation } from "react-i18next";
import UIRoutes from "../../../routes/UIRoutes";
import { LayoutContext } from "../../../context/layout/Layout.context";
type props = {
  children: JSX.Element;
  className: string;
};
const Logout = ({ children, className }: props) => {
  const { setSidebarOpen } = useContext(LayoutContext);
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
        setSidebarOpen(false);
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
