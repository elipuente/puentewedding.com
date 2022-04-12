import type { NextPage } from "next";

import Container from "../components/Container";
import HeroImage from "../components/HeroImage";
import Search from "../components/music/Search";
import Spacing from "../components/Spacing";

import image from "../public/images/engagement-photos/8.jpg";

const SongRequest: NextPage = () => {
  return (
    <Container title="Request a Song">
      <header>
        <div className="w-full h-full flex relative rounded-2xl">
          <div className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[15rem] z-10 w-full h-full absolute flex flex-col justify-center bg-opacity-25 bg-black rounded-2xl">
            <p className="text-center text-white font-handsta lowercase">
              Request a Song
            </p>
          </div>
          <HeroImage
            alt={"Eli and Hannah in a white gazebo on the beach."}
            imageSrc={image}
          />
        </div>
      </header>
      <p className="max-w-4xl text-center self-center my-8">
        Have a song that you think we should play during our reception? Request
        it here!
      </p>
      <Search />
      <Spacing />
      <section>
        <h2 className="font-handsta text-6xl sm:text-9xl text-center">
          Previously Requested Songs
        </h2>
        <iframe
          className="rounded-lg"
          src="https://open.spotify.com/embed/playlist/6b1fjklGyhNhorZsPSHUA0?utm_source=generator"
          width="100%"
          height="300"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </section>
    </Container>
  );
};

export default SongRequest;
