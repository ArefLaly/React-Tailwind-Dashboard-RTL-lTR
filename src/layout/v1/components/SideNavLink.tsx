import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import React, { useContext } from "react";
import { LayoutContext } from "../../../context/layout/Layout.context";
type props = {
  url: string;
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
};
const SideNavLink = ({ title, url, icon }: props) => {
  const { mobileSize, sidebarOpen, setSidebarOpen } = useContext(LayoutContext);
  const location = useLocation();
  const { t } = useTranslation();
  const isActive = location.pathname === url;
  const cssClass = ` ${!sidebarOpen && "justify-center"} ${
    isActive && "side-nav-link-active"
  } side-nav-link   text-gray dark:text-textdark dark:border-b-darkborder  hover:font-bold hover:text-brand-color hover:bg-opacity-10  `;

  return (
    <Link
      onClick={() => mobileSize && setSidebarOpen(false)}
      to={url}
      className={cssClass}
    >
      <div className={`p-2 rounded whitespace-nowrap`}>
        {React.createElement(icon, {
          className: `w-5 h-5 z-20  duration-300 ${
            isActive && " text-brand-color "
          }  ${!sidebarOpen && "m-auto"} `,
          strokeWidth: 1.5,
        })}
      </div>
      <span
        className={`${
          !sidebarOpen && "hidden"
        } origin-left dark:text-textdark z-20 duration-100 whitespace-nowrap`}
      >
        {t(title)}
      </span>
    </Link>
  );
};
export default SideNavLink;
