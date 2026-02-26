import clsx from "clsx";

export default function Features({ className }: { className?: string }) {
  return (
    <section className={clsx("px-6 py-10", className)}>
      <h2 className="text-2xl font-semibold">Features</h2>
      <p className="mt-2 text-base text-zinc-600">
        Ключевые функции продукта и их преимущества.
      </p>
    </section>
  );
}
