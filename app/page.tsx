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

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero className="mt-20 mb-[50px]" />
      <div className="flex flex-col gap-40">
        <Stages />
        <Examples />
        <Features />
        <DataSecurity />
        <PersonalAccount />
        <Who />
        <LaunchPath />
        <MakesMoney />
        <Tariffs />
      </div>
      <EntryForm className="my-[200px]" />
      <Footer />
    </>
  );
}
