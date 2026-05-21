import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { SideSocials } from "@/components/SideSocials";
import { Hero, About, Skills, Projects, Certificates, Contact, SocialStrip, Footer } from "@/components/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio" },
      {
        name: "description",
        content: "Portfolio of Abrham Habtamu, a full-stack developer building real-world web apps with React, Node.js, TypeScript and the MERN stack.",
      },
      { property: "og:title", content: "Abrham Habtamu — Full-stack Developer" },
      {
        property: "og:description",
        content: "Selected projects, skills, and contact info.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <SideSocials />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
        <SocialStrip />
      </main>
      <Footer />
    </div>
  );
}
