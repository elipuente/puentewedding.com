import Link from "next/link";
import { FC } from "react";

interface ILink {
  text: string;
  href: string;
  external: boolean;
}

interface IFAQ {
  answer: string;
  question: string;
  link?: ILink;
  notFinished?: Boolean;
}

const FAQ: FC<IFAQ> = ({ question, answer, link, notFinished }: IFAQ) => (
  <div
    className={`bg-white ${
      notFinished && "bg-red-200"
    } dark:bg-gray-700 rounded-lg shadow-lg p-4 flex flex-col justify-between`}
  >
    <h3 className="font-bold text-lg pb-2">{question}</h3>
    <p className="pb-2">{answer}</p>
    {link &&
      (link.external ? (
        <a
          className="text-metallic-gold hover:text-yellow-600 transition"
          href={link.href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {link.text}
        </a>
      ) : (
        <Link href={link.href} scroll>
          <a className="text-metallic-gold hover:text-yellow-600 transition">
            {link.text}
          </a>
        </Link>
      ))}
  </div>
);

export default FAQ;
