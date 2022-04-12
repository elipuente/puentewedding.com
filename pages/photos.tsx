import type { NextPage } from "next";

import Container from "../components/Container";
import GalleryImage from "../components/GalleryImage";

import { GALLERY_IMAGES } from "../data/galleryImages";

const Photos: NextPage = () => (
  <Container title="Engagement Photos">
    <h1 className="font-handsta text-6xl sm:text-9xl text-center pt-4">
      Engagement Photo Gallery
    </h1>
    <div className="py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY_IMAGES.map((image, index) => (
          <GalleryImage alt={image.alt} imageSrc={image.src} key={index} />
        ))}
      </div>
    </div>
  </Container>
);

export default Photos;
