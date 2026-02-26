import Title from "./ui/title";

export default function EntryForm() {
  return (
    <section>
      <div className="default-container flex items-start justify-between gap-10">
        <div className="max-w-[440px] w-full">
          <Title align="left">Готовы попробовать Velorra в работе?</Title>
          <p className="mt-2.5 text-[25px]">
            Оставьте заявку и получите
            <br />
            <b>100 минут в подарок!</b>
          </p>
        </div>
        <form className="max-w-[424px]">Форма</form>
      </div>
    </section>
  );
}
