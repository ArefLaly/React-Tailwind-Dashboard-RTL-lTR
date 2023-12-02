import { GlobeAltIcon } from "@heroicons/react/24/outline";
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import UseLocalStorage from "../../../hooks/layout/useLocalStorage";
import { useEffect } from "react";
const LangSwitcher = () => {
  const [lang, setLang] = UseLocalStorage("app-lang", "english");
  const { t, i18n } = useTranslation();
  const menuItems = [
    {
      name: "English",
      code: "english",
    },
    {
      name: "دری",
      code: "dari",
    },
    {
      name: "پشتو",
      code: "pashto",
    },
  ];
  const changeLang = (language: string) => {
    i18n.changeLanguage(language.toString());
    setLang(language.toString());
  };
  useEffect(() => {
    document.body.dir = t("dir");
  }, [lang]);

  return (
    <Menu>
      <MenuHandler>
        <IconButton variant="text" className="mr-2 text-gray">
          <GlobeAltIcon className="w-5 h-5" />
        </IconButton>
      </MenuHandler>
      <MenuList className="flex flex-col gap-2 border-0 dark:bg-boxdark">
        {menuItems.map((item) => (
          <MenuItem
            onClick={() => changeLang(item.code)}
            id={item.code}
            key={item.code}
            className={`flex items-center gap-4 py-2 pl-2 pr-8 ${
              lang === item.code && "bg-red-400 text-white"
            }`}
          >
            <Typography
              variant="small"
              color="gray"
              className="font-normal text-inherit rtl-font"
            >
              {item.name}
            </Typography>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default LangSwitcher;
