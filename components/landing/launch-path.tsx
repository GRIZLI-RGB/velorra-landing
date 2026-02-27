import clsx from "clsx";
import Title from "./ui/title";

type Step = {
  id: string;
  title: string;
  description: string;
};

const STEPS_TOP: Step[] = [
  {
    id: "01",
    title: "Короткий бриф\nи цель внедрения",
    description: "Естественная речь, квалификация запроса, выявление потребности.",
  },
  {
    id: "02",
    title: "Подключение телефонии",
    description:
      "Подключаем Velorra к телефонии: можно использовать вашу телефонию или телефонию партнера",
  },
  {
    id: "03",
    title: "Тестовые звонки и доводка",
    description:
      "Прогоняем тестовые диалоги и добиваемся стабильного результата на реальных кейсах",
  },
];

const STEPS_BOTTOM: Step[] = [
  {
    id: "06",
    title: "Сбор сценария\nи базы знаний",
    description:
      "Собираем логику диалога и правила. Загружаем знания компании: услуги, цены, условия, FAQ",
  },
  {
    id: "05",
    title: "Интеграции\nи передача результатов",
    description:
      "Настраиваем передачу итогов в CRM или другой канал: резюме звонка, контактные данные, статус",
  },
  {
    id: "04",
    title: "Запуск в поток\nи контроль качества",
    description: "Запускаем ИИ-агента в рабочий режим",
  },
];

function StepCard({ id, title, description }: Step) {
  const lines = title.split("\n");

  return (
    <article className="relative">
      <div className="h-10 w-10 rounded-[26.46px] border-[0.875px] border-[#3D7EF4] bg-[#F0F6FF] flex items-center justify-center">
        <span className="text-center text-[18.797px] leading-[120%] tracking-[-0.564px] font-bold text-[#3D7EF4]">
          {id}
        </span>
      </div>
      <h3 className="mt-[22px] text-[20px] leading-[120%]">
        {lines.map((line, index) => (
          <span key={`${id}-${line}`}>
            {line}
            {index < lines.length - 1 ? <br /> : null}
          </span>
        ))}
      </h3>
      <p className="mt-2 text-[15px] leading-[130%] text-[#7C7C7C]">{description}</p>
    </article>
  );
}

export default function LaunchPath({ className }: { className?: string }) {
  return (
    <section className={clsx("relative overflow-x-clip", className)}>
      <img
        src="/images/decor/left-launch-path.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-[calc(50%-50vw)] -translate-y-1/2 select-none"
      />
      <img
        src="/images/decor/right-launch-path.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[calc(50%-50vw)] -translate-y-1/2 select-none"
      />

      <div className="default-container relative z-10">
        <div className="mx-auto max-w-[730px]">
          <Title className="text-[58px]! leading-[100%]!" align="left">
            Быстрый запуск без боли
            <br />и технических сложностей
          </Title>
        </div>

        <div className="relative mt-[42px]">
          <div className="absolute left-[70px] right-[280px] top-5 flex justify-between pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="259"
              height="6"
              viewBox="0 0 259 6"
              fill="none"
              className="w-[230px]"
            >
              <path
                d="M0.5 2.38672C0.223858 2.38672 0 2.61058 0 2.88672C0 3.16286 0.223858 3.38672 0.5 3.38672V2.88672V2.38672ZM258.25 2.88672L253.25 -3.26633e-05V5.77347L258.25 2.88672ZM0.5 2.88672V3.38672H253.75V2.88672V2.38672H0.5V2.88672Z"
                fill="#3D7EF4"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="259"
              height="6"
              viewBox="0 0 259 6"
              fill="none"
              className="w-[230px]"
            >
              <path
                d="M0.5 2.38672C0.223858 2.38672 0 2.61058 0 2.88672C0 3.16286 0.223858 3.38672 0.5 3.38672V2.88672V2.38672ZM258.25 2.88672L253.25 -3.26633e-05V5.77347L258.25 2.88672ZM0.5 2.88672V3.38672H253.75V2.88672V2.38672H0.5V2.88672Z"
                fill="#3D7EF4"
              />
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-x-12 gap-y-[74px]">
            {STEPS_TOP.map((step) => (
              <StepCard key={step.id} {...step} />
            ))}
            {STEPS_BOTTOM.map((step) => (
              <StepCard key={step.id} {...step} />
            ))}
          </div>

          <div className="absolute right-[-7px] top-[20px] pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="233"
              height="220"
              viewBox="0 0 233 220"
              fill="none"
              className="h-[220px] w-[233px]"
            >
              <path
                d="M0 216.98L5 219.867V214.094L0 216.98ZM0.0715599 0.5V1H203.742V0.5V0H0.0715599V0.5ZM231.742 28.5H231.242V188.98H231.742H232.242V28.5H231.742ZM203.742 216.98V216.48H4.5V216.98V217.48H203.742V216.98ZM231.742 188.98H231.242C231.242 204.168 218.93 216.48 203.742 216.48V216.98V217.48C219.482 217.48 232.242 204.72 232.242 188.98H231.742ZM203.742 0.5V1C218.93 1 231.242 13.3122 231.242 28.5H231.742H232.242C232.242 12.7599 219.482 0 203.742 0V0.5Z"
                fill="#3D7EF4"
              />
            </svg>
          </div>

          <div className="absolute left-[70px] right-[280px] top-[244px] flex justify-between pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="259"
              height="6"
              viewBox="0 0 259 6"
              fill="none"
              className="w-[230px]"
            >
              <path
                d="M257.75 3.38672C258.026 3.38672 258.25 3.16286 258.25 2.88672C258.25 2.61058 258.026 2.38672 257.75 2.38672L257.75 2.88672L257.75 3.38672ZM0 2.8867L5 5.77345L5 -5.47595e-05L0 2.8867ZM257.75 2.88672L257.75 2.38672L4.5 2.3867L4.5 2.8867L4.5 3.3867L257.75 3.38672L257.75 2.88672Z"
                fill="#3D7EF4"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="259"
              height="6"
              viewBox="0 0 259 6"
              fill="none"
              className="w-[230px]"
            >
              <path
                d="M257.75 3.38672C258.026 3.38672 258.25 3.16286 258.25 2.88672C258.25 2.61058 258.026 2.38672 257.75 2.38672L257.75 2.88672L257.75 3.38672ZM0 2.8867L5 5.77345L5 -5.47595e-05L0 2.8867ZM257.75 2.88672L257.75 2.38672L4.5 2.3867L4.5 2.8867L4.5 3.3867L257.75 3.38672L257.75 2.88672Z"
                fill="#3D7EF4"
              />
            </svg>
          </div>
        </div>

        <div className="flex-middle mt-[52px]">
          <div
            className="inline-flex items-center justify-center px-10 h-11 rounded-full border border-[#C3C3C3]"
            style={{
              boxShadow:
                "0.414px 0.414px 3.313px 0 rgba(0, 0, 0, 0.25), 4.142px 4.97px 3.313px 0 rgba(0, 0, 0, 0.04)",
            }}
          >
            <span className="text-[15px]">
              Интеграция Velorra занимает от 1 рабочего дня, под ключ.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
