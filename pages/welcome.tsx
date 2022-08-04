import type { NextPage } from "next";
import Link from "next/link";

import Container from "../components/Container";
import HeroImage from "../components/HeroImage";
import Spacing from "../components/Spacing";

import image from "../public/images/playa-mujeres.webp";

const Welcome: NextPage = () => (
  <Container title="Welcome to Playa Mujeres">
    <header>
      <div className="w-full h-full flex relative rounded-2xl">
        <div className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[15rem] z-10 w-full h-full absolute flex flex-col justify-center bg-opacity-25 bg-black rounded-2xl">
          <p className="text-center text-white font-handsta lowercase">
            Welcome to Mexico
          </p>
        </div>
        <HeroImage
          alt={"A top-down photo of the Playa Mujeres beach."}
          imageSrc={image}
        />
      </div>
    </header>
    <p className="max-w-4xl text-center self-center mt-8">
      Welcome to beautiful Playa Mujeres, Mexico! We are beyond thrilled to have
      you join us for our wedding. Below, you will find a few resources to help
      you get around the resort, stay connected with us, and get prepared for
      the events we have scheduled. As always, if you have any questions, please
      don&apos;t hesitate to reach out.
    </p>
    <Spacing />
    <div className="grid sm:gap-8 lg:grid-cols-3 lg:gap-4 mb-8">
      <section className="max-w-3xl mx-auto">
        <div className="flex flex-col align-middle text-center">
          <h2 className="font-handsta text-7xl sm:text-8xl self-center">
            Find Your Way
          </h2>
          <p>
            It&apos;s a good idea to familiarize yourself with the&nbsp;
            <a
              className="text-metallic-gold hover:text-yellow-600 transition"
              href="https://alg.widen.net/s/pxlbtw2jz9/drepm-rm"
              rel="noopener noreferrer"
              target="_blank"
            >
              map of Dreams Playa Mujeres Golf and Spa Resort
            </a>
            . We recommend taking a screenshot of the map to have quick access
            whenever your device is offline.
          </p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto">
        <div className="flex flex-col align-middle text-center">
          <h2 className="font-handsta text-7xl sm:text-8xl self-center mt-12 sm:mt-0">
            Stay Connected
          </h2>
          <p>
            We&apos;ll have a lot going on this week, and plans have the
            potential to change, so it&apos;s a good idea to keep in contact. To
            make communication easier, we&apos;ve set up a&nbsp;
            <a
              className="text-metallic-gold hover:text-yellow-600 transition"
              href="https://puentewedding.slack.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Slack Group
            </a>
            . Sign up below!
          </p>
          <div className="flex flex-row gap-4 mt-4 self-center">
            <a
              className="text-metallic-gold hover:text-yellow-600 transition"
              href="https://slack.com/downloads/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Download Slack
            </a>
            <a
              className="text-metallic-gold hover:text-yellow-600 transition"
              href="https://join.slack.com/t/puentewedding/shared_invite/zt-1caic8r3a-RWHpxXvKB4fJr0VPagq~Lg"
              rel="noopener noreferrer"
              target="_blank"
            >
              Join our Slack Group
            </a>
          </div>
        </div>
      </section>
      <section className="max-w-3xl mx-auto">
        <div className="flex flex-col align-middle text-center">
          <h2 className="font-handsta text-7xl sm:text-8xl self-center mt-12 sm:mt-0">
            View Schedule
          </h2>
          <p>
            Curious what we have planned for this week? Take a look at our&nbsp;
            <Link href="/wedding">
              <a className="text-metallic-gold hover:text-yellow-600 transition">
                Wedding Schedule&nbsp;
              </a>
            </Link>
            for times, locations and details on this week&apos;s events. We will
            communicate any changes in our Slack group.
          </p>
          <p></p>
        </div>
      </section>
    </div>
  </Container>
);

export default Welcome;
