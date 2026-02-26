import Link from "next/link";
import Logo from "./logo";

const PRODUCT_LINKS = [
  { href: "#how-it-works", label: "Как это работает" },
  { href: "#tariffs", label: "Тарифы" },
  { href: "#features", label: "Возможности" },
  { href: "#partners", label: "Партнерам" },
];

const LEGAL_LINKS = [
  { href: "/offer", label: "Публичная оферта" },
  { href: "/privacy", label: "Политика конфиденциальности" },
  { href: "/data-processing", label: "Обработка данных" },
  { href: "/terms", label: "Правила использования" },
];

const FOOTER_LINK_CLASSNAME =
  "relative inline-block w-fit transition-colors after:absolute after:left-0 after:bottom-[-4px] after:h-[1.5px] after:w-0 after:bg-current after:rounded-full after:transition-all after:duration-300 hover:after:w-full";

export default function Footer() {
  return (
    <footer className="mt-[200px] mb-6">
      <div className="default-container">
        <div className="grid grid-cols-[1fr_auto_auto] gap-20">
          <div className="flex flex-col text-[20px]">
            <div className="flex items-start justify-start">
              <Logo />
            </div>
            <p className="mt-[23px] mb-[78px]">
              ИИ-агенты
              <br />
              для автоматизации
              <br />
              телефонных звонков
            </p>
            <a
              href="https://t.me/velorra_support"
              target="_blank"
              rel="noopener noreferrer"
              className={`${FOOTER_LINK_CLASSNAME} mt-4 hover:text-(--color-blur)`}
            >
              @velorra_support
            </a>
          </div>

          <div className="flex flex-col gap-5 text-[20px]">
            <h4 className="font-bold">Продукт</h4>
            <nav className="flex flex-col gap-5.5">
              {PRODUCT_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={FOOTER_LINK_CLASSNAME}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-5 text-[20px]">
            <h4 className="font-bold">Правовая информация</h4>
            <nav className="flex flex-col gap-5.5">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={FOOTER_LINK_CLASSNAME}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[5px] text-center text-[15px] mt-[94px]">
          <p>Все права защищены</p>
          <p>
            Общество с ограниченной ответственностью &quot;Креативные
            технологии&quot;
          </p>
          <p>ИНН / КПП: 7208648294002540</p>
          <p>Директор: Тюшняков Антон Дмитриевич</p>
        </div>
      </div>
    </footer>
  );
}
