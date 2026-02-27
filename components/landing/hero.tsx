import clsx from "clsx";
import Button from "./ui/button";

export default function Hero({ className }: { className?: string }) {
  return (
    <section className={clsx("overflow-x-clip", className)}>
      <div className="default-container">
        <div className="flex-middle w-full">
          <div
            className="inline-flex h-11 items-center justify-center gap-2.5 rounded-full border border-[#C3C3C3] px-10 max-md:h-10 max-md:gap-1 max-md:px-3"
            style={{
              boxShadow:
                "0.414px 0.414px 3.313px 0 rgba(0, 0, 0, 0.25), 4.142px 4.97px 3.313px 0 rgba(0, 0, 0, 0.04)",
            }}
          >
            <img className="max-sm:w-4" src="/icons/stars.svg" alt="" />
            <span className="text-[15px] max-sm:text-[13px]">
              100 минут бесплатно для новых клиентов
            </span>
          </div>
        </div>
        <div className="mt-11 mb-[50px] flex flex-col items-center justify-center text-center max-md:mt-6 max-md:mb-8">
          <h1 className="text-[60px] leading-[100%] max-md:text-[36px]">
            Голосовой{" "}
            <span className="text-(--color-blue) font-bold">AI-агент</span>
            <br />
            для входящих
            <br />и исходящих звонков
          </h1>
          <p className="mt-[25px] mb-[30px] max-w-[500px] text-[25px] max-md:mt-4 max-md:mb-5 max-md:text-[17px]">
            Автоматизируйте обработку звонков 24/7 и не теряйте ни одного
            клиента.
          </p>
          <Button text="Попробовать бесплатно" />
        </div>
      </div>
      <div className="relative mx-auto max-w-[1100px] px-5">
        <img
          src="/images/decor/left-around-voice-line.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-[calc(50%-50vw)] -translate-y-1/2 select-none max-md:hidden"
        />
        <img src="/images/voice-line.png" alt="" className="relative z-10" />
      </div>
    </section>
  );
}
