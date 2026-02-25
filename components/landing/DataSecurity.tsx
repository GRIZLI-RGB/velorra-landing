import Image from "next/image";

export default function DataSecurity() {
  return (
    <section className="">
      <div className="default-container flex gap-11 items-center">
        <div>
          <h2 className="mb-2.5">Безопасность данных</h2>
          <p>
            Все данные хранятся и обрабатываются на российских серверах с
            использованием собственных LLM моделей. Строгое соблюдение ФЗ-152 «О
            персональных данных».
          </p>
        </div>
        <Image
          src="/images/security-lock.png"
          alt=""
          width={343}
          height={385}
        />
      </div>
    </section>
  );
}
