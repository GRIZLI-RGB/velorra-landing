import DataSecurity from "@/components/landing/DataSecurity";
import EntryForm from "@/components/landing/EntryForm";
import Examples from "@/components/landing/Examples";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import LaunchPath from "@/components/landing/LaunchPath";
import MakesMoney from "@/components/landing/MakesMoney";
import PersonalAccount from "@/components/landing/PersonalAccount";
import Stages from "@/components/landing/Stages";
import Tariffs from "@/components/landing/Tariffs";
import Who from "@/components/landing/Who";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <Stages />
      <Examples />
      <Features />
      <DataSecurity />
      <PersonalAccount />
      <Who />
      <LaunchPath />
      <MakesMoney />
      <Tariffs />
      <EntryForm />
      <Footer />
    </>
  );
}
