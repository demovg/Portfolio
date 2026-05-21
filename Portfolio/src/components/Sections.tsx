import { useState } from "react";
import { ArrowDown, Award, Code2, Download, ExternalLink, Github, Linkedin, Mail, Send } from "lucide-react";
import portrait from "@/assets/CV_Image.png";
import melkam from "@/assets/project-melkam.jpg";
import realestate from "@/assets/project-realestate.jpg";
import cafe from "@/assets/project-cafe.jpg";
import { toast } from "sonner";

const skills = [
  "HTML", "CSS", "JavaScript", "React.js", "TypeScript", "TailwindCSS",
  "SCSS", "Node.js", "Express.js", "shadcn/ui", "Git & GitHub",
  "MySQL", "MongoDB", "REST API", "Postman",
];

const certificates = [
  { title: "Internship Certificate", issuer: "CodeAlpha", year: "2024", href: "/CodeAlpha_Internship_Certificate.pdf" },
  { title: "Programming Fundamentals", issuer: "Udacity", year: "2024", href: "/Udacity_Programming_Fundamentals_Certificate.pdf" },
  { title: "Web Development Certification", issuer: "freeCodeCamp", year: "2024", href: "/freecodecamp.PNG" },
  { title: "DSA / Web Development", issuer: "GeeksforGeeks", year: "2024", href: "/GeeksforGeeks.pdf" },
];

const projects = [
  {
    title: "Melkam",
    subtitle: "E-Commerce for Clothes",
    image: melkam,
    description:
      "Full-stack MERN store with an admin panel, product management, Cloudinary uploads, toast notifications, and Chapa payment gateway integration.",
    tags: ["MERN", "Tailwind", "Cloudinary", "Chapa", "Axios"],
    demo: "https://melkam-frontend.vercel.app",
    source: "https://github.com/demovg/ecommerce-app",
  },
  {
    title: "Real-Estate Platform",
    subtitle: "Property listings + map view",
    image: realestate,
    description:
      "Property discovery app with interactive maps, geocoding and authentication. Built with React + Vite, Mantine, React Query, Express, Prisma, MongoDB Atlas, Auth0 and Leaflet.",
    tags: ["React", "Mantine", "Prisma", "Auth0", "Leaflet"],
    demo: "https://menoriya.vercel.app",
    source: "https://github.com/demovg/menoriya",
  },
  {
    title: "Café Menu",
    subtitle: "Frontend digital menu",
    image: cafe,
    description:
      "A polished digital café menu with QR-code generation for table ordering, category routing, and a clean component system built on shadcn/ui.",
    tags: ["React", "TypeScript", "Vite", "shadcn/ui", "qrcode.react"],
    demo: "https://cafe-menu-dun.vercel.app",
    source: "https://github.com/demovg/Cafe_Menu",
  },
];

const socials = [
  { icon: Github, href: "https://github.com/demovg", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: TelegramIcon, href: "https://t.me/Abrham_Habtamu", label: "Telegram" },
  { icon: Mail, href: "mailto:abrhamhabtamumoges@gmail.com", label: "Email" },
];

function TelegramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Hello World ! <br />  <br /> 
            I'm <span className="text-gradient">Abrham</span>
            <br />
            <span className="text-muted-foreground">A Full-stack Web-developer</span>
          </h1>

          <p className="max-w-xl text-base text-muted-foreground md:text-lg">
            Passionate about building real-world web apps from polished UI to
            production-grade backends. Currently shipping MERN, TypeScript and
            modern React experiences.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground glow-primary transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="/Abrham_Habtamu_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-primary hover:text-primary"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/40 to-accent/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border-0 bg-transparent">
            <img
              src={portrait}
              alt="Developer portrait"
              width={896}
              height={1152}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" title="About Me." />
        <div className="grid gap-10 md:grid-cols-2">
          <p className="text-xl font-bold leading-relaxed text-foreground md:text-2xl">
            This is Abrham Habtamu, a web developer from Ethiopia. Thank you for taking the time to visit my portfolio website.
          </p>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
     A Full-stack developer who enjoys turning ideas into functional, well-structured web applications. I work with modern tools like React.js, Node.js, TypeScript, Tailwind CSS, MongoDB, and MySQL to build clean front-end interfaces and reliable back-end systems.
            </p>
            <p>
              I pay close attention to detail and approach problems methodically. Whether I'm designing a responsive layout, setting up a REST API, or managing database logic, I focus on creating seamless, user-friendly experiences.
            </p>
            <p>
              I graduated with a degree in Computer Science from Unity University and continue to expand my skills through hands-on projects and continuous learning. I value clean code, efficient workflows, and practical solutions.
            </p>
            <p>
              When I'm not coding, I'm likely exploring new technologies or refining existing projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Stack" title="Skills & tech stack." />
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-md border border-border bg-card px-4 py-2 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certificates() {
  return (
    <section id="certificates" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Credentials" title="Certificates." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:glow-primary"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Award size={22} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {c.issuer} · {c.year}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5">
                View credential <ExternalLink size={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Work" title="Selected projects." />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:glow-primary"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover overlay — desktop only */}
                <div className="absolute inset-0 hidden flex-col justify-end gap-3 bg-gradient-to-t from-background via-background/85 to-background/0 p-5 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 md:flex">
                  <p className="text-sm leading-relaxed text-foreground/90">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-transform hover:scale-[1.04]"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                    <a
                      href={p.source}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-medium backdrop-blur transition-colors hover:border-primary hover:text-primary"
                    >
                      <Code2 size={14} /> Source Code
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6">
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.subtitle}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {/* Buttons — mobile only */}
                <div className="flex flex-wrap gap-2 pt-1 md:hidden">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href={p.source}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-medium transition-colors hover:border-primary hover:text-primary"
                  >
                    <Code2 size={14} /> Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedMsg = message.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (trimmedMsg.length < 1 || trimmedMsg.length > 5000) {
      toast.error("Your message must be between 1 and 5000 characters.");
      return;
    }
    window.location.href = `mailto:abrhamhabtamumoges@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(`From: ${trimmedEmail}\n\n${trimmedMsg}`)}`;
    toast.success("Opening your email client...");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="Contact" title="Let's talk." />
        <p className="mb-8 max-w-xl text-muted-foreground">
          Drop your email and a short message — I'll get back to you at{" "}
          <span className="text-foreground">abrhamhabtamumoges@gmail.com</span>.
        </p>

        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur md:p-8"
        >
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Your email
            </label>
            <input
              id="email"
              type="email"
              required
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Your message
            </label>
            <textarea
              id="message"
              required
              maxLength={5000}
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project, idea or just say hi..."
              className="w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground glow-primary transition-transform hover:scale-[1.03]"
          >
            <Send size={16} />
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export function SocialStrip() {
  return null;
}

export function Footer() {
  return (
    <footer className="mt-auto py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold md:text-4xl">
          Let's build something <span className="text-gradient">together</span>.
        </h2>
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 flex items-end justify-between gap-6">
      <div>
        <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          <span className="h-px w-8 bg-primary" />
          {eyebrow}
        </div>
        <h2 className="text-3xl font-bold md:text-5xl">{title}</h2>
      </div>
    </div>
  );
}
