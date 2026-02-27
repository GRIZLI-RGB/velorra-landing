"use client";

import { useRef, useState, useCallback } from "react";
import clsx from "clsx";
import Title from "./ui/title";
import Button from "./ui/button";

const EXAMPLES = [
  {
    title: "Агентство недвижимости",
    description: "Квалификация клиента",
    audio: "/audio/Недвижимость.mp3",
  },
  {
    title: "Медицинская клиника",
    description: "Запись на приём",
    audio: "/audio/Стоматология.mp3",
  },
  {
    title: "Ресторан",
    description: "Бронирование столика",
    audio: "/audio/Ресторан2.wav",
  },
  {
    title: "Поддержка онлайн сервиса",
    description: "Решение вопроса",
    audio: "/audio/Техническая поддержка.mp3",
  },
  {
    title: "Салон красоты",
    description: "Запись на услугу",
    audio: "/audio/Салон красоты.mp3",
  },
  {
    title: "Фитнес клуб",
    description: "Запись на тренировку",
    audio: "/audio/Фитнес.mp3",
  },
];

export default function Examples({ className }: { className?: string }) {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = useCallback(
    (index: number) => {
      if (playingIndex === index) {
        audioRef.current?.pause();
        if (audioRef.current) audioRef.current.currentTime = 0;
        audioRef.current = null;
        setPlayingIndex(null);
        return;
      }

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }

      const audio = new Audio(EXAMPLES[index].audio);
      audio.addEventListener("ended", () => {
        audioRef.current = null;
        setPlayingIndex(null);
      });
      audio.play();
      audioRef.current = audio;
      setPlayingIndex(index);
    },
    [playingIndex],
  );

  return (
    <section className={clsx("relative overflow-x-clip", className)}>
      <img
        src="/images/decor/left-around-examples.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-[calc(50%-50vw)] -translate-y-1/2 select-none max-[985px]:hidden"
      />
      <img
        src="/images/decor/right-around-examples.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[calc(50%-50vw)] -translate-y-1/2 select-none max-[985px]:hidden"
      />

      <div className="default-container relative z-10 flex flex-col items-center justify-center text-center">
        <Title className="max-w-[560px] leading-[120%]">
          Послушайте, как говорят наши ИИ-агенты
        </Title>
        <p className="mt-2.5 max-w-[740px] text-[25px] max-[985px]:text-[20px] max-md:text-[18px]">
          Реальные записи разговоров с клиентами. Естественная речь,
          профессиональный подход и высокая эффективность.
        </p>
        <div className="my-10 grid w-full grid-cols-2 gap-x-11 gap-y-4 max-[985px]:grid-cols-1 max-[985px]:gap-4 max-md:my-8">
          {EXAMPLES.map((example, index) => {
            const isPlaying = playingIndex === index;

            return (
              <div
                key={example.title}
                onClick={() => handleClick(index)}
                className={clsx(
                  "flex w-full cursor-pointer items-start gap-6 rounded-[18px] border px-4 py-7 transition-all duration-200 select-none max-[985px]:gap-4 max-[985px]:py-5 max-md:px-3.5",
                  isPlaying
                    ? "border-[#3D7EF4] bg-[#F7FAFF]"
                    : "border-[#C1C1C1] bg-[#FDFDFD] hover:-translate-y-0.5 hover:border-[#3D7EF4] hover:shadow-[3px_3px_8px_0_rgba(61,126,244,0.08),7px_7px_16px_0_rgba(61,126,244,0.1)]",
                )}
                style={{
                  boxShadow: isPlaying
                    ? "3px 3px 8px 0 rgba(61,126,244,0.08), 7px 7px 16px 0 rgba(61,126,244,0.1)"
                    : "3px 3px 4px 0 rgba(0, 0, 0, 0.04), 7px 7px 10px 0 rgba(0, 0, 0, 0.05)",
                }}
              >
                <span
                  className={clsx(
                    "flex-middle h-[46px] w-[46px] shrink-0 rounded-full border transition-colors duration-200 max-md:h-10 max-md:w-10",
                    isPlaying
                      ? "border-[#3D7EF4] bg-[#3D7EF4]"
                      : "border-[#3D7EF4] bg-[#F0F6FF]",
                  )}
                >
                  {isPlaying ? (
                    <svg
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="1" y="1" width="4" height="14" rx="1" fill="white" />
                      <rect x="9" y="1" width="4" height="14" rx="1" fill="white" />
                    </svg>
                  ) : (
                    <img
                      className="relative left-0.5"
                      src="/icons/play.svg"
                      alt=""
                    />
                  )}
                </span>
                <div className="flex flex-col items-start">
                  <p className="text-[20px] max-[985px]:text-[18px] max-md:text-[17px]">
                    {example.title}
                  </p>
                  <p className="text-[15px] text-[#7C7C7C] max-md:text-[14px]">
                    {example.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex-middle">
          <Button text="Записаться на демонстрацию" />
        </div>
      </div>
    </section>
  );
}
