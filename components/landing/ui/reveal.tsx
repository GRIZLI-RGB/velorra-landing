"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import clsx from "clsx";

type RevealVariant =
	| "fade-up"
	| "fade-down"
	| "fade-left"
	| "fade-right"
	| "zoom";

type RevealProps = {
	children: ReactNode;
	variant?: RevealVariant;
	delay?: number;
	duration?: number;
	threshold?: number;
	className?: string;
};

export default function Reveal({
	children,
	variant = "fade-up",
	delay = 0,
	duration = 600,
	threshold = 0.15,
	className,
}: RevealProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [threshold]);

	return (
		<div
			ref={ref}
			className={clsx(
				"reveal",
				`reveal--${variant}`,
				visible && "reveal--visible",
				className,
			)}
			style={{
				transitionDelay: delay ? `${delay}ms` : undefined,
				transitionDuration: duration !== 600 ? `${duration}ms` : undefined,
			}}
		>
			{children}
		</div>
	);
}
