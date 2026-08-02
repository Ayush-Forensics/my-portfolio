import NavBar from "@/components/ui/NavBar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import CyberProfile from "@/components/sections/CyberProfile";
import Projects from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const BASE_URL = 'https://ayush-kumar.in';

// ── JSON-LD structured data for Google rich results ───────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: "Ayush Kumar",
  alternateName: ["Ayush Kumar forensic", "Ayush Kumar digital forensics", "Ayush Kumar applied forensics"],
  url: BASE_URL,
  image: {
    "@type": "ImageObject",
    url: `${BASE_URL}/ayush_profile.jpg`,
    width: 400,
    height: 533,
    caption: "Ayush Kumar — Forensic Science & Cybersecurity",
  },
  description:
    "Ayush Kumar is a forensic science student and Forensisco Campus Ambassador specialising in digital forensics, applied forensic science, OSINT, cybercrime investigation, forensic anthropology, forensic odontology, and questioned document examination at Parul University, Gujarat.",
  jobTitle: ["Forensisco Campus Ambassador", "Digital Forensic Investigator", "Forensic Science Student", "Cybersecurity Learner", "OSINT Analyst"],
  knowsAbout: [
    "Digital Forensics",
    "Applied Forensic Science",
    "Cyber Forensics",
    "OSINT",
    "Cybersecurity",
    "Forensic Anthropology",
    "Forensic Odontology",
    "Questioned Document Examination",
    "Fingerprint Analysis",
    "Crime Scene Analysis",
    "Criminology",
    "DFIR",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Parul Institute of Applied Sciences, Parul University",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
  },
  sameAs: [
    "https://www.linkedin.com/in/ayush-forensics",
    "https://github.com/Ayush-Forensics",
    "https://tryhackme.com/p/ayushkr54881",
    "https://www.linkedin.com/posts/forensisco_campusambassador-forensisco-cybersisco-activity-7488174184762634240-r4h7",
  ],
  email: "ayushkr54881@gmail.com",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Ayush Kumar Forensic Portfolio",
  description:
    "Official portfolio of Ayush Kumar — digital forensics, applied forensic science, OSINT, and cybersecurity.",
  author: { "@id": `${BASE_URL}/#person` },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "About Ayush Kumar Forensic", item: `${BASE_URL}/#about` },
    { "@type": "ListItem", position: 3, name: "Skills", item: `${BASE_URL}/#skills` },
    { "@type": "ListItem", position: 4, name: "Certificates", item: `${BASE_URL}/#certificates` },
    { "@type": "ListItem", position: 5, name: "Forensic Case Files", item: `${BASE_URL}/#projects` },
    { "@type": "ListItem", position: 6, name: "Contact", item: `${BASE_URL}/#contact` },
  ],
};

export default function Home() {
  return (
    <>
      {/* ── JSON-LD injected into <head> via Next.js script tag ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen">
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <CyberProfile />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
