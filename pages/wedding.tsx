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
      Eli Miguel Puente and Hannah Hentges are getting married at Dreams Playa
      Mujeres Golf and Spa Resort in Playa Mujeres, Mexico on Thursday August
      18, 2022 at 5:00 PM. Cocktail hour and reception to follow.
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
            event={"Welcome Cocktail Hour"}
            location={"Mermaid Terrace"}
            description={`Welcome to Dreams Playa Mujeres! Join us on the terrace for cocktails
              and hors d'oeuvres. We'll give introductions, discuss everything we have planned 
              for the week, and make sure everyone has access to our group chat. Be sure to
              grab your welcome bag before you head out!`}
          />
          <Event
            time={"8:00 PM"}
            event={"Bachelor & Bachelorette Party"}
            location={"Interlude Lobby Bar"}
            description={`Everyone is welcome to join us in the lobby bar for a drink before we split up
              for the bachelor/bachelorette celebration!`}
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
            time={"10:00 AM"}
            event={"Isla Mujeres Excursion"}
            location={"Dreams Resort Lobby"}
            description={`Isla Mujeres was the most requested excursion. We're working
              with Dreams to set up a group discount for everyone. Please let us know
              if you're planning on participating in the excursion by the Welcome Cocktail Hour.`}
          />
          <Event
            time={"5:30 PM"}
            event={"Rehearsal"}
            location={"Paramount Suite"}
            description={`Only those participating in the wedding are required to attend.
              Please arrive five to ten minutes early.`}
          />
          <Event
            time={"6:00 PM"}
            event={"Rehearsal Dinner"}
            location={"To Be Determined"}
            description={`Rehearsal Dinner details are still being finalized, however, you can expect
              we will be going for drinks after!`}
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
            description={`Our wedding ceremony will take place on the Paramount Suite
              Terrace overlooking the beaches and ocean of Playa Mujeres.`}
          />
          <Event
            time={"6:00 PM"}
            event={"Cocktail Hour"}
            location={"Azure Veranda Terrace"}
            description={`Join us on the terrace for live music, signature cocktails
              from the bride and groom, and hand-selected hors d'oeuvres.`}
          />
          <Event
            time={"7:00 PM"}
            event={"Reception"}
            location={"Azure Veranda"}
            description={`We will head inside the venue for dinner, then it's time
              for a night of music, drinks, and of course, dancing!`}
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
            time={"8:00 PM"}
            event={"Farewell Drinks"}
            location={"Interlude Lobby Bar"}
            description={`We would like to get together as a group one last time
              before many of you head home on Saturday. We are so thankful
              to have celebrated our wedding with you!`}
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
            description={`Interested in playing a round of golf? Join us earlier in the day
              as we play a round of 9 or 18 holes! No need to bring your clubs,
              Dreams Playa Mujeres provides rental equipment.`}
          />
        </div>
      </div>
    </section>
  </Container>
);

export default Wedding;
