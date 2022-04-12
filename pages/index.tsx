import type { NextPage } from "next";
import Link from "next/link";

import Container from "../components/Container";
import FAQ from "../components/FAQ";
import HeroImage from "../components/HeroImage";
import Spacing from "../components/Spacing";

import image from "../public/images/engagement-photos/17.jpg";

const Home: NextPage = () => {
  return (
    <Container>
      <header>
        <div className="w-full h-full flex relative rounded-2xl">
          <div className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[15rem] z-10 w-full h-full absolute flex flex-col justify-center bg-opacity-25 bg-black rounded-2xl">
            <p className="text-center text-white font-handsta lowercase">
              We&apos;re getting married
            </p>
          </div>
          <HeroImage
            alt={"Eli and Hannah holding hands on a beach facing the ocean."}
            imageSrc={image}
          />
        </div>
      </header>
      <Spacing />
      <section className="sm:flex sm:flex-row max-w-6xl mx-auto">
        <div className="flex flex-col align-middle md:w-1/2 text-center">
          <h2 className="font-handsta text-7xl sm:text-8xl self-center">
            Join Us
          </h2>
          <p>
            Join us at Dreams Playa Mujeres Golf and Spa Resort for the wedding
            of Eli Puente &amp; Hannah Hentges on August 18, 2022.
          </p>
          <Link href="/travel" scroll>
            <a className="mt-4 text-metallic-gold hover:text-yellow-600 transition">
              View Travel Information
            </a>
          </Link>
        </div>
        <div className="flex flex-col align-middle md:w-1/2 text-center">
          <h2 className="font-handsta text-7xl sm:text-8xl self-center mt-12 sm:mt-0">
            Wedding Day
          </h2>
          <p>
            We are very excited to have you join us for our wedding. View our
            wedding schedule and learn about our special day.
          </p>
          <Link href="/wedding" scroll>
            <a className="mt-4 text-metallic-gold hover:text-yellow-600 transition">
              View Wedding Information
            </a>
          </Link>
        </div>
      </section>
      <Spacing />
      <section className="flex flex-col justify-center">
        <h2 className="font-handsta text-7xl sm:text-8xl self-center mb-4">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto text-center">
          <FAQ
            question={"How do I book?"}
            answer={
              "Please book whichever way makes the most sense for you. If you need assistance, we are working with a travel agent to make it easy to book your trip. Please visit the Travel Information page for details."
            }
            link={{
              external: false,
              href: "/travel",
              text: "View Travel Information",
            }}
          />
          <FAQ
            question={"What can I expect?"}
            answer={
              "Aside from unlimited food, drinks, and a damn good time, we will try and plan fun things to do every day from August 15th through the 21st! Check out everything we have scheduled for the week by visiting the Wedding Information page."
            }
            link={{
              external: false,
              href: "/wedding",
              text: "View Wedding Schedule",
            }}
          />
          <FAQ
            question={"Why wasn't I invited? I thought we were friends."}
            answer={
              "We're keeping this wedding very small. We wish we could invite everyone, but the venue has limited space. So if we didn't invite you, don't worry, we're still friends, and we would love to celebrate with you when we get back!"
            }
          />
          <FAQ
            question={"Where is your registry?"}
            answer={
              "We understand that we're asking a lot from you to join us in Mexico for our wedding. We believe your presence is a gift itself. We will not be accepting gifts, but appreciate your generosity."
            }
          />
          <FAQ
            question={"What's the dress code?"}
            answer={`Although our wedding won't take place on the beach, we still want
              you to be comfortable. So, what is appropriate attire? For men, we
              think a nice button down with slacks would work great. For women, a
              sensible dress would be wonderful (so long as it's not white).`}
          />
          <FAQ
            question={"What are you doing about COVID?"}
            answer={
              "We will be following all COVID precautions from AMR Resort and the U.S. Department of State. As of now, you will need to bring a mask with you, and will be required to take a COVID test before re-entering the U.S."
            }
            link={{
              external: true,
              href: "http://assets.amragents.com/html/notifications/2020/08/AMResorts_Return-to-Operations-FAQ.pdf",
              text: "Read AMR Resorts COVID Policy",
            }}
          />
        </div>
        <div className="mt-6 md:w-1/2 text-center self-center">
          <FAQ
            question={"I have a different question. What should I do?"}
            answer={
              "Feel free to call us or shoot us a text with any questions you might have, and we'll do our best to answer them."
            }
          />
        </div>
      </section>
    </Container>
  );
};

export default Home;
