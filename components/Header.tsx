import Image from "next/image";
import { useContext } from "react";
import { SLIDESHOW_ACTION } from "../store/SlideshowActions";
import { slideshowContext } from "../store/SlideshowStore";

export const Header = () => {
  const { slideshowState, dispatch } = useContext(slideshowContext);

  const startSlideshow = () => {
    dispatch({ type: SLIDESHOW_ACTION.START });
  };

  const exitSlideshow = () => {
    dispatch({ type: SLIDESHOW_ACTION.EXIT });
  };

  const classes =
    "flex items-center tracking-widest cursor-pointer uppercase font-bold text-xs text-gray-dark hover:text-black";

  const slideshowBtn = () => {
    return slideshowState.isSlideshowPlaying ? (
      <a className={classes} onClick={exitSlideshow}>
        Exit Slideshow
      </a>
    ) : (
      <a className={classes} onClick={startSlideshow}>
        Start Slideshow
      </a>
    );
  };

  return (
    <div className="flex justify-between w-full">
      <Image
        src="/logo.svg"
        alt="Logo"
        layout="fixed"
        width={150}
        height={48}
      />
      {slideshowBtn()}
    </div>
  );
};
