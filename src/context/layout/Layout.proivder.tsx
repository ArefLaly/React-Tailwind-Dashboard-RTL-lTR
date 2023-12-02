import { useState, useEffect } from "react";
import { LayoutContext } from "./Layout.context";
type props = { children: JSX.Element };
const LayoutProvider = ({ children }: props) => {
  const [sidebarOpen, setSidebarToggle] = useState(false);
  const [mobileSize, changeMobileSize] = useState(false);
  const setSidebarOpen = (value: boolean) => {
    setSidebarToggle(value);
  };
  //For Toggle Mobil Size
  const setMobileSize = (value: boolean) => {
    changeMobileSize(value);
  };
  useEffect(() => {
    setSidebarOpen(window.innerWidth > 960 ? true : false);
    setMobileSize(window.innerWidth <= 960 ? true : false);
    // setVisisbleFooter(window.scrollY < scrollY ? true : false);
    window.addEventListener("resize", () => {
      setSidebarOpen(window.innerWidth > 960 ? true : false);
      setMobileSize(window.innerWidth <= 960 ? true : false);
    });
  }, [mobileSize]);
  return (
    <LayoutContext.Provider
      value={{ sidebarOpen, mobileSize, setMobileSize, setSidebarOpen }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
export default LayoutProvider;
