import clsx from "clsx";

export default function PersonalAccount({ className }: { className?: string }) {
  return (
    <section className={clsx("px-6 py-10", className)}>
      <h2 className="text-2xl font-semibold">Personal Account</h2>
      <p className="mt-2 text-base text-zinc-600">
        Описание возможностей личного кабинета.
      </p>
    </section>
  );
}
