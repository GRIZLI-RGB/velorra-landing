import { type ReactNode } from "react";

type TitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type TitleAlign = "left" | "center" | "right";

interface TitleProps {
  children: ReactNode;
  as?: TitleTag;
  align?: TitleAlign;
  className?: string;
}

const alignClasses: Record<TitleAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export default function Title({
  children,
  as = "h2",
  align = "center",
  className = "",
}: TitleProps) {
  const Tag = as;
  const classes = `text-[45px] font-bold ${alignClasses[align]} ${className}`.trim();

  return <Tag className={classes}>{children}</Tag>;
}