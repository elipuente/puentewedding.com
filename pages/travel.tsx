import type { NextPage } from "next";

import Container from "../components/Container";
import HeroImage from "../components/HeroImage";
import Spacing from "../components/Spacing";

import image from "../public/images/dreams-playa-mujeres.webp";

const Travel: NextPage = () => (
  <Container title="Travel Information">
    <header>
      <div className="w-full h-full flex relative rounded-2xl">
        <div className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[15rem] z-10 w-full h-full absolute flex flex-col justify-center bg-opacity-25 bg-black rounded-2xl">
          <p className="text-center text-white font-handsta lowercase">
            Dreams Playa Mujeres
          </p>
        </div>
        <HeroImage
          alt={"Top view of Dreams Playa Mujeres Golf and Spa Resort."}
          imageSrc={image}
        />
      </div>
    </header>
    <Spacing />
    <div className="grid sm:gap-8 lg:grid-cols-3 lg:gap-4 mb-8">
      <section className="max-w-3xl mx-auto">
        <div className="flex flex-col align-middle text-center">
          <h2 className="font-handsta text-7xl sm:text-8xl self-center">
            The Resort
          </h2>
          <p>
            We are getting married at&nbsp;
            <a
              className="text-metallic-gold hover:text-yellow-600 transition"
              href="https://www.amrcollection.com/en/resorts-hotels/dreams/mexico/playa-mujeres-golf-spa-resort/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Dreams Playa Mujeres Golf and Spa Resort&nbsp;
            </a>
            in Playa Mujeres, Mexico. Dreams is an all-inclusive resort
            approximately 35 minutes north of the Cancun International Airport.
            See all that Dreams has to offer by&nbsp;
            <a
              className="text-metallic-gold hover:text-yellow-600 transition"
              href="https://www.amrcollection.com/en/resorts-hotels/dreams/mexico/playa-mujeres-golf-spa-resort/"
              rel="noopener noreferrer"
              target="_blank"
            >
              visiting their website
            </a>
            .
          </p>
          <p className="mt-4">
            If you are looking for an adults-only resort, we recommend staying
            at Secrets Playa Mujeres.
          </p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto">
        <div className="flex flex-col align-middle text-center">
          <h2 className="font-handsta text-7xl sm:text-8xl self-center mt-12 sm:mt-0">
            Excursions
          </h2>
          <p>
            We&apos;d love to go on an excursion with everyone! Whether
            it&apos;s a trip to Isla Mujeres, snorkeling, fishing, golfing,
            ziplining, or even going on a booze cruise, count us in! As we get
            closer to the wedding, please let us know what you&apos;d be
            interested in. We will try and get the most popular option scheduled
            for the group!
          </p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto">
        <div className="flex flex-col align-middle text-center">
          <h2 className="font-handsta text-7xl sm:text-8xl self-center mt-12 sm:mt-0">
            How to Book
          </h2>
          <p>
            Please book your stay whichever way makes the most sense for
            you.&nbsp;
            <a
              className="text-metallic-gold hover:text-yellow-600 transition"
              href="https://www.costcotravel.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Costco Travel&nbsp;
            </a>
            has been a popular option for those who have recently booked. If you
            need assistance or would prefer to have a travel agent book on your
            behalf, our travel agent, Mary Ryherd, can help you out every step
            of the way. You can reach her at
            <a href="tel:309-235-1225"> (309) 235-1225</a> or{" "}
            <a
              className="text-metallic-gold hover:text-yellow-600 transition"
              href="mailto:mary@kdmtravel.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              mary@kdmtravel.com
            </a>
            .
          </p>
          <p></p>
        </div>
      </section>
    </div>
  </Container>
);

export default Travel;
