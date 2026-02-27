import Title from "./ui/title";
import Reveal from "./ui/reveal";
import clsx from "clsx";

export default function DataSecurity({ className }: { className?: string }) {
	return (
		<section className={clsx("relative overflow-x-clip", className)}>
			<img
				src="/images/decor/left-data-security.png"
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute top-1/2 left-[calc(50%-50vw)] -translate-y-1/2 select-none max-[985px]:hidden"
			/>

			<div className="default-container relative z-10 flex items-center gap-11 max-[985px]:flex-col max-[985px]:gap-6 max-[985px]:text-center">
				<Reveal variant="fade-left">
					<div className="max-w-[560px]">
						<Title as="h2" align="left" className="max-[985px]:text-center">
							Безопасность данных
						</Title>
						<p className="mt-2.5 text-[25px] max-[985px]:text-[20px] max-md:text-[18px]">
							Все данные хранятся и обрабатываются на российских
							серверах с использованием собственных LLM моделей.
							Строгое соблюдение ФЗ-152 «О персональных данных».
						</p>
					</div>
				</Reveal>
				<Reveal variant="fade-right" delay={200}>
					<img
						src="/images/security-lock.png"
						alt=""
						width={343}
						height={385}
						className="h-auto w-[343px] max-[985px]:w-[260px] max-md:w-[220px]"
					/>
				</Reveal>
			</div>
		</section>
	);
}
