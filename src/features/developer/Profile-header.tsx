import {
  ChatBubbleBottomCenterIcon,
  DevicePhoneMobileIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import me from "./../../assets/images/me-2.png";
import github from "./../../assets/images/social-media/icons8_github_48px.png";
import linkedIn from "./../../assets/images/social-media/icons8_linkedin_circled_48px.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
export default () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="z-0 p-10 bg-white md:p-0 dark:bg-boxdark developer-profile">
        <div className="grid gap-3 lg:grid-cols-5">
          <div className="col-span-5 md:col-span-2">
            <div className="flex items-center justify-center h-full">
              <div className="max-w-xs px-5 ">
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{ duration: 1, delay: 2.5 }}
                  className="text-3xl font-bold"
                >
                  <span className="text text-brandBlue">
                    {t("Mohammad Arif")}
                  </span>
                  <span> </span>
                  {t("Laly")}
                </motion.h1>
                <motion.h6
                  initial={{
                    opacity: 0,
                    scaleY: 0,
                  }}
                  animate={{
                    scaleY: 1,
                    opacity: 1,
                  }}
                  transition={{ duration: 1, delay: 2.8 }}
                  className="mb-1 text-xl text-center last:"
                >
                  {t("Fullstack Web Developer")}
                </motion.h6>
                <motion.span
                  initial={{
                    opacity: 0,
                    scaleY: 0,
                  }}
                  animate={{
                    scaleY: 1,
                    opacity: 1,
                  }}
                  transition={{ duration: 1, delay: 3 }}
                  className="block border-b-2 border-brandBlue w-[85%] m-auto"
                ></motion.span>
                <motion.div
                  initial={{
                    opacity: 0,
                    scaleY: 0,
                  }}
                  animate={{
                    scaleY: 1,
                    opacity: 1,
                  }}
                  transition={{ duration: 1, delay: 3 }}
                  className="flex justify-center gap-4 mt-2"
                >
                  <a
                    target="_blank"
                    className="duration-300 hover:scale-125"
                    href="https://af.linkedin.com/in/mohammad-arif-laly69ba78233"
                  >
                    <img src={linkedIn} className="w-6" alt="" />
                  </a>
                  <a
                    target="_blank"
                    className="duration-300 hover:scale-125"
                    href="https://github.com/ArefLaly"
                  >
                    <img src={github} className="w-6" alt="" />
                  </a>
                </motion.div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="relative z-0 col-span-5 md:col-span-1 min-h-[300px] overflow-y-hidden">
            <motion.div
              className="relative z-0 min-h-[300px] overflow-y-hidden"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              <img
                className="absolute bottom-0 z-0 origin-top -translate-x-1/2 left-1/2"
                src={me}
                alt=""
              />
            </motion.div>
          </div>
          <div className="col-span-5 md:col-span-2">
            <div className="flex items-center justify-center w-full h-full ">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{ duration: 0.4, delay: 3 }}
                className="relative px-10 py-6"
              >
                <div className="absolute left-0 z-0 gap-5 p-1 text-white bg-brandBlue rtl:right-0 rtl:left-auto">
                  <span className="absolute top-0 left-1/2 -translate-x-1/2   z-0 h-[20px] w-[20px] rotate-45 -translate-y-1/2 bg-brandBlue"></span>
                  <DevicePhoneMobileIcon className="relative z-10 w-5 h-5 mb-1" />
                  <ChatBubbleBottomCenterIcon className="relative z-10 w-5 h-5 mb-1" />
                  <HomeIcon className="relative z-10 w-5 h-5 mb-1" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2   z-0 h-[20px] w-[20px] rotate-45 translate-y-1/2 bg-brandBlue"></span>
                </div>
                <div className="gap-5">
                  <h6 className="mb-1" dir="ltr">
                    {t("0093 784 970 037")}
                  </h6>
                  <h6 className="mb-1" dir="ltr">
                    {t("aref.laly1397@gmail.com")}
                  </h6>
                  <h6 className="mb-1" dir="ltr">
                    {t("Kabul, Afghanistan")}
                  </h6>
                  <h3 className="font-extrabold text-center text-brandBlue">
                    For More Design Contact me!
                  </h3>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
