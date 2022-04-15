import { FC, useEffect, useState } from "react";

import type { ISong } from "../../types/spotify";

interface IAlbumImage {
  song: ISong;
}

const AlbumImage: FC<IAlbumImage> = ({ song }: IAlbumImage) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [song.uri]);

  return (
    <div className="aspect-square overflow-hidden bg-gray-200 dark:bg-gray-600 flex-none rounded-lg">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={`Album artwork for ${song.title} by ${song.artists}`}
        src={song.image}
        draggable="false"
        className={`duration-500 ease-in-out rounded-lg h-24 w-24 ${
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        }`}
        loading="lazy"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default AlbumImage;
