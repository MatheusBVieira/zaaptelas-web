import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Diferenciais } from "@/components/Diferenciais";
import { Produtos } from "@/components/Produtos";
import { ComoFunciona } from "@/components/ComoFunciona";
import { Galeria } from "@/components/Galeria";
import { AreasAtendimento } from "@/components/AreasAtendimento";
import { Contato } from "@/components/Contato";
import { Footer } from "@/components/Footer";
import { SectionIndicator } from "@/components/SectionIndicator";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Diferenciais />
        <Produtos />
        <ComoFunciona />
        <Galeria />
        <AreasAtendimento />
        <Contato />
      </main>
      <Footer />
      <SectionIndicator />
    </>
  );
}
