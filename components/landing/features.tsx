import clsx from "clsx";
import Title from "./ui/title";

const FEATURES = [
	{
		icon: "/icons/features/auto-answer.png",
		title: "Автоответ 24/7",
		description:
			"Velorra принимает входящие звонки круглосуточно, мгновенно приветствует клиентов и не даёт терять лиды.",
	},
	{
		icon: "/icons/features/auto-call.png",
		title: "Автообзвон вашей базы",
		description:
			"Velorra автоматически совершает исходящие звонки, дозванивается, фиксирует результат и передаёт менеджерам только тёплых клиентов.",
	},
	{
		icon: "/icons/features/natural-speech.png",
		title: "Натуральная речь и персонализация",
		description:
			"Агент звучит как живой оператор: задайте голос, имя и манеру речи, чтобы общение было комфортным.",
	},
	{
		icon: "/icons/features/dialogs.png",
		title: "Квалификация и диалог",
		description:
			"Velorra уточняет запрос, собирает данные, отвечает на вопросы и при необходимости переводит на менеджера или назначает звонок.",
	},
	{
		icon: "/icons/features/crm-integration.png",
		title: "Интеграция с CRM",
		description:
			"После звонка данные уходят в CRM, а менеджер получает транскрипт или краткое резюме.",
	},
	{
		icon: "/icons/features/simple-integration.png",
		title: "Простое внедрение",
		description:
			"Подключение без кода: настройка занимает от одного рабочего дня, команда помогает с интеграцией и тестами сценариев.",
	},
];

export default function Features({ className }: { className?: string }) {
	return (
		<section className={clsx("relative", className)}>
			<img
				src="/images/decor/center-features.png"
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
			/>

			<div className="default-container relative z-10">
				<div className="flex-middle flex-col">
					<Title>Ключевые возможности</Title>
					<p className="mt-2.5 mb-10 text-[25px] max-w-[365px] text-center">
						Полный набор инструментов для автоматизации телефонии
					</p>
					<div className="grid grid-cols-2 gap-10 w-full">
						{FEATURES.map((feature) => (
							<div
								key={feature.title}
								className="rounded-[18px] bg-[#FDFDFD] border border-[#C1C1C1] p-[30px] flex items-start gap-4"
								style={{
									boxShadow:
										"3px 3px 4px 0 rgba(0, 0, 0, 0.04), 7px 7px 10px 0 rgba(0, 0, 0, 0.05)",
								}}
							>
								<img
									src={feature.icon}
									alt=""
									className="w-[30px] h-[30px] shrink-0"
								/>
								<div>
									<h3 className="text-[20px]">
										{feature.title}
									</h3>
									<p className="text-[15px] text-[#7C7C7C] mt-1.5 max-w-[340px]">
										{feature.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
