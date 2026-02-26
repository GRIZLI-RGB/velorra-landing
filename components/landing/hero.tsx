import clsx from "clsx";

export default function Hero({ className }: { className?: string }) {
  return (
    <section className={clsx("px-6 py-10", className)}>
      <h2 className="text-2xl font-semibold">Hero</h2>
      <p className="mt-2 text-base text-zinc-600">
        Главный экран лендинга с ключевым оффером.
      </p>
    </section>
  );
}
