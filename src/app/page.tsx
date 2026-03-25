import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Diferenciais } from "@/components/Diferenciais";
import { Produtos } from "@/components/Produtos";
import { ComoFunciona } from "@/components/ComoFunciona";
import { Galeria } from "@/components/Galeria";
import { Contato } from "@/components/Contato";
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
        <Contato />
      </main>
      <SectionIndicator />
    </>
  );
}
