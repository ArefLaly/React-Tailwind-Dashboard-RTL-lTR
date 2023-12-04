import {
  ArrowPathIcon,
  Bars3Icon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import { IconButton } from "@material-tailwind/react";

import FullScreenSwitcher from "../../../features/template/components/FullScreenSwitcher";
import LangSwitcher from "../../../features/template/components/LangSwitcher";
import DarkModeSwitcher from "../../../features/template/components/DarkModeSwitcher";
import { useContext, useEffect } from "react";
import { LayoutContext } from "../../../context/layout/Layout.context";
import useUser from "../../../hooks/useUser";
import ProfileMenu from "../../../features/authentication/components/ProfileMenu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(LayoutContext);
  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {}, [user]);
  return (
    <header className="sticky top-0 duration-500 z-[10000] flex  bg-white bg-opacity-100 drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none w-full">
      <div className="flex items-center justify-between flex-grow px-0 py-3 shadow-2 md:px-2 ">
        <div className="flex items-center">
          {/* <!-- Hamburger Toggle BTN --> */}
          {user && (
            <IconButton
              variant="text"
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
              className="mr-2 text-gray"
            >
              <Bars3Icon className="w-6 h-6" />
            </IconButton>
          )}
        </div>
        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2">
            <IconButton
              onClick={() => {
                navigate(-1);
              }}
              variant="text"
              className="mr-2 rtl:rotate-180 text-gray"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </IconButton>
            <IconButton
              onClick={() => {
                navigate(0);
              }}
              variant="text"
              className="mr-2 text-gray"
            >
              <ArrowPathIcon className="w-5 h-5" />
            </IconButton>
            <FullScreenSwitcher />
            {/* {user && (
              <Link to="/inbox" className="relative">
                <IconButton variant="text" className="relative mr-2 text-gray">
                  <ChatBubbleBottomCenterIcon className="w-5 h-5" />
                  <div className="absolute bottom-0 w-3 h-3 translate-y-1 bg-red-400 rounded-full -right-2 animate-pulse"></div>
                </IconButton>
              </Link>
            )} */}
            <LangSwitcher />
            {/* <!-- Dark Mode Toggler --> */}
            <DarkModeSwitcher />
            {/* <!-- Dark Mode Toggler --> */}
            {user && <ProfileMenu />}
          </ul>
          {/* <!-- User Area --> */}
          {/* <DropdownUser /> */}
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
