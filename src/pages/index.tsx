import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Team from "@/components/Team/Team";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Team />
    </>
  );
}
