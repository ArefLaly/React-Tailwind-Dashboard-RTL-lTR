import useColorMode from "../../../hooks/layout/useColorMode";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

const DarkModeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode();
  const { t } = useTranslation();
  return (
    <li className="bg-red">
      <label
        className={`relative bg-gray-300 dark:text-black dark:bg-bodydark m-0 block h-7 w-14 rounded-full ${
          colorMode === "dark" ? "bg-white" : "bg-stroke"
        }`}
      >
        <input
          type="checkbox"
          onChange={() =>
            setColorMode(colorMode === "light" ? "dark" : "light")
          }
          className="absolute top-0 z-50 w-full h-full m-0 duration-100 opacity-0 cursor-pointer"
        />
        <span
          className={`absolute  top-1/2 left-[3px] flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white   shadow-switcher duration-75 ease-linear ${
            colorMode === "dark" &&
            `!right-[3px] ${
              t("dir").toString() === "ltr" && "!translate-x-full"
            }`
          }`}
        >
          <SunIcon className="w-4 h-4 dark:hidden" />
          <MoonIcon className="hidden w-4 h-4 dark:inline-block" />
        </span>
      </label>
    </li>
  );
};

export default DarkModeSwitcher;
