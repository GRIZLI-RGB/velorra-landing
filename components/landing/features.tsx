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
				className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none max-[985px]:opacity-70 max-md:hidden"
			/>

			<div className="default-container relative z-10">
				<div className="flex-middle flex-col">
					<Title>Ключевые возможности</Title>
					<p className="mt-2.5 mb-10 max-w-[365px] text-center text-[25px] max-[985px]:mb-8 max-[985px]:text-[20px] max-md:text-[18px]">
						Полный набор инструментов для автоматизации телефонии
					</p>
					<div className="grid w-full grid-cols-2 gap-10 max-[985px]:grid-cols-1 max-[985px]:gap-6 max-md:gap-4">
						{FEATURES.map((feature) => (
							<div
								key={feature.title}
								className="flex items-start gap-4 rounded-[18px] border border-[#C1C1C1] bg-[#FDFDFD] p-[30px] max-[985px]:gap-3 max-[985px]:p-6 max-md:p-4"
								style={{
									boxShadow:
										"3px 3px 4px 0 rgba(0, 0, 0, 0.04), 7px 7px 10px 0 rgba(0, 0, 0, 0.05)",
								}}
							>
								<img
									src={feature.icon}
									alt=""
									className="h-[30px] w-[30px] shrink-0 max-[985px]:h-7 max-[985px]:w-7 max-md:h-6 max-md:w-6"
								/>
								<div>
									<h3 className="text-[20px] max-[985px]:text-[18px] max-md:text-[17px]">
										{feature.title}
									</h3>
									<p className="mt-1.5 max-w-[340px] text-[15px] text-[#7C7C7C] max-md:text-[14px]">
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
