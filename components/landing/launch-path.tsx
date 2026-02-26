import clsx from "clsx";

export default function LaunchPath({ className }: { className?: string }) {
  return (
    <section className={clsx(className)}>
      <h2 className="text-2xl font-semibold">Launch Path</h2>
      <p className="mt-2 text-base text-zinc-600">
        План запуска от первого шага до результата.
      </p>
    </section>
  );
}
