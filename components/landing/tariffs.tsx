import clsx from "clsx";
import Title from "./ui/title";

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
        <div className="mt-10 mb-5">Тарифы</div>
        <div className="flex flex-col gap-2.5">
          {SUBBLOCKS.map((item) => (
            <div
              style={{
                boxShadow:
                  "3px 3px 4px 0 rgba(0, 0, 0, 0.02), 5px 5px 10px 0 rgba(0, 0, 0, 0.04)",
              }}
              key={item.left}
              className={clsx(
                "flex items-center justify-between bg-[#FDFDFD] rounded-[12px] border border-[#C1C1C1] px-6 h-[60px]",
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
