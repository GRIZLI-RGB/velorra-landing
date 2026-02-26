import Link from "next/link";
import Logo from "./logo";

const LEFT_LINKS = [
  { href: "#description", label: "Описание" },
  { href: "#features", label: "Возможности" },
  { href: "#launch", label: "Внедрение" },
];

const RIGHT_LINKS = [
  { href: "#benefit", label: "Выгода" },
  { href: "#tariffs", label: "Тарифы" },
  { href: "#partners", label: "Партнерам" },
];

const LINK_CLASSNAME =
  "relative text-center text-[15px] font-normal text-[#353535] transition-colors hover:text-[#1f1f1f] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-4px] after:h-[1.5px] after:w-0 after:bg-[#353535] after:rounded-full after:transition-all after:duration-300 hover:after:w-full";

export default function Header() {
  return (
    <header className="mt-10 mb-20">
      <div className="default-container flex items-center justify-between">
        <nav className="flex items-center gap-[60px]">
          {LEFT_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={LINK_CLASSNAME}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="w-full flex items-center justify-center mx-2.5">
          <Logo priority />
        </div>

        <nav className="flex items-center gap-[60px]">
          {RIGHT_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={LINK_CLASSNAME}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
