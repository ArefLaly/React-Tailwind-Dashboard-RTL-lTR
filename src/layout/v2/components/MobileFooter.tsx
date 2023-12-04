import {
  BookOpenIcon,
  Cog6ToothIcon,
  HomeIcon,
  Square3Stack3DIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import MobileFooterLink from "./MobilFooterLink";
import { LayoutContext } from "../../../context/layout/Layout.context";
import { useLocation } from "react-router-dom";

const MobileFooter = () => {
  const { t } = useTranslation();
  const { mobileSize, sidebarOpen } = useContext(LayoutContext);
  const location = useLocation();

  const links = [
    {
      name: t("UI Element"),
      url: "/ui-elements",
      icon: Square3Stack3DIcon,
      activeClass: "-translate-x-[50%] left-[10%] rtl:left-[90%] !opacity-100",
    },
    {
      name: t("Forms"),
      url: "/forms",
      icon: BookOpenIcon,
      activeClass: "-translate-x-[50%] left-[30%] rtl:left-[70%] !opacity-100",
    },
    {
      name: t("Home"),
      url: "/",
      icon: HomeIcon,
      activeClass: "-translate-x-1/2 left-1/2 !opacity-100",
    },
    {
      name: t("Profile"),
      url: "/profile",
      icon: UserIcon,

      activeClass: "-translate-x-[50%] left-[70%] rtl:left-[30%] !opacity-100",
    },
    {
      name: t("Settings"),
      url: "/Settings",
      icon: Cog6ToothIcon,

      activeClass: "-translate-x-[50%] left-[90%] rtl:left-[10%] !opacity-100",
    },
  ];
  const activeLink = links.filter((item) => item.url == location.pathname);
  return (
    <section
      className={`origin-bottom dark:bg-boxdark  footer-shadow  ${
        !sidebarOpen && mobileSize ? "translate-y-0" : "translate-y-24"
      }    duration-300 fixed inset-x-0  z-[9000] bottom-0 bg-white shadow`}
    >
      <div className="flex justify-between min-h-[65px] relative pb-2">
        <div
          className={`absolute mobile-fotter-bar left-0 transition-all ease-out duration-[500ms] top-0 w-10 h-1 rounded-full bg-brandBlue !opacity-0  ${
            activeLink.length > 0 && activeLink[0].activeClass
          }`}
        ></div>
        {links.map((link) => (
          <MobileFooterLink
            key={`mobile-nav-${link.url}`}
            icon={link.icon}
            name={link.name}
            url={link.url}
          />
        ))}
        <div
          className={`absolute  mobile-fotter-bar-bottom left-0 transition-all ease-out duration-[500ms] -bottom-[32px] w-10 h-10 rounded-full bg-brandBlue !opacity-0 ${
            activeLink.length > 0 && activeLink[0].activeClass
          }`}
        ></div>
      </div>
    </section>
  );
};
export default MobileFooter;
