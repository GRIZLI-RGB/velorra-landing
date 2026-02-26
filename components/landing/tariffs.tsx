import clsx from "clsx";

export default function Tariffs({ className }: { className?: string }) {
  return (
    <section className={clsx(className)}>
      <h2 className="text-2xl font-semibold">Tariffs</h2>
      <p className="mt-2 text-base text-zinc-600">Тарифы и условия подключения.</p>
    </section>
  );
}
