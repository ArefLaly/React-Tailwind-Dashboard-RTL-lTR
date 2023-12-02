import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@material-tailwind/react";
const FullScreenSwitcher = () => {
  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      try {
        document.documentElement.requestFullscreen();
      } catch (e) {}
    } else {
      try {
        document.exitFullscreen();
      } catch (e) {}
    }
  };

  return (
    <IconButton
      onClick={handleFullscreen}
      variant="text"
      className="mr-2 text-gray"
    >
      <ArrowsPointingOutIcon className="w-5 h-5" />
    </IconButton>
  );
};
export default FullScreenSwitcher;
