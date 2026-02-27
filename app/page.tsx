import DataSecurity from "@/components/landing/data-security";
import EntryForm from "@/components/landing/entry-form";
import Examples from "@/components/landing/examples";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import LaunchPath from "@/components/landing/launch-path";
import MakesMoney from "@/components/landing/makes-money";
import PersonalAccount from "@/components/landing/personal-account";
import Stages from "@/components/landing/stages";
import Tariffs from "@/components/landing/tariffs";
import Who from "@/components/landing/who";
import Reveal from "@/components/landing/ui/reveal";

export default function LandingPage() {
	return (
		<div className="relative">
			<img
				src="/images/decor/top-right-angle.png"
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute top-0 right-0 z-0 select-none"
			/>

			<div className="relative z-10 pt-9 max-md:pt-4">
				<Header />
				<Hero className="mt-20 mb-[50px] max-md:mt-10 max-md:mb-8" />
				<div className="flex flex-col gap-40 max-md:gap-20">
					<Reveal>
						<Stages />
					</Reveal>
					<Reveal>
						<Examples />
					</Reveal>
					<Reveal>
						<Features />
					</Reveal>
					<Reveal>
						<DataSecurity />
					</Reveal>
					<Reveal>
						<PersonalAccount />
					</Reveal>
					<Reveal>
						<Who />
					</Reveal>
					<Reveal>
						<LaunchPath />
					</Reveal>
					<Reveal>
						<MakesMoney />
					</Reveal>
					<Reveal>
						<Tariffs />
					</Reveal>
					<Reveal>
						<EntryForm />
					</Reveal>
					<Reveal>
						<Footer />
					</Reveal>
				</div>
			</div>
		</div>
	);
}
