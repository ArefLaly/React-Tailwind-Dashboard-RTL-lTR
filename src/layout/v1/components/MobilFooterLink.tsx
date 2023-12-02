import React, { useContext } from "react";
// import { HeroIcon } from "@heroicons/react";
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
      className={`w-full relative    focus:text-red-600 hover:text-red-600 justify-center text-center pt-2 pb-1 flex flex-col`}
    >
      <div
        className={`absolute bg-white   left-1/2  dark:bg-boxdark  p-4 -translate-x-1/2  border-[5px]  ${
          isActiveLink && " text-red-300 -translate-y-1/3  "
        }  h-[54px] border-transparent duration-300 bg-white   w-[54px] rounded-full`}
      >
        {React.createElement(icon, {
          className: `w-10 ${
            isActiveLink && " bg-brandBlue text-white"
          } left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2  absolute h-10 p-[10px]  rounded-full  inline-block mb-1`,
          strokeWidth: 2,
        })}
      </div>
      <span
        className={`block  text-xs absolute left-0 right-0 text-center opacity-0 duration-100 ${
          isActiveLink && "translate-y-3 font-bold opacity-100  text-brandBlue"
        } `}
      >
        {name}{" "}
      </span>
      <span
        className={` rounded-full w-12 h-12  bg-brandBlue absolute  top-24 left-1/2 -translate-x-1/2 ${
          isActiveLink && "!top-14 opacity-100"
        }  duration-300 `}
      >
        {" "}
      </span>
    </NavLink>
  );
};
export default MobileFooterLink;
