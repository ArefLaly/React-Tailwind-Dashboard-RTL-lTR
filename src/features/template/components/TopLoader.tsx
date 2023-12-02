import { memo } from "react";
const TopLoader = () => {
  return (
    <div
      style={{
        animationDuration: "3000ms",
      }}
      className={`top-loeader-animation fixed ani left-0 rtl:right-0 top-0  duration-1000 h-1 bg-red-400 z-[1000] `}
    ></div>
  );
};
export default memo(TopLoader);
