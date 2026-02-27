import Link from "next/link";

type LogoProps = {
	priority?: boolean;
	className?: string;
};

export default function Logo({ className }: LogoProps) {
	return (
		<Link href="/" aria-label="Velorra home" className={className}>
			<img className="max-sm:w-[120px]" src="/logo.svg" alt="Velorra" width={155} height={61} />
		</Link>
	);
}
