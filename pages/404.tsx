import type { NextPage } from "next";
import Link from "next/link";

import Container from "../components/Container";

const NotFound: NextPage = () => (
  <Container title="404">
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto my-16">
      <h2 className="font-handsta text-7xl sm:text-8xl lowercase">
        Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        The requested page could not be found. Try re-entering the URL or click
        the button below to return home.
      </p>
      <Link href="/" scroll>
        <a className="text-metallic-gold hover:text-yellow-600 transition">
          Return Home
        </a>
      </Link>
    </div>
  </Container>
);

export default NotFound;
