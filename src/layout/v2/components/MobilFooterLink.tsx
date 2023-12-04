import React, { useContext } from "react";

import { NavLink, useLocation } from "react-router-dom";
import { LayoutContext } from "../../../context/layout/Layout.context";
type props = {
  name: string;
  url: string;
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
};
const MobileFooterLink = ({ name, url, icon }: props) => {
  const { setSidebarOpen } = useContext(LayoutContext);
  const location = useLocation();
  const isActiveLink = location.pathname == url;
  const handleClick = () => {
    setSidebarOpen(false);
  };

  return (
    <NavLink
      onClick={handleClick}
      to={url}
      className={`w-full  dark:text-white relative focus:text-brandBlue hover:text-brandBlue justify-center text-center pt-2 pb-1 flex flex-col mt-2`}
    >
      <div className="flex flex-col items-center justify-center gap-1 ">
        {React.createElement(icon, {
          className: `w-5   ${isActiveLink && " text-brandBlue"} `,
          strokeWidth: 2,
        })}
        <span
          className={`text-sm duration-300 opacity-0 d ${
            isActiveLink && "opacity-100 text-brandBlue"
          }`}
        >
          {" "}
          {name}
        </span>
      </div>
    </NavLink>
  );
};
export default MobileFooterLink;
