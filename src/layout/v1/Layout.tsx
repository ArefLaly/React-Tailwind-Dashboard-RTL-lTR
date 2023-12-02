import { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import MobileFooter from "./components/MobileFooter";

import { useTranslation } from "react-i18next";
import useUser from "../../hooks/useUser";
import { LayoutContext } from "../../context/layout/Layout.context";
import { ScrollContainer } from "react-nice-scroll";
type props = {
  children: JSX.Element;
};

const Layout = ({ children }: props) => {
  const { mobileSize } = useContext(LayoutContext);
  const { t } = useTranslation();
  const mainContent = (
    <main>
      <div className="p-2   min-h-[calc(100vh)] mx-auto   md:p-3 ">
        {children}
      </div>
    </main>
  );
  const { user } = useUser();

  return (
    <div
      className={`app-layout ${t("font-class")} ${
        user ? "bg-layout dark:bg-darklayout" : "bg-white dark:bg-boxdark"
      }   dark:text-white text-[#3C4858]`}
    >
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== s Backdrop Start ===== --> */}
        {/* <div onClick={() => setSidebarOpen(false)} className={` ${(mobileSize && !sidebarOpen) && 'hidden '}  ${mobileSize && 'w-screen h-screen'}  fixed left-0 top-0  duration-300  backdrop-filter bg-black bg-opacity-25 z-[999]`}></div> */}
        {/* <!-- ===== Sidebar Backdrop End ===== --> */}
        {/* <!-- ===== Sidebar Start ===== --> */}
        {user && <Sidebar />}
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div
          className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto"
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
        </div>
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
