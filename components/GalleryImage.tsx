import Image from "next/image";
import { FC, useState } from "react";

interface IGalleryImage {
  alt: string;
  imageSrc: StaticImageData | string;
}

const GalleryImage: FC<IGalleryImage> = ({ alt, imageSrc }: IGalleryImage) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="aspect-w-6 aspect-h-4 w-full overflow-hidden rounded-lg bg-gray-200">
      <Image
        alt={alt ?? ""}
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        draggable="false"
        className={`duration-500 ease-in-out rounded-lg ${
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        }`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};

export default GalleryImage;
