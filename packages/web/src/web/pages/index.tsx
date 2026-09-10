import { useReveal } from "../hooks/use-reveal";
import { Header } from "../components/site/header";
import { Hero } from "../components/site/hero";
import { Servicos } from "../components/site/servicos";
import { Projetos } from "../components/site/projetos";
import { Processo } from "../components/site/processo";
import { Escritorio } from "../components/site/escritorio";
import { Faq } from "../components/site/faq";
import { Contato } from "../components/site/contato";
import { Footer } from "../components/site/footer";
import { MobileCta } from "../components/site/mobile-cta";

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <Servicos />
        <Projetos />
        <Processo />
        <Escritorio />
        <Faq />
        <Contato />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}

export default Index;
