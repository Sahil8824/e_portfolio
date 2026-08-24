import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Interests from "@/components/Interests";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        {/* Auto-hide when their data files are empty */}
        <Experience />
        <Achievements />
        <Certifications />
        <Interests />
        <WhyWorkWithMe />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
