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
    description: "Запись на встречи, уточнение запроса, сбор обратной связи.",
    bullets: [
      "Качественные лиды",
      "Эффективная воронка",
      "Контроль коммуникаций",
    ],
  },
  {
    icon: "/icons/who/auto.svg",
    title: "Автобизнес",
    description: "Напоминания, приём звонков и записи на обслуживание 24/7.",
    bullets: [
      "Больше загрузка сервиса",
      "Меньше отмен",
      "Снижение затрат на приём звонков",
    ],
  },
];

export default function Who({ className }: { className?: string }) {
  return (
    <section className={clsx(className)}>
      <div className="default-container">
        <Title className="max-w-[540px] mx-auto">
          Для кого Velorra решает задачи уже сегодня
        </Title>
        <div className="mt-10 grid grid-cols-2 gap-x-11 gap-y-9">
          {WHO_DATA.map((item) => (
            <div
              key={item.title}
              className="rounded-[18px] bg-[#FDFDFD] border border-[#C1C1C1] p-[30px] flex items-start gap-4"
              style={{
                boxShadow:
                  "3px 3px 4px 0 rgba(0, 0, 0, 0.04), 7px 7px 10px 0 rgba(0, 0, 0, 0.05)",
              }}
            >
              <img src={item.icon} alt="" className="w-8 h-8 shrink-0" />
              <div>
                <h3 className="text-[20px]">{item.title}</h3>
                <p className="text-[15px] text-[#7C7C7C] mt-1.5 mb-4">
                  {item.description}
                </p>
                <ul className="space-y-1 ml-3">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-[15px] text-[#7C7C7C] flex items-start gap-2"
                    >
                      <span className="mt-[9px] w-1 h-1 rounded-full bg-[#7C7C7C] shrink-0" />
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
