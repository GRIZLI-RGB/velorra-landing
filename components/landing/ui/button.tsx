"use client";

import clsx from "clsx";

type ButtonProps = {
  text: string;
  fullWidth?: boolean;
  className?: string;
};

export default function Button({ text, fullWidth = false, className }: ButtonProps) {
  return (
    <button
      type="submit"
      className={clsx(
        "inline-flex h-[52px] items-center justify-center gap-4 rounded-full bg-(--color-blue) px-10 text-[20px] text-white transition-opacity hover:opacity-90",
        fullWidth && "w-full",
        className
      )}
    >
      <span>{text}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="6"
        viewBox="0 0 32 6"
        fill="none"
      >
        <path
          d="M31.1328 2.88672L26.1328 -3.26633e-05V5.77347L31.1328 2.88672ZM0 2.88672V3.38672H26.6328V2.88672V2.38672H0V2.88672Z"
          fill="white"
        />
      </svg>
    </button>
  );
}
