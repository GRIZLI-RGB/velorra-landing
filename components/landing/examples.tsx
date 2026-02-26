import clsx from "clsx";

export default function Examples({ className }: { className?: string }) {
  return (
    <section className={clsx(className)}>
      <h2 className="text-2xl font-semibold">Examples</h2>
      <p className="mt-2 text-base text-zinc-600">
        Примеры сценариев звонков и кейсов использования.
      </p>
    </section>
  );
}
