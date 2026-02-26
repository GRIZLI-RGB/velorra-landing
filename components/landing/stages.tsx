import clsx from "clsx";
import Image from "next/image";
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
      <div className="default-container w-[1064px]!">
        <div className="max-w-[600px] text-center flex flex-col gap-2.5 items-center justify-center mx-auto">
          <Title className="text-[35px]! leading-[120%]!">
            От первого гудка до результата — всё под контролем{" "}
            <span className="text-(--color-blue)">Velorra</span>
          </Title>
          <p className="text-[20px]">
            Каждый звонок превращается в обработанного лида, переданного в CRM —
            без ожидания, ошибок и потерь. Ваши менеджеры получают результат, а
            не просто звонок.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-4 gap-8">
          {STAGES.map((stage, index) => (
            <div
              key={stage.title}
              className={clsx(
                "flex flex-col items-start",
                index % 2 !== 0 && "relative top-[50px]",
              )}
            >
              <img src={stage.icon} alt={stage.title} />
              <h3 className="mt-2.5 mb-1 text-[20px]">{stage.title}</h3>
              <p className="text-[15px] text-[#7C7C7C]">{stage.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
