import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import React, { useContext, useState } from "react";
import { LayoutContext } from "../../../context/layout/Layout.context";
import { motion } from "framer-motion";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import EnToFa from "../../../features/translate/components/EnToFa";
type props = {
  url: string;
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  subLinks: Array<{
    url: string;
    icon: React.ForwardRefExoticComponent<
      React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
        title?: string;
        titleId?: string;
      } & React.RefAttributes<SVGSVGElement>
    >;
    title: string;
  }> | null;
};
const SideNavLink = ({ title, url, icon, subLinks }: props) => {
  const { mobileSize, sidebarOpen, setSidebarOpen } = useContext(LayoutContext);
  const location = useLocation();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const isActive = location.pathname === url;
  const cssClass = ` ${
    sidebarOpen ? " p-0 " : " px-2 !mx-0 justify-center "
  }  side-nav-link    text-gray dark:text-textdark !bg-opacity-30 dark:border-b-darkborder  hover:font-bold hover:text-brandBlue hover:bg-opacity-10  ${
    isActive && " !text-brandBlue !bg-brandBlue "
  } `;

  // const handleOpen = () => {
  //   setOpen(!open);
  // };
  return (
    <>
      {subLinks && subLinks.length > 0 ? (
        <div>
          <div onClick={() => setOpen(!open)} className={cssClass}>
            <div className={`p-2 rounded whitespace-nowrap `}>
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
              <EnToFa value={t(title)} />
            </span>
            <ChevronRightIcon
              className={`absolute duration-300 w-4 h-4 right-2 top-1/2 rtl:left-2 rtl:rotate-180   rtl:right-auto -translate-y-1/2 ${
                open && " rotate-90 rtl:rotate-90 "
              } ${!sidebarOpen && "hidden"}`}
            />
          </div>
          <motion.div
            animate={{
              height: open && sidebarOpen ? "auto" : 0,
            }}
            className="pl-8 overflow-hidden rtl:pr-8 rtl:pl-1 card-body "
          >
            <div className={`flex flex-col gap-3 p-2 rounded-sm ‍`}>
              {subLinks.map((subItem) => (
                <Link
                  key={"sub-nav-" + url + subItem.url}
                  onClick={() => mobileSize && setSidebarOpen(false)}
                  to={url + subItem.url}
                  className={`px-2 dark:text-white ${
                    url + subItem.url === location.pathname &&
                    " !text-brandBlue "
                  }`}
                >
                  <div className="flex gap-x-3">
                    {React.createElement(subItem.icon, {
                      className: `w-4 h-4 z-20  duration-300 ${
                        isActive && " text-brand-color "
                      }  ${!sidebarOpen && "m-auto"} `,
                      strokeWidth: 1,
                    })}
                    <span>
                      <EnToFa value={t(subItem.title)} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      ) : (
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
            <EnToFa value={t(title)} />
          </span>
        </Link>
      )}
    </>
  );
};
export default SideNavLink;
