import type { NextPage } from "next";
import Link from "next/link";

import Container from "../components/Container";

const RSVP: NextPage = () => (
  <Container title="RSVP Closed">
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto my-16">
      <h2 className="font-handsta text-7xl sm:text-8xl lowercase">
        RSVP Closed
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        RSVP is now closed. Please contact Eli or Hannah for assistance or more
        information.
      </p>
      <div className="flex flex-row gap-4">
        <a
          className="text-metallic-gold hover:text-yellow-600 transition"
          href="mailto:us@puentewedding.com"
        >
          Contact Us
        </a>
        <Link href="/" scroll>
          <a className="text-metallic-gold hover:text-yellow-600 transition">
            Return Home
          </a>
        </Link>
      </div>
    </div>
  </Container>
);

export default RSVP;
