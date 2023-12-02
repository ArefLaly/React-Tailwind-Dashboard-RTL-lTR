import { useEffect } from "react";
import UseLocalStorage from "./useLocalStorage";
const useColorMode = () => {
  const [colorMode, setColorMode] = UseLocalStorage("color-theme", "light");
  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;
    colorMode === "dark"
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, [colorMode]);
  return [colorMode, setColorMode];
};

export default useColorMode;
