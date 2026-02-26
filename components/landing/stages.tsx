import clsx from "clsx";

export default function Stages({ className }: { className?: string }) {
  return (
    <section className={clsx("px-6 py-10", className)}>
      <h2 className="text-2xl font-semibold">Stages</h2>
      <p className="mt-2 text-base text-zinc-600">
        Этапы внедрения и запуска решения.
      </p>
    </section>
  );
}
