import Link from "next/link";
import Logo from "@/components/landing/ui/logo";
import clsx from "clsx";

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

export default function Footer({ className }: { className?: string }) {
	return (
		<footer className={clsx("relative overflow-x-clip pb-6", className)}>
			<img
				src="/images/decor/bottom-right-footer.png"
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute right-[calc(50%-50vw)] bottom-0 select-none max-md:hidden"
			/>

			<div className="default-container relative z-10">
				<div className="grid grid-cols-[1fr_auto_auto] gap-20 max-[985px]:grid-cols-1 max-[985px]:gap-8">
					<div className="flex flex-col items-start text-left text-[20px] max-[985px]:items-center max-[985px]:text-center max-[985px]:text-base">
						<div className="flex items-start justify-start max-[985px]:justify-center">
							<Logo />
						</div>
						<p className="mt-[23px] mb-[78px] max-[985px]:mt-4 max-[985px]:mb-4">
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
							className={`${FOOTER_LINK_CLASSNAME} mt-4 hover:text-(--color-blue) max-[985px]:mt-0`}
						>
							@velorra_support
						</a>
					</div>

					<div className="flex flex-col items-start gap-5 text-left text-[20px] max-[985px]:items-center max-[985px]:gap-3 max-[985px]:text-center max-[985px]:text-base">
						<h4 className="font-bold">Продукт</h4>
						<nav className="flex flex-col items-start gap-5.5 max-[985px]:items-center max-[985px]:gap-3">
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

					<div className="flex flex-col items-start gap-5 text-left text-[20px] max-[985px]:items-center max-[985px]:gap-3 max-[985px]:text-center max-[985px]:text-base">
						<h4 className="font-bold">Правовая информация</h4>
						<nav className="flex flex-col items-start gap-5.5 max-[985px]:items-center max-[985px]:gap-3">
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

				<div className="mt-[94px] flex flex-col items-center gap-[5px] text-center text-[15px] max-[985px]:mt-8">
					<p>Все права защищены</p>
					<p>
						Общество с ограниченной ответственностью
						&quot;Креативные технологии&quot;
					</p>
					<p>ИНН / КПП: 7208648294002540</p>
					<p>Директор: Тюшняков Антон Дмитриевич</p>
				</div>
			</div>
		</footer>
	);
}
