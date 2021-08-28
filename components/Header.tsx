import Image from "next/image";

interface Props {
  isSlideShowMode: boolean;
}

const classes =
  "flex items-center tracking-widest cursor-pointer uppercase font-bold text-xs text-black hover:text-gray-dark";

const slideshowBtn = (isSlideShowMode: boolean) => {
  return isSlideShowMode ? (
    <a className={classes}>Exit Slideshow</a>
  ) : (
    <a className={classes}>Start Slideshow</a>
  );
};

export const Header: React.FC<Props> = ({ isSlideShowMode }) => {
  return (
    <div className="flex justify-between w-full">
      <Image
        src="/logo.svg"
        alt="Logo"
        layout="fixed"
        width={150}
        height={48}
      />
      {slideshowBtn(isSlideShowMode)}
    </div>
  );
};
