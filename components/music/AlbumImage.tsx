import Image from "next/image";
import { FC, useEffect, useState } from "react";

import type { ISong } from "../../types/spotify";

interface IAlbumImage {
  song: ISong;
}

const AlbumImage: FC<IAlbumImage> = ({ song }: IAlbumImage) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [song]);

  return (
    <div className="aspect-square overflow-hidden bg-gray-200 flex-none">
      <Image
        alt={`Album artwork for ${song.title}`}
        src={song.image}
        layout="intrinsic"
        height="100%"
        width="100%"
        objectFit="contain"
        draggable="false"
        className={`duration-500 ease-in-out ${
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        }`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};

export default AlbumImage;
