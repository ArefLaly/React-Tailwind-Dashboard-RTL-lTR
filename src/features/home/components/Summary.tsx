import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Progress } from "@material-tailwind/react";
const SummaryCards = () => {
  const { t } = useTranslation();
  return (
    <div className="grid gap-3 p-1 md:grid-cols-12">
      {/* Start Col */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="col-span-12 md:col-span-6 lg:col-span-3"
      >
        {/* Start Card */}
        <div className="p-3 duration-500 bg-white rounded-md dark:bg-boxdark">
          <h6 className="text-2xl font-bold">{t("Orders")}</h6>
          <div className="flex justify-between mt-2 mb-2 rounded-md">
            <span className="flex items-center px-2 text-xs text-white bg-green-700 rounded-md">
              100%
            </span>
            <span>10000</span>
          </div>
          <Progress className="h-1" value={70} color="green" />
        </div>
        {/* End Card */}
      </motion.div>
      {/* End Col */}
      {/* Start Col */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="col-span-12 md:col-span-6 lg:col-span-3"
      >
        {/* Start Card */}
        <div className="p-3 bg-white rounded-md dark:bg-boxdark">
          <h6 className="text-2xl font-bold">{t("Tax Deduction")}</h6>
          <div className="flex justify-between mt-2 mb-2 rounded-md">
            <span className="flex items-center px-2 text-xs text-white bg-red-700 rounded-md">
              20%
            </span>
            <span>10000</span>
          </div>
          <Progress className="h-1" value={20} color="red" />
        </div>
        {/* End Card */}
      </motion.div>
      {/* End Col */}
      {/* Start Col */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="col-span-12 md:col-span-6 lg:col-span-3"
      >
        {/* Start Card */}
        <div className="p-3 bg-white rounded-md dark:bg-boxdark">
          <h6 className="text-2xl font-bold">{t("Revenue")}</h6>
          <div className="flex justify-between mt-2 mb-2 rounded-md">
            <span className="flex items-center px-2 text-xs text-white bg-blue-700 rounded-md">
              50%
            </span>
            <span>70,000</span>
          </div>
          <Progress className="h-1" value={50} color="blue" />
        </div>
        {/* End Card */}
      </motion.div>
      {/* End Col */}
      {/* Start Col */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="col-span-12 md:col-span-6 lg:col-span-3"
      >
        {/* Start Card */}
        <div className="p-3 bg-white rounded-md dark:bg-boxdark">
          <h6 className="text-2xl font-bold">{t("Yearly Sales")}</h6>
          <div className="flex justify-between mt-2 mb-2 rounded-md">
            <span className="flex items-center px-2 text-xs text-white bg-purple-700 rounded-md">
              80%
            </span>
            <span>100000</span>
          </div>
          <Progress className="h-1" value={70} color="purple" />
        </div>
        {/* End Card */}
      </motion.div>
      {/* End Col */}
    </div>
  );
};

export default SummaryCards;
