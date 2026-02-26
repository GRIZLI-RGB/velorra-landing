import clsx from "clsx";

export default function MakesMoney({ className }: { className?: string }) {
  return (
    <section className={clsx("px-6 py-10", className)}>
      <h2 className="text-2xl font-semibold">Makes Money</h2>
      <p className="mt-2 text-base text-zinc-600">
        Как продукт помогает увеличивать выручку.
      </p>
    </section>
  );
}
