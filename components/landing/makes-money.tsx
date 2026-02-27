import clsx from "clsx";
import Title from "./ui/title";
import Button from "./ui/button";
import Reveal from "./ui/reveal";

const BENEFITS = [
	{
		title: "Фокус на горячих лидах",
		description: "Меньше рутины — только лиды, готовые к сделке.",
	},
	{
		title: "Быстрая реакция и лучший сервис",
		description: "Мгновенный ответ повышает NPS и лояльность",
	},
	{
		title: "Ни одного пропущенного лида",
		description: "100% звонков обработаны — ни один лид не теряется.",
	},
	{
		title: "Рост конверсии звонков до +30%",
		description: "Быстрый ответ и точная обработка запросов.",
	},
	{
		title: "Меньше затрат на персонал",
		description: "Один AI-агент заменяет нескольких операторов.",
	},
];

function FolderCard({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<div className="relative">
			<img src="/images/folder.png" alt="" className="w-full" />
			<div className="absolute inset-0 flex flex-col justify-end px-5 pb-5 max-[985px]:px-4 max-[985px]:pb-4 max-md:px-3 max-md:pb-3">
				<h3 className="text-[20px] leading-[120%] max-[985px]:text-[18px] max-md:text-[16px]">{title}</h3>
				<p className="mt-[5px] text-[15px] text-[#7C7C7C] tracking-[-0.02em] max-md:text-[14px]">
					{description}
				</p>
			</div>
		</div>
	);
}

export default function MakesMoney({ className }: { className?: string }) {
	return (
		<section className={clsx("relative overflow-x-clip", className)}>
			<img
				src="/images/decor/left-bottom-make-money.png"
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute bottom-0 left-[calc(50%-50vw)] select-none max-[985px]:hidden"
			/>
			<img
				src="/images/decor/right-top-make-money.png"
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute top-0 right-[calc(50%-50vw)] select-none max-[985px]:hidden"
			/>

			<div className="default-container relative z-10">
				<div className="relative grid grid-cols-4 gap-5 max-[985px]:grid-cols-2 max-[985px]:gap-4 max-md:grid-cols-1">
					<Reveal variant="fade-left" className="col-span-2 max-md:col-span-1">
						<div className="flex flex-col justify-center w-[390px] max-[985px]:w-full max-md:text-center">
							<Title align="left" className="max-md:text-center">
								Как{" "}
								<span className="text-(--color-blue)">Velorra</span>{" "}
								приносит деньги
							</Title>
							<p className="mt-2.5 text-[20px] leading-[140%] max-[985px]:text-[18px] max-md:text-[16px]">
								Экономия затрат, рост конверсии
								<br />и контроль каждого обращения.
							</p>
						</div>
					</Reveal>
					<Reveal delay={100}>
						<FolderCard {...BENEFITS[0]} />
					</Reveal>
					<Reveal delay={200}>
						<FolderCard {...BENEFITS[1]} />
					</Reveal>

					<Reveal delay={150}>
						<FolderCard {...BENEFITS[2]} />
					</Reveal>
					<Reveal delay={250}>
						<FolderCard {...BENEFITS[3]} />
					</Reveal>
					<div className="max-[985px]:hidden" />
					<Reveal delay={300}>
						<FolderCard {...BENEFITS[4]} />
					</Reveal>

					<img
						src="/images/makes-money-phone.png"
						alt=""
						className="absolute left-[62%] top-[40%] z-20 w-[306px] -translate-x-1/2 pointer-events-none max-[985px]:hidden"
					/>
				</div>

				<Reveal delay={200}>
					<div className="flex-middle mt-10 max-[985px]:mt-8 max-md:mt-6">
						<Button text="Записаться на демонстрацию" />
					</div>
				</Reveal>
			</div>
		</section>
	);
}
