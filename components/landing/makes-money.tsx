import clsx from "clsx";
import Title from "./ui/title";
import Button from "./ui/button";

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
			<div className="absolute inset-0 flex flex-col justify-end px-5 pb-5">
				<h3 className="text-[20px] leading-[120%]">{title}</h3>
				<p className="mt-[5px] text-[15px] text-[#7C7C7C] tracking-[-0.02em]">
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
				className="pointer-events-none absolute bottom-0 left-[calc(50%-50vw)] select-none"
			/>
			<img
				src="/images/decor/right-top-make-money.png"
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute top-0 right-[calc(50%-50vw)] select-none"
			/>

			<div className="default-container relative z-10">
				<div className="relative grid grid-cols-4 gap-5">
					<div className="col-span-2 flex flex-col justify-center w-[390px]">
						<Title align="left">
							Как{" "}
							<span className="text-(--color-blue)">Velorra</span>{" "}
							приносит деньги
						</Title>
						<p className="mt-2.5 text-[20px] leading-[140%]">
							Экономия затрат, рост конверсии
							<br />и контроль каждого обращения.
						</p>
					</div>
					<FolderCard {...BENEFITS[0]} />
					<FolderCard {...BENEFITS[1]} />

					<FolderCard {...BENEFITS[2]} />
					<FolderCard {...BENEFITS[3]} />
					<div />
					<FolderCard {...BENEFITS[4]} />

					<img
						src="/images/makes-money-phone.png"
						alt=""
						className="absolute left-[62%] top-[40%] z-20 w-[306px] -translate-x-1/2 pointer-events-none"
					/>
				</div>

				<div className="flex-middle mt-10">
					<Button text="Записаться на демонстрацию" />
				</div>
			</div>
		</section>
	);
}
