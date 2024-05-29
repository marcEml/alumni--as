export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Managers from "@/components/landing/about";
import Projects from "@/components/landing/mission";
import Submit from "@/components/landing/submit";
import Hero from "@/components/landing/hero";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/header";
import Top from "@/components/landing/top";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Top />
      <Projects />
      <Managers />
      <Submit />
      <Footer />
    </>
  );
}
