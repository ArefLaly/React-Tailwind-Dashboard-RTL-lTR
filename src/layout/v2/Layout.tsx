import { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import MobileFooter from "./components/MobileFooter";

import { useTranslation } from "react-i18next";
import useUser from "../../hooks/useUser";
import { LayoutContext } from "../../context/layout/Layout.context";
import { ScrollContainer } from "react-nice-scroll";
import { motion } from "framer-motion";
type props = {
  children: JSX.Element;
};

const Layout = ({ children }: props) => {
  const { mobileSize, sidebarOpen } = useContext(LayoutContext);
  const { t } = useTranslation();
  const { user } = useUser();
  const mainContent = (
    <main
      className={` ${
        user ? "bg-layout dark:bg-darklayout" : "bg-white dark:bg-boxdark"
      }   dark:text-white text-[#3C4858]`}
    >
      <div className="p-2   min-h-[calc(89vh)] mx-auto   md:p-3 ">
        {children}
      </div>
    </main>
  );

  return (
    <div className={`app-layout ${t("font-class")}`}>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        {user && <Sidebar />}
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <motion.div
          className={`relative flex flex-col flex-1  z-[500] overflow-x-hidden overflow-y-auto transition-all duration-500 ${
            sidebarOpen && mobileSize ? "shadow-2xl " : ""
          }`}
          animate={{
            transform:
              sidebarOpen && mobileSize
                ? t("dir").toString() == "rtl"
                  ? "scale(0.75) translateX(-65%) "
                  : "scale(0.75) translateX(65%) "
                : "",
          }}
          transition={{
            duration: 0.5,
          }}
          id="main-wrapper"
        >
          {/* <!-- ===== Header Start ===== --> */}
          <Header />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}

          {!mobileSize ? (
            <ScrollContainer alwaysShowTracks>{mainContent}</ScrollContainer>
          ) : (
            mainContent
          )}
          {/* <!-- ===== Main Content End ===== --> */}
        </motion.div>
        {/* <!-- ===== Content Area End ===== --> */}
        {/* <!-- =====  Mobile Footer End ===== --> */}
        {user && <MobileFooter />}
        {/* <!-- =====  Mobile Footer ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default Layout;
