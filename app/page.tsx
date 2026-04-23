import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalogo from "./components/Catalogo";
import ComoPedir from "./components/ComoPedir";
import Pagos from "./components/Pagos";
import Testimonios from "./components/Testimonios";
import Cobertura from "./components/Cobertura";
import Promo from "./components/Promo";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Catalogo />
        <ComoPedir />
        <Pagos />
        <Testimonios />
        <Cobertura />
        <Promo />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
