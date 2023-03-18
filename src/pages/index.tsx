import About from "@/components/About/About";
import Bridge from "@/components/Bridge/Bridge";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Repertoire from "@/components/Repertoire/Repertoire";
import Team from "@/components/Team/Team";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Team />
      <Repertoire />
      <Gallery />
      <Bridge />
      <Footer />
    </>
  );
}
