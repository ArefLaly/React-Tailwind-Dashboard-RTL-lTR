import { useContext, useEffect } from "react";
import {
  CodeBracketIcon,
  HomeIcon,
  RocketLaunchIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import {
  UserCircleIcon,
  PowerIcon,
  Cog8ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { IconButton, Typography } from "@material-tailwind/react";
import logo from "../../../assets/images/logo.png";
import { ScrollContainer } from "react-nice-scroll";
import { useTranslation } from "react-i18next";

import useUser from "../../../hooks/useUser";
import { LayoutContext } from "../../../context/layout/Layout.context";
import Logout from "../../../features/authentication/components/Logout";
import { motion } from "framer-motion";
import SideNavLink from "./SideNavLink";
export interface NavLinkProp {
  url: string;
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  subLinks?: NavLinkProp[];
}

const Sidebar = () => {
  const { mobileSize, sidebarOpen, setSidebarOpen } = useContext(LayoutContext);
  const { t } = useTranslation();
  const { user } = useUser();
  const navlinks = [
    {
      url: "/",
      icon: HomeIcon,
      title: "Home",
      subLinks: null,
    },
    {
      url: "/profile",
      icon: UserCircleIcon,
      title: "Profile",
      subLinks: null,
    },

    {
      url: "/ui-elements",
      icon: Square3Stack3DIcon,
      title: "UI Element",
      subLinks: [
        {
          url: "/tables",
          icon: Cog8ToothIcon,
          title: "Tables",
          subLinks: null,
        },
      ],
    },
    {
      url: "/forms",
      icon: PencilIcon,
      title: "Forms",
      subLinks: null,
    },
    {
      url: "/settings",
      icon: Cog8ToothIcon,
      title: "Settings",
      subLinks: null,
    },
    {
      url: "/errors",
      icon: CodeBracketIcon,
      title: "Error Page",
      subLinks: [
        { url: "/404", icon: RocketLaunchIcon, title: "404" },
        { url: "/500", icon: RocketLaunchIcon, title: "500" },
      ],
    },
  ];
  const sidebarMenu = (
    <nav className={` duration-300 px-4`}>
      {navlinks.map((item) => (
        <SideNavLink
          key={"side-navlink-" + item.url}
          title={item.title}
          icon={item.icon}
          url={item.url}
          subLinks={item.subLinks}
        />
      ))}
    </nav>
  );
  useEffect(() => {
    setSidebarOpen(true);
    mobileSize && setSidebarOpen(false);
  }, []);
  return (
    <>
      {/* <!-- ===== Start Sidebar ===== --> */}
      <motion.aside
        animate={{
          transform: sidebarOpen ? "translateX(0)" : "translateX(-100)",
          width: sidebarOpen
            ? mobileSize
              ? "256px"
              : "256px"
            : mobileSize
            ? "0"
            : "64px",
        }}
        transition={{
          duration: 0.5,
        }}
        className={`main-sidebar`}
      >
        {/* <div className="absolute top-0 flex justify-end w-full right md:hidden">
          <IconButton
            variant="text"
            onClick={() => setSidebarOpen(false)}
            className=" text-gray"
          >
            <XMarkIcon className="w-6 h-5" />
          </IconButton>
        </div> */}
        <div className="flex items-center content-center mx-auto mt-1 gap-x-1 ">
          {/* <!-- ===== User Profile Image Start ===== --> */}
          <div
            className={` relative rounded-full overflow-hidden  ${
              sidebarOpen ? "w-16 h-16" : "w-12 h-12"
            }  `}
          >
            <img src={logo} alt="Arif Laly Logo" className="sidebar-logo" />
          </div>
          {/* <!-- ===== User Profile Image End ===== --> */}
          <Typography
            className={`flex-2 whitespace-nowrap  ${!sidebarOpen && "hidden"}`}
            variant="h4"
          >
            {t("lang") !== "dari" && (
              <>
                <span className="text-brand-color">
                  {t("Arif")} {t("Laly")}
                </span>{" "}
              </>
            )}
            {t("lang") === "dari" && (
              <>
                <span className="text-brand-color">
                  {t("Arif")} {t("Laly")}
                </span>
              </>
            )}
          </Typography>
        </div>
        <div className="flex w-[95%] mx-auto p-2 flex-col items-center content-center mt-5 gap-y-1  border-b-2 border-gray-300 dark:border-gray-900">
          {/* <!-- ===== User Profile Image Start ===== --> */}
          <div
            className={`shadow-md relative   ${
              sidebarOpen ? "w-16 h-16" : "w-12 h-12"
            }  rounded-full overflow-hidden`}
          >
            {/* <img src={Boolean(user?.image) == false ? defualtUser : user?.image} alt="Student Image" className="absolute -translate-x-1/2 -translate-y-1/2 w-fit left-1/2 top-1/2" /> */}
            <img
              src={user?.image}
              alt="User Image"
              className="absolute -translate-x-1/2 -translate-y-1/2 w-fit left-1/2 top-1/2"
            />
          </div>
          {/* <!-- ===== User Profile Image End ===== --> */}
          <Typography
            className={`flex-2  whitespace-nowrap rtl-font ${
              !sidebarOpen && "hidden"
            }`}
          >
            {user?.name}
            {/* <span className="text-red-600">Student</span> <span>Portal</span> */}
          </Typography>
        </div>

        <div className="flex flex-col mb-24 overflow-x-hidden overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          {mobileSize ? (
            sidebarMenu
          ) : (
            <ScrollContainer>{sidebarMenu}</ScrollContainer>
          )}

          {/* <!-- Sidebar Menu --> */}
        </div>

        <div
          className={`absolute py-2  flex justify-center left-[2.5%]  w-[95%] ${
            mobileSize ? "!border-0 top-20" : "bottom-0"
          }  border-t-[2px]   border-gray-300  dark:border-gray-900 ${
            !sidebarOpen && "flex-col"
          }`}
        >
          <IconButton variant="text" className="m-auto text-brandBlue">
            <Cog8ToothIcon className="w-4 h-4" />
          </IconButton>
          <Logout className="m-auto">
            <IconButton variant="text" className="text-red-700">
              <PowerIcon className="w-4 h-4 " />
            </IconButton>
          </Logout>
        </div>
      </motion.aside>
      {/* <!-- ===== Start Sidebar ===== --> */}
    </>
  );
};

export default Sidebar;
