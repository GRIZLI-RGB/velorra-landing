import clsx from "clsx";
import Title from "./ui/title";

const TARIFFS = [
	{
		name: "Старт",
		badge: null,
		description:
			"Для небольших компаний и стартапов. Идеально для тестирования сервиса и обработки базовых запросов клиентов.",
		oldPrice: "49 990 руб.",
		price: "39 990",
		minutes: "500 минут",
		minutesNote: "1 500 минут при оплате за 3 месяца",
		features: [
			"Техническая поддержка в чате",
			"Входящие и исходящие звонки",
			"1 агент - 5 линий звонков",
			"Настройка телефонии",
			"Интеграция с CRM (Амо, Б24, Telegram)",
		],
	},
	{
		name: "Средний",
		badge: "Популярный",
		description:
			"Для среднего бизнеса с активным клиентским потоком. Баланс цены и объема для ежедневной работы с клиентами.",
		oldPrice: "69 990 руб.",
		price: "59 990",
		minutes: "1 000 минут",
		minutesNote: "3 000 минут при оплате за 3 месяца",
		features: [
			'Все, что в тарифе "Старт"',
			"2 агента - 20 линий звонков",
			"Персональный менеджер",
			"500 минут к тарифу дополнительно",
		],
	},
	{
		name: "Максимум",
		badge: "Выгодно",
		description:
			"Для крупных компаний с большим потоком звонков и масштабными задачами. Гибкость и мощности для роста без ограничений.",
		oldPrice: "159 990 руб.",
		price: "129 990",
		minutes: "5 000 минут",
		minutesNote: "15 000 минут при оплате за 3 месяца",
		features: [
			'Все, что в тарифе "Средний"',
			"5 агентов - 50 линий звонков",
			"Удаленная помощь в настройке агента",
			"Интеграция с любой CRM-системой",
			"1000 минут к тарифу дополнительно",
		],
	},
];

const SUBBLOCKS = [
	{
		left: "До 2 999 минут",
		right: "19 руб. / минута",
		isBold: false,
	},
	{
		left: "До 9 999 минут",
		right: "17 руб. / минута",
		isBold: false,
	},
	{
		left: "От 10 000 минут",
		right: "15 руб. / минута",
		isBold: true,
	},
];

export default function Tariffs({ className }: { className?: string }) {
	return (
		<section className={clsx(className)}>
			<div className="default-container">
				<Title className="max-w-[700px] mx-auto">
					Модель оплаты состоит из подписки и минут разговоров.
				</Title>
				<div className="mt-10 mb-5 grid grid-cols-3 gap-5 max-lg:grid-cols-1">
					{TARIFFS.map((tariff) => (
						<div
							key={tariff.name}
							style={{
								boxShadow:
									"3px 3px 4px 0 rgba(0, 0, 0, 0.02), 5px 5px 10px 0 rgba(0, 0, 0, 0.04)",
							}}
							className="flex flex-col rounded-[20px] border border-[#C1C1C1] bg-[#FDFDFD] py-8 px-6"
						>
							<div className="flex items-center gap-3">
								<h3 className="text-[30px] font-bold leading-[120%] max-md:text-[24px]">
									{tariff.name}
								</h3>
								{tariff.badge && (
									<span
										style={{
											boxShadow:
												"3px 3px 4px 0 rgba(0, 0, 0, 0.02), 5px 5px 10px 0 rgba(0, 0, 0, 0.04)",
											background:
												tariff.badge === "Популярный"
													? "linear-gradient(137deg, #F8F7FF 0%, #E3DCFF 99.99%)"
													: "linear-gradient(137deg, #F6FAFF 0%, #DDEAFE 99.99%)",
										}}
										className={clsx(
											"rounded-[2px] px-[15px] py-1 text-[11px] font-bold leading-[120%] text-[#242424]",
											tariff.badge === "Популярный"
												? ""
												: "",
										)}
									>
										{tariff.badge}
									</span>
								)}
							</div>

							<p className="tracking-[-0.02em] mt-4 mb-7 text-[13px] leading-[120%] text-[#242424]">
								{tariff.description}
							</p>

							<div className="leading-[120%]">
								<span className="text-[15px] text-[#8D8D8D] line-through">
									{tariff.oldPrice}
								</span>
								<div className="flex items-baseline gap-0.5 tracking-[-0.02em]">
									<span className="text-[45px] font-bold leading-[120%] max-md:text-[36px]">
										{tariff.price}
									</span>
									<span className="text-[#242424] font-bold leading-[120%]">
										<span className="text-[15px]">
											руб. /
										</span>{" "}
										<span className="text-[10px]">
											месяц
										</span>
									</span>
								</div>
								<p className="text-[8px] text-[#8D8D8D] leading-[120%]">
									при оплате подписки от 3-х месяцев
								</p>
							</div>

							<div
								style={{
									background:
										tariff.name === "Старт"
											? "linear-gradient(137deg, #FFF 0%, #F0F6FF 99.99%)"
											: tariff.name === "Средний"
												? "linear-gradient(137deg, #FFF 0%, #EDE9FF 99.99%)"
												: "linear-gradient(137deg, #FFF 0%, #F0F6FF 99.99%)",
									boxShadow:
										"3px 3px 4px 0 rgba(0, 0, 0, 0.02), 5px 5px 10px 0 rgba(0, 0, 0, 0.04)",
								}}
								className="mt-[30px] rounded-[7px] border border-[#C1C1C1] px-[15px] py-3"
							>
								<span className="block leading-[120%] text-[15px] text-[#8D8D8D]">
									Входит в тариф:
								</span>
								<p className="mt-0.5 mb-px block text-[25px] leading-[120%] font-bold text-[#242424] max-md:text-[20px]">
									{tariff.minutes}
								</p>
								<span className="block leading-[120%] text-[8px] text-[#8D8D8D]">
									{tariff.minutesNote}
								</span>
							</div>

							<button className="mt-4 mb-6 bg-(--color-blue) w-full rounded-full h-11 px-5 text-white text-[13px] flex items-center justify-between">
								<span>Оформить подписку</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="6"
									viewBox="0 0 32 6"
									fill="none"
								>
									<path
										d="M31.1328 2.88672L26.1328 -3.26633e-05V5.77347L31.1328 2.88672ZM0 2.88672V3.38672H26.6328V2.88672V2.38672H0V2.88672Z"
										fill="white"
									/>
								</svg>
							</button>

							<ul className="flex flex-col gap-3">
								{tariff.features.map((feature) => (
									<li
										key={feature}
										className="flex items-center gap-2.5 text-[#616161] text-[12px] leading-[120%]"
									>
										<img
											className="w-2 h-2 shrink-0"
											src="/icons/check.svg"
											alt=""
										/>
										{feature}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="flex flex-col gap-2.5">
					{SUBBLOCKS.map((item) => (
						<div
							style={{
								boxShadow:
									"3px 3px 4px 0 rgba(0, 0, 0, 0.02), 5px 5px 10px 0 rgba(0, 0, 0, 0.04)",
								background: item.isBold
									? "linear-gradient(137.29deg, #FFFFFF 0%, #F0F6FF 99.99%)"
									: "",
							}}
							key={item.left}
							className={clsx(
								"flex h-[60px] items-center justify-between rounded-[12px] border border-[#C1C1C1] bg-[#FDFDFD] px-6 max-md:h-[50px] max-md:px-4 max-md:text-[15px]",
								item.isBold && "font-bold",
							)}
						>
							<span>{item.left}</span>
							<span>{item.right}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
