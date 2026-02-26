"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import clsx from "clsx";
import Title from "./ui/title";
import Button from "./ui/button";

const slides = [
  "/images/personal-account/slider/1.jpg",
  "/images/personal-account/slider/2.jpg",
  "/images/personal-account/slider/3.jpg",
  "/images/personal-account/slider/4.jpg",
];

export default function PersonalAccount({ className }: { className?: string }) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((i) => (i === 0 ? slides.length - 1 : i - 1)),
    [],
  );
  const next = useCallback(
    () => setCurrent((i) => (i === slides.length - 1 ? 0 : i + 1)),
    [],
  );

  return (
    <section className={clsx(className)}>
      <div className="default-container">
        <div className="flex-middle flex-col">
          <Title className="max-w-[560px]">
            Единый кабинет управления ИИ-агентами
          </Title>
          <p className="mt-5 mb-10 max-w-[600px] text-[20px] text-center">
            Все ваши ИИ-агенты — в одном месте: по направлениям бизнеса,
            статусам подписки и номерам. Создавайте новых агентов и управляйте
            подпиской в пару кликов.
          </p>

          <div className="relative flex w-full items-center">
            <button
              onClick={prev}
              aria-label="Предыдущий слайд"
              className="absolute -left-16 z-10 flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center"
            >
              <Image
                src="/images/personal-account/slider/arrow-left.svg"
                alt=""
                width={11}
                height={32}
              />
            </button>

            <div className="w-full overflow-hidden rounded-[18px] border border-(--color-blue)">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {slides.map((src, i) => (
                  <div key={src} className="w-full shrink-0">
                    <img
                      src={src}
                      alt={`Скриншот личного кабинета ${i + 1}`}
                      width={985}
                      height={620}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={next}
              aria-label="Следующий слайд"
              className="absolute -right-16 z-10 flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center"
            >
              <Image
                src="/images/personal-account/slider/arrow-right.svg"
                alt=""
                width={11}
                height={32}
              />
            </button>
          </div>

          <p className="mt-5 mb-7 text-center text-[20px]">
            Зарегистрируйтесь в Velorra
            <br />и создайте первого ИИ-агента уже сегодня
          </p>
          <Button text="Попробовать бесплатно" />
        </div>
      </div>
    </section>
  );
}
