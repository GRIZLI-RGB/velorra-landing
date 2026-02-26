import Title from "./ui/title";
import clsx from "clsx";

export default function DataSecurity({ className }: { className?: string }) {
  return (
    <section className={clsx(className)}>
      <div className="default-container flex gap-11 items-center">
        <div className="max-w-[560px]">
          <Title as="h2" align="left">
            Безопасность данных
          </Title>
          <p className="text-[25px] mt-2.5">
            Все данные хранятся и обрабатываются на российских серверах с
            использованием собственных LLM моделей. Строгое соблюдение ФЗ-152 «О
            персональных данных».
          </p>
        </div>
        <img src="/images/security-lock.png" alt="" width={343} height={385} />
      </div>
    </section>
  );
}
