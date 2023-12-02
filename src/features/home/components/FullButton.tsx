import {
  ArrowDownOnSquareStackIcon,
  Cog8ToothIcon,
  HomeIcon,
  ServerStackIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const FullButton = () => {
  const { t } = useTranslation();
  return (
    <div className="grid gap-3 p-1 md:grid-cols-12">
      {/* Start Col */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.8, delay: 1 }}
        className="col-span-12 opacity-0 md:col-span-3 lg:col-span-2"
      >
        <Link to={"/home"}>
          <div className="flex flex-col items-center justify-center p-4 text-white bg-blue-400 rounded-md card-item-windows">
            <HomeIcon className="w-10 h-10 text-white" />
            <span>{t("Home")}</span>
          </div>
        </Link>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.8, delay: 1 }}
        className="col-span-12 opacity-0 md:col-span-3 lg:col-span-4"
      >
        <Link to={"/Profile"}>
          <div className="flex flex-col items-center justify-center p-4 text-white bg-green-400 rounded-md card-item-windows">
            <UserCircleIcon className="w-10 h-10 text-white" />
            <span>{t("Profile")}</span>
          </div>
        </Link>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.8, delay: 1 }}
        className="col-span-12 opacity-0 md:col-span-3 lg:col-span-2"
      >
        <Link to={"/Profile"}>
          <div className="flex flex-col items-center justify-center p-4 text-white bg-yellow-900 rounded-md card-item-windows">
            <Cog8ToothIcon className="w-10 h-10 text-white" />
            <span>{t("Profile")}</span>
          </div>
        </Link>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.8, delay: 1 }}
        className="col-span-12 opacity-0 md:col-span-3 lg:col-span-2"
      >
        <Link to={"/Profile"}>
          <div className="flex flex-col items-center justify-center p-4 text-white bg-orange-400 rounded-md card-item-windows">
            <ServerStackIcon className="w-10 h-10 text-white" />
            <span>{t("Profile")}</span>
          </div>
        </Link>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.8, delay: 1 }}
        className="col-span-12 opacity-0 md:col-span-3 lg:col-span-2"
      >
        <Link to={"/Profile"}>
          <div className="flex flex-col items-center justify-center p-4 text-white bg-blue-900 rounded-md card-item-windows">
            <ArrowDownOnSquareStackIcon className="w-10 h-10 text-white" />
            <span>{t("Profile")}</span>
          </div>
        </Link>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.8, delay: 1 }}
        className="col-span-12 opacity-0 md:col-span-3 lg:col-span-4"
      >
        <Link to={"/home"}>
          <div className="flex flex-col items-center justify-center p-4 text-white bg-red-400 rounded-md card-item-windows">
            <HomeIcon className="w-10 h-10 text-white" />
            <span>{t("Home")}</span>
          </div>
        </Link>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.8, delay: 1 }}
        className="col-span-12 opacity-0 md:col-span-3 lg:col-span-2"
      >
        <Link to={"/Profile"}>
          <div className="flex flex-col items-center justify-center p-4 text-white bg-blue-900 rounded-md card-item-windows">
            <UserCircleIcon className="w-10 h-10 text-white" />
            <span>{t("Profile")}</span>
          </div>
        </Link>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.8, delay: 1 }}
        className="col-span-12 opacity-0 md:col-span-3 lg:col-span-2"
      >
        <Link to={"/Profile"}>
          <div className="flex flex-col items-center justify-center p-4 text-white bg-green-900 rounded-md card-item-windows">
            <Cog8ToothIcon className="w-10 h-10 text-white" />
            <span>{t("Profile")}</span>
          </div>
        </Link>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.8, delay: 1 }}
        className="col-span-12 opacity-0 md:col-span-3 lg:col-span-2"
      >
        <Link to={"/Profile"}>
          <div className="flex flex-col items-center justify-center p-4 text-white bg-purple-700 rounded-md card-item-windows">
            <ServerStackIcon className="w-10 h-10 text-white" />
            <span>{t("Profile")}</span>
          </div>
        </Link>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.8, delay: 1 }}
        className="col-span-12 opacity-0 md:col-span-3 lg:col-span-2"
      >
        <Link to={"/Profile"}>
          <div className="flex flex-col items-center justify-center p-4 text-white bg-blue-400 rounded-md card-item-windows">
            <ArrowDownOnSquareStackIcon className="w-10 h-10 text-white" />
            <span>{t("Profile")}</span>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default FullButton;
