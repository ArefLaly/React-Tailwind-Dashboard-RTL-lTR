import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import EnToFa from "../../translate/components/EnToFa";

const Error500 = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-white gap-0 flex-col">
      <h1
        className="text-[90px] text-center m-0 p-0 text-red-700 "
        style={{ lineHeight: "60px" }}
      >
        <EnToFa value={t("500")} />
      </h1>
      <h1 className="text-[30px] text-center m-0 p-0 text-gray-500">
        {t("Internal Server Error!")}
      </h1>

      <Link to="/">
        <Button
          variant="text"
          className="flex items-center gap-3 p-2 px-8 font-bold text-gray-500 rounded-full"
        >
          <ChevronLeftIcon className="w-5 h-5" />
          {t("Back To Home")}
        </Button>
      </Link>
    </div>
  );
};
export default Error500;
