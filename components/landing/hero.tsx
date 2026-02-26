import clsx from "clsx";
import Button from "./ui/button";

export default function Hero({ className }: { className?: string }) {
  return (
    <section className={clsx(className)}>
      <div className="default-container">
        <div className="flex-middle w-full">
          <div
            className="inline-flex items-center gap-2.5 justify-center px-10 h-11 rounded-full border border-[#C3C3C3]"
            style={{
              boxShadow:
                "0.414px 0.414px 3.313px 0 rgba(0, 0, 0, 0.25), 4.142px 4.97px 3.313px 0 rgba(0, 0, 0, 0.04)",
            }}
          >
            <img src="/icons/stars.svg" alt="" />
            <span className="text-[15px]">
              100 минут бесплатно для новых клиентов
            </span>
          </div>
        </div>
        <div className="mt-11 mb-[50px] flex flex-col items-center justify-center text-center">
          <h1 className="text-[60px] leading-[100%]">
            Голосовой{" "}
            <span className="text-(--color-blue) font-bold">AI-агент</span>
            <br />
            для входящих
            <br />и исходящих звонков
          </h1>
          <p className="text-[25px] max-w-[500px] mt-[25px] mb-[30px]">
            Автоматизируйте обработку звонков 24/7 и не теряйте ни одного
            клиента.
          </p>
          <Button text="Попробовать бесплатно" />
        </div>
      </div>
      <div className="mx-auto max-w-[1100px] px-5">
        <img src="/images/voice-line.png" alt="" />
      </div>
    </section>
  );
}
