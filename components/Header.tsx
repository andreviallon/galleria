import Image from "next/image";
import { useContext } from "react";
import { PAINTINGS_ACTION } from "../store/PaintingsActions";
import { paintingsContext } from "../store/PaintingsStore";

export const Header = () => {
  const { paintingsState, dispatch } = useContext(paintingsContext);

  const startPaintings = () => {
    dispatch({ type: PAINTINGS_ACTION.START_SLIDESHOW });
  };

  const exitPaintings = () => {
    dispatch({ type: PAINTINGS_ACTION.EXIT_SLIDESHOW });
  };

  const classes =
    "flex items-center tracking-widest cursor-pointer uppercase font-bold text-xs text-gray-dark hover:text-black";

  const slideshowBtn = () => {
    return paintingsState.isSlideshowPlaying ? (
      <a className={classes} onClick={exitPaintings}>
        Exit Paintings
      </a>
    ) : (
      <a className={classes} onClick={startPaintings}>
        Start Paintings
      </a>
    );
  };

  return (
    <div>
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
      <hr className="my-8 text-gray-regular" />
    </div>
  );
};
