import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { paintingsContext } from "../store/PaintingsStore";

export const Gallery = () => {
  const { paintingsState } = useContext(paintingsContext);
  return (
    <div className="grid gap-8 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {paintingsState.paintings.map((painting) => (
        <Link href={`/painting/${painting.slug}`} key={painting.slug}>
          <a className="w-full h-80 relative painting">
            <div className="relative z-10 h-full flex flex-col justify-end p-6 gradient">
              <p className="text-white text-2xl pb-2">{painting.name}</p>
              <p className="text-gray-regular text-sm">
                {painting.artist.name}
              </p>
            </div>
            <Image
              className="painting-image"
              src={painting.images.gallery}
              alt={painting.name}
              objectFit="cover"
              layout="fill"
            />
          </a>
        </Link>
      ))}
    </div>
  );
};
