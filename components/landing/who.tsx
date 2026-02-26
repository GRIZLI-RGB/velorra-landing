import clsx from "clsx";

export default function Who({ className }: { className?: string }) {
  return (
    <section className={clsx("px-6 py-10", className)}>
      <h2 className="text-2xl font-semibold">Who</h2>
      <p className="mt-2 text-base text-zinc-600">
        Кому подходит продукт и какие задачи решает.
      </p>
    </section>
  );
}
