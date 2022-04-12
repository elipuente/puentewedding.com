import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "./Footer";
import Header from "./Header";

const Container = (props: { children: any; title?: string }) => {
  const { children, title } = props;

  const router = useRouter();

  const meta = {
    title: title ?? "",
    description:
      "Eli Puente & Hannah Hentges are getting married in Playa Mujeres, Mexico on August 18, 2022!",
    type: "website",
  };

  return (
    <div className="text-gray-600 bg-[#f3f2ef] dark:bg-gray-900 dark:text-gray-300">
      <Head>
        <title>
          {meta.title ? `${meta.title}  |` : ""} Eli Puente &amp; Hannah Hentges
          Wedding 2022
        </title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#111827"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#f3f2ef"
        />
        <link href="/favicon.ico" rel="shortcut icon" />
        <link
          href="/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="200x200"
        />
        <link
          rel="preload"
          href="/fonts/handsta-signature.woff"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta
          property="og:url"
          content={`https://puentewedding.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://puentewedding.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Eli &amp; Hannah Wedding 2022" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Head>

      <Header />
      <main
        id="skip"
        className="flex flex-col flex-grow justify-center px-5 sm:px-10 mb-auto"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Container;
