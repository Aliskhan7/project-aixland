import Header from "@/app/components/Header/Header";
import Main from "@/app/components/Main/Main";
import Projects from "@/app/components/Projects/Projects";
import Collaborate from "@/app/components/Collaborate/Collaborate";
import Footer from "@/app/components/Footer/Footer";
import Benefits from "@/app/components/Benefits/Benefits";
import Features from "@/app/components/Features/Features";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Benefits />
      <Features />
      <Projects />
      <Collaborate />
      <Footer />
    </div>
  );
}
