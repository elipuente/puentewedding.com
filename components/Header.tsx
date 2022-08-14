import Link from "next/link";
import { useRouter } from "next/router";
import { FC, MutableRefObject, useEffect, useRef } from "react";

interface ILinks {
  activeRef?: MutableRefObject<null>;
  external?: boolean;
  href: string;
  text: string;
}

const NavItem: FC<ILinks> = ({ activeRef, external, href, text }: ILinks) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return external ? (
    <a
      className={
        "font-normal text-gray-600 dark:text-gray-400 p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all min-w-fit"
      }
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="capsize">{text}</span>
    </a>
  ) : (
    <Link href={href}>
      <a
        className={`${
          isActive
            ? "font-semibold text-gray-800 dark:text-gray-100"
            : "font-normal text-gray-600 dark:text-gray-400"
        } p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all min-w-fit`}
        ref={isActive ? activeRef : null}
      >
        <span className="capsize">{text}</span>
      </a>
    </Link>
  );
};

const Header = () => {
  const activeRef = useRef(null);

  useEffect(() => {
    if (activeRef.current) {
      // @ts-ignore
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeRef]);

  return (
    <div className="flex flex-col w-full justify-center p-4">
      <div className="flex flex-col justify-center">
        <h1 className="font-handsta text-8xl sm:text-[10rem] leading-none max-w-fit bg-gradient-to-r from-metallic-gold via-yellow-400 to-metallic-gold text-transparent bg-clip-text self-center">
          The Puentes
        </h1>
      </div>
      <nav className="flex items-center justify-between gap-3 overflow-x-scroll max-w-full md:max-w-4xl dark:border-gray-700 mx-auto text-gray-900 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
        <NavItem href="/" text="Home" activeRef={activeRef} />
        <NavItem href="/travel" text="Travel" activeRef={activeRef} />
        <NavItem href="/wedding" text="Wedding" activeRef={activeRef} />
        <NavItem href="/photos" text="Photos" activeRef={activeRef} />
        <NavItem href="/request" text="Song Request" activeRef={activeRef} />
        <NavItem href="/rsvp" text="RSVP" activeRef={activeRef} />
      </nav>
    </div>
  );
};

export default Header;
