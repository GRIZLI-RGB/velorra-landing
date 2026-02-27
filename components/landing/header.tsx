"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/landing/ui/logo";
import clsx from "clsx";

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

const ALL_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS];

const LINK_CLASSNAME =
	"relative text-center text-[15px] font-normal text-[#353535] transition-colors hover:text-[#1f1f1f] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-4px] after:h-px after:w-0 after:bg-[#353535] after:rounded-full after:transition-all after:duration-300 hover:after:w-full";

export default function Header({ className }: { className?: string }) {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);

	return (
		<header className={clsx(className)}>
			{/* Desktop */}
			<div className="default-container hidden items-center grid-cols-[1fr_auto_1fr] md:grid">
				<nav className="flex items-center justify-start gap-4 lg:gap-[60px]">
					{LEFT_LINKS.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={LINK_CLASSNAME}
						>
							{link.label}
						</Link>
					))}
				</nav>

				<div className="mx-2.5 flex items-center justify-center">
					<Logo />
				</div>

				<nav className="flex items-center justify-end gap-4 lg:gap-[60px]">
					{RIGHT_LINKS.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={LINK_CLASSNAME}
						>
							{link.label}
						</Link>
					))}
				</nav>
			</div>

			{/* Mobile */}
			<div className="default-container flex items-center justify-between md:hidden">
				<Logo />

				<button
					type="button"
					aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
					aria-expanded={menuOpen}
					onClick={() => setMenuOpen((v) => !v)}
					className="relative z-50 flex h-10 w-10 items-center justify-center"
				>
					<span className="flex flex-col gap-[5px]">
						<span
							className={clsx(
								"h-[2px] w-5 rounded-full bg-[#353535] transition-all duration-300",
								menuOpen && "translate-y-[7px] rotate-45",
							)}
						/>
						<span
							className={clsx(
								"h-[2px] w-5 rounded-full bg-[#353535] transition-all duration-300",
								menuOpen && "opacity-0",
							)}
						/>
						<span
							className={clsx(
								"h-[2px] w-5 rounded-full bg-[#353535] transition-all duration-300",
								menuOpen && "-translate-y-[7px] -rotate-45",
							)}
						/>
					</span>
				</button>
			</div>

			{/* Mobile overlay */}
			<div
				className={clsx(
					"fixed inset-0 z-40 flex flex-col items-center justify-center bg-white transition-all duration-300 md:hidden",
					menuOpen
						? "visible opacity-100"
						: "pointer-events-none invisible opacity-0",
				)}
			>
				<nav className="flex flex-col items-center gap-8">
					{ALL_LINKS.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							onClick={() => setMenuOpen(false)}
							className="text-xl font-normal text-[#353535] transition-colors hover:text-[#1f1f1f]"
						>
							{link.label}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
}
