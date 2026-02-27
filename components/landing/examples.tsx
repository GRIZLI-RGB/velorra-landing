import clsx from "clsx";
import Title from "./ui/title";
import Button from "./ui/button";

const EXAMPLES = [
  { title: "Агентство недвижимости", description: "Квалификация клиента" },
  { title: "Медицинская клиника", description: "Запись на приём" },
  { title: "Ресторан", description: "Бронирование столика" },
  { title: "Поддержка онлайн сервиса", description: "Решение вопроса" },
  { title: "Салон красоты", description: "Запись на услугу" },
  { title: "Фитнес клуб", description: "Запись на тренировку" },
];

export default function Examples({ className }: { className?: string }) {
  return (
    <section className={clsx("relative overflow-x-clip", className)}>
      <img
        src="/images/decor/left-around-examples.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-[calc(50%-50vw)] -translate-y-1/2 select-none"
      />
      <img
        src="/images/decor/right-around-examples.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[calc(50%-50vw)] -translate-y-1/2 select-none"
      />

      <div className="default-container relative z-10 flex justify-center flex-col items-center text-center">
        <Title className="max-w-[560px] leading-[120%]">
          Послушайте, как говорят наши ИИ-агенты
        </Title>
        <p className="mt-2.5 text-[25px] max-w-[740px]">
          Реальные записи разговоров с клиентами. Естественная речь,
          профессиональный подход и высокая эффективность.
        </p>
        <div className="grid my-10 grid-cols-2 gap-x-11 gap-y-4 w-full">
          {EXAMPLES.map((example) => (
            <div
              key={example.title}
              className="rounded-[18px] w-full bg-[#FDFDFD] border border-[#C1C1C1] flex gap-6 items-start px-4 py-7"
              style={{
                boxShadow:
                  "3px 3px 4px 0 rgba(0, 0, 0, 0.04), 7px 7px 10px 0 rgba(0, 0, 0, 0.05)",
              }}
            >
              <button className="flex-middle h-[46px] w-[46px] shrink-0 rounded-full border-[#3D7EF4] border bg-[#F0F6FF]">
                <img className="relative left-0.5" src="/icons/play.svg" alt="" />
              </button>
              <div className="flex flex-col items-start">
                <p className="text-[20px]">{example.title}</p>
                <p className="text-[15px] text-[#7C7C7C]">{example.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-middle">
          <Button text="Записаться на демонстрацию" />
        </div>
      </div>
    </section>
  );
}
