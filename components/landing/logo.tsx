import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  priority?: boolean;
  className?: string;
};

export default function Logo({ priority = false, className }: LogoProps) {
  return (
    <Link href="/" aria-label="Velorra home" className={className}>
      <Image
        quality={100}
        src="/logo.svg"
        alt="Velorra"
        width={155}
        height={61}
        priority={priority}
      />
    </Link>
  );
}
