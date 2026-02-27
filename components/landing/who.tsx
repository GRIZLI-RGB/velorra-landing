import clsx from "clsx";
import Title from "./ui/title";

const WHO_DATA = [
	{
		icon: "/icons/who/estate.svg",
		title: "Недвижимость",
		description:
			"Квалификация заявок, назначение показов, приём входящих звонков.",
		bullets: [
			"Больше успешных просмотров",
			"Отсев нецелевых запросов",
			"Экономия времени агентов",
		],
	},
	{
		icon: "/icons/who/clinic.svg",
		title: "Медицинские клиники",
		description:
			"Запись на приём, напоминания, уведомления без нагрузки на персонал.",
		bullets: [
			"Снижение нагрузки на регистратуру",
			"Меньше пропущенных визитов",
			"Увеличение количества приемов",
		],
	},
	{
		icon: "/icons/who/b2b.svg",
		title: "B2B услуги",
		description:
			"Запись на встречи, уточнение запроса, сбор обратной связи.",
		bullets: [
			"Качественные лиды",
			"Эффективная воронка",
			"Контроль коммуникаций",
		],
	},
	{
		icon: "/icons/who/auto.svg",
		title: "Автобизнес",
		description:
			"Напоминания, приём звонков и записи на обслуживание 24/7.",
		bullets: [
			"Больше загрузка сервиса",
			"Меньше отмен",
			"Снижение затрат на приём звонков",
		],
	},
];

export default function Who({ className }: { className?: string }) {
	return (
		<section className={clsx("relative", className)}>
			<img
				src="/images/decor/center-who.png"
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none max-[985px]:opacity-70 max-md:hidden"
			/>

			<div className="default-container relative z-10">
				<Title className="max-w-[540px] mx-auto">
					Для кого Velorra решает задачи уже сегодня
				</Title>
				<div className="mt-10 grid grid-cols-2 gap-x-11 gap-y-9 max-[985px]:mt-8 max-[985px]:grid-cols-1 max-[985px]:gap-5 max-md:mt-6 max-md:gap-4">
					{WHO_DATA.map((item) => (
						<div
							key={item.title}
							className="flex items-start gap-4 rounded-[18px] border border-[#C1C1C1] bg-[#FDFDFD] p-[30px] max-[985px]:gap-3 max-[985px]:p-6 max-md:p-4"
							style={{
								boxShadow:
									"3px 3px 4px 0 rgba(0, 0, 0, 0.04), 7px 7px 10px 0 rgba(0, 0, 0, 0.05)",
							}}
						>
							<img
								src={item.icon}
								alt=""
								className="h-8 w-8 shrink-0 max-[985px]:h-7 max-[985px]:w-7 max-md:h-6 max-md:w-6"
							/>
							<div>
								<h3 className="text-[20px] max-[985px]:text-[18px] max-md:text-[17px]">
									{item.title}
								</h3>
								<p className="mt-1.5 mb-4 text-[15px] text-[#7C7C7C] max-[985px]:mb-3 max-md:text-[14px]">
									{item.description}
								</p>
								<ul className="ml-3 space-y-1 max-[985px]:ml-2.5 max-[985px]:space-y-0.5">
									{item.bullets.map((bullet) => (
										<li
											key={bullet}
											className="flex items-start gap-2 text-[15px] text-[#7C7C7C] max-md:text-[14px]"
										>
											<span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[#7C7C7C] max-md:mt-[8px]" />
											{bullet}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
