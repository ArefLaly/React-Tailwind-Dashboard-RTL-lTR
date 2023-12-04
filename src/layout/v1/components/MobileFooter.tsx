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

const MobileFooter = () => {
  const { t } = useTranslation();
  const { mobileSize, sidebarOpen } = useContext(LayoutContext);
  const links = [
    {
      name: t("UI Element"),
      url: "/ui-elements",
      icon: Square3Stack3DIcon,
    },
    {
      name: t("Forms"),
      url: "/forms",
      icon: BookOpenIcon,
    },
    {
      name: t("Home"),
      url: "/",
      icon: HomeIcon,
    },
    {
      name: t("Profile"),
      url: "/profile",
      icon: UserIcon,
    },
    {
      name: t("Settings"),
      url: "/Settings",
      icon: Cog6ToothIcon,
    },
  ];
  return (
    <section
      className={`origin-bottom dark:bg-boxdark  footer-shadow  ${
        !sidebarOpen && mobileSize ? "translate-y-0" : "translate-y-24"
      }    duration-300 fixed inset-x-0  z-[9000] bottom-0 bg-white shadow`}
    >
      <div className="flex justify-between min-h-[65px]">
        {links.map((link) => (
          <MobileFooterLink
            key={`mobile-nav-${link.url}`}
            icon={link.icon}
            name={link.name}
            url={link.url}
          />
        ))}
      </div>
    </section>
  );
};
export default MobileFooter;
