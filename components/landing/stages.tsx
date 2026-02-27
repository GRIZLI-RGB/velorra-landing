import clsx from "clsx";
import Title from "./ui/title";

const STAGES = [
	{
		icon: "/icons/stages/lead.png",
		title: "Лид",
		text: "AI мгновенно принимает звонок. Не теряется ни одно обращение.",
	},
	{
		icon: "/icons/stages/dialog.png",
		title: "Диалог",
		text: "Естественная речь, квалификация запроса, выявление потребности.",
	},
	{
		icon: "/icons/stages/deal.png",
		title: "Передача в CRM",
		text: "Транскрипт звонка, контактные данные, ключевые фразы.",
	},
	{
		icon: "/icons/stages/crm.png",
		title: "Сделка",
		text: "Горячий клиент у менеджера. Закрытие сделки — без потерь.",
	},
];

export default function Stages({ className }: { className?: string }) {
	return (
		<section className={clsx(className)}>
			<div className="default-container">
				<div className="mx-auto flex max-w-[600px] flex-col items-center justify-center gap-2.5 text-center max-[985px]:max-w-[680px]">
					<Title className="text-[35px]! leading-[120%]! max-[985px]:text-[32px]! max-md:text-[28px]!">
						От первого гудка до результата — всё под контролем{" "}
						<span className="text-(--color-blue)">Velorra</span>
					</Title>
					<p className="text-[20px] max-[985px]:text-[18px] max-md:text-[16px]">
						Каждый звонок превращается в обработанного лида,
						переданного в CRM — без ожидания, ошибок и потерь. Ваши
						менеджеры получают результат, а не просто звонок.
					</p>
				</div>
				<div className="mt-20 grid grid-cols-4 gap-8 max-[985px]:mt-12 max-[985px]:grid-cols-2 max-[985px]:gap-6 max-md:grid-cols-1 max-md:gap-5 max-md:text-center">
					{STAGES.map((stage, index) => (
						<div
							key={stage.title}
							className={clsx(
								"flex flex-col items-start max-md:items-center",
								index % 2 !== 0 &&
									"relative top-[50px] max-[985px]:static max-[985px]:top-auto",
							)}
						>
							<img
								src={stage.icon}
								alt={stage.title}
								className="max-[985px]:w-[44px] max-md:w-10"
							/>
							<h3 className="mt-2.5 mb-1 text-[20px] max-[985px]:text-[18px] max-md:text-[17px]">
								{stage.title}
							</h3>
							<p className="text-[15px] text-[#7C7C7C] max-md:text-[14px]">
								{stage.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
