import Image from "next/image";
import { FC, useState } from "react";

interface IHeroImage {
  alt: string | null;
  imageSrc: StaticImageData;
}

const HeroImage: FC<IHeroImage> = ({ alt, imageSrc }: IHeroImage) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-700 sm:aspect-w-2 sm:aspect-h-1 shadow-lg object-cover">
      <Image
        alt={alt ?? ""}
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        draggable="false"
        priority
        className={`duration-700 ease-in-out rounded-lg ${
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        }`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};

export default HeroImage;
