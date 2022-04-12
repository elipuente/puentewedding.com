import type { NextPage } from "next";

import Container from "../components/Container";
import Event from "../components/Event";
import HeroImage from "../components/HeroImage";
import Spacing from "../components/Spacing";

import image from "../public/images/engagement-photos/21.jpg";

const Wedding: NextPage = () => (
  <Container title="Wedding Information">
    <header>
      <div className="w-full h-full flex relative rounded-2xl">
        <div className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[15rem] z-10 w-full h-full absolute flex flex-col justify-center bg-opacity-25 bg-black rounded-2xl">
          <p className="text-center text-white font-handsta lowercase">
            Wedding Information
          </p>
        </div>
        <HeroImage
          alt={"Eli and Hannah in front of greenery in Mexico."}
          imageSrc={image}
        />
      </div>
    </header>
    <p className="max-w-4xl text-center self-center mt-8">
      Eli Miguel Puente and Hannah Nicole Hentges are getting married at Dreams
      Playa Mujeres Golf and Spa Resort in Playa Mujeres, Mexico on Thursday
      August 18, 2022 at 5:00 PM. Cocktail hour and reception to follow.
    </p>
    <Spacing />
    <h2 className="font-handsta text-8xl sm:text-9xl text-center">
      Week Schedule
    </h2>
    <section className="lg:mx-auto">
      <div className="grid md:grid-cols-2 text-center md:gap-16">
        <h2 className="font-handsta text-6xl sm:text-8xl text-left sm:text-center">
          August Sixteenth
        </h2>
        <div className="flex flex-col gap-4">
          <Event
            time={"5:00 PM"}
            event={"Welcome Cocktail Hour*"}
            location={"Lobby Bar"}
            description={
              "Time and place of the Welcome Cocktail Hour is still to be determined as we finalize details with the resort."
            }
          />
          <Event
            time={"7:00 PM"}
            event={"Bachelor & Bachelorette Party"}
            location={"To Be Determined"}
            description={
              "Ladies get your wigs ready! Check back soon, more details to come."
            }
          />
        </div>
      </div>
    </section>
    <Spacing />
    <section className="lg:mx-auto">
      <div className="grid md:grid-cols-2 text-center md:gap-16">
        <h2 className="font-handsta text-6xl sm:text-8xl text-left sm:text-center">
          August Seventeenth
        </h2>
        <div className="flex flex-col gap-4">
          <Event
            time={"11:00 AM"}
            event={"Day Excursion"}
            location={"To Be Determined"}
            description={
              "We would love to go on a day excursion with everyone! Please let us know what you're interested in doing, and we'll schedule the most popular choice!"
            }
          />
          <Event
            time={"6:00 PM"}
            event={"Rehearsal Dinner"}
            location={"To Be Determined"}
            description={
              "Rehearsal Dinner details are still being finalized, however, you can expect we will be going for drinks after!"
            }
          />
        </div>
      </div>
    </section>
    <Spacing />
    <section className="lg:mx-auto">
      <div className="grid md:grid-cols-2 text-center md:gap-16">
        <h2 className="font-handsta text-6xl sm:text-8xl text-left sm:text-center">
          Wedding Day
        </h2>
        <div className="flex flex-col gap-4">
          <Event
            time={"5:00 PM"}
            event={"Wedding Ceremony"}
            location={"Paramount Suite"}
            description={
              "Our wedding ceremony will take place on the Paramount Suite Terrace overlooking the beaches and ocean of Playa Mujeres."
            }
          />
          <Event
            time={"6:00 PM"}
            event={"Cocktail Hour"}
            location={"Azure Veranda Terrace"}
            description={
              "Join us on the terrace for live music, signature cocktails from the bride and groom, and hand-selected hors d'oeuvres."
            }
          />
          <Event
            time={"7:00 PM"}
            event={"Reception"}
            location={"Azure Veranda"}
            description={
              "We will head inside the venue for dinner, then it's time for a night of music, drinks, and of course, dancing!"
            }
          />
        </div>
      </div>
    </section>
    <Spacing />
    <section className="lg:mx-auto">
      <div className="grid md:grid-cols-2 text-center md:gap-16">
        <h2 className="font-handsta text-6xl sm:text-8xl text-left sm:text-center">
          August Nineteenth
        </h2>
        <div className="flex flex-col gap-4">
          <Event
            time={"12:00 PM"}
            event={"Group Brunch"}
            location={"To Be Determined"}
            description={
              "We'd love to get brunch with everyone the day after our wedding! We know a lot of you might not feel 100%, so we'll be sure to have the mimosas and bloody marys ready."
            }
          />
        </div>
      </div>
    </section>
    <Spacing />
    <section className="lg:mx-auto">
      <div className="grid md:grid-cols-2 text-center md:gap-16">
        <h2 className="font-handsta text-6xl sm:text-8xl text-left sm:text-center">
          August Twentieth
        </h2>
        <div className="flex flex-col gap-4">
          <Event
            time={"9:00 AM"}
            event={"Group Golf"}
            location={"Playa Mujeres Golf Course"}
            description={
              "Interested in playing a round of golf? Join us earlier in the day as we play a round of 9 or 18 holes! No need to bring your clubs, Dreams Playa Mujeres provides rental equipment."
            }
          />
        </div>
      </div>
    </section>
  </Container>
);

export default Wedding;
