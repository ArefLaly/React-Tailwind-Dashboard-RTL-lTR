import { ChevronDownIcon, PowerIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import useUser from "../../../hooks/useUser";
import { NavLink, useNavigate } from "react-router-dom";
import UIRoutes from "../../../routes/UIRoutes";
import swal from "sweetalert";
import { useTranslation } from "react-i18next";
import { UserIcon } from "@heroicons/react/24/outline";
const ProfileMenu = () => {
  const { t } = useTranslation();
  const { user, setLogout } = useUser();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const closeMenu = () => setIsMenuOpen(false);
  const handleLogout = () => {
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

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className="border border-blue-500 p-0.5"
            src={user?.image}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1 border-none dark:bg-boxdark">
        <div className="flex items-center justify-around gap-1 p-3">
          <Avatar
            variant="circular"
            size="md"
            alt="User Profile Image"
            className="border border-blue-500 p-0.5"
            src={user?.image}
          />
          <Typography
            variant="small"
            className="py-1 text-center rtl-font"
            color={"inherit"}
          >
            {/* {t('dir') === 'ltr' ? (userna + ' "' + user?.student.eng_last_name + '"') : (user?.student?.student_name + ' "' + user?.student?.last_name + '"')} */}
            {user?.name}
          </Typography>
        </div>
        <hr />
        <MenuItem onClick={closeMenu}>
          <NavLink className={`flex items-center gap-2 rounded`} to="/profile">
            <UserIcon className="w-5 h-5" />
            <Typography
              as="span"
              variant="small"
              className="font-normal"
              color={"inherit"}
            >
              {t("Profile")}
            </Typography>
          </NavLink>
        </MenuItem>

        <MenuItem
          onClick={handleLogout}
          key="logout-btn"
          className={`flex items-center gap-2 rounded 
             hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
          `}
        >
          <PowerIcon className=" className: `h-4 w-4 text-red-500" />
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            color="red"
          >
            {t("Logout")}
          </Typography>
        </MenuItem>
        {/* <Logout  /> */}
      </MenuList>
    </Menu>
  );
};
export default ProfileMenu;
