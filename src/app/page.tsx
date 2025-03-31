import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Blogs from "@/components/Blogs";
import ProjectSection from "@/components/ProjectSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto mt-24 px-4 sm:px-6 lg:px-8 py-4">
        {/* Hero Section with ID */}
        <section id="home" className="mt-16 scroll-mt-24">
          <HeroSection />
        </section>

        {/* About Section with ID */}
        <section id="about" className="scroll-mt-24">
          <AboutSection />
        </section>

        {/* Projects Section with ID */}
        <section id="projects" className="scroll-mt-24">
          <ProjectSection />
        </section>

        {/* Blog Section with ID */}
        <section id="blog" className="scroll-mt-24">
          <Blogs />
        </section>
        {/* Contact Section with ID */}
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </div>
      <Footer />
    </main>
  );
}
