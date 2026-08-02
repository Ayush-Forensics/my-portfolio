"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Award, Maximize2, Briefcase, Star } from "lucide-react";
import { useState } from "react";
import HolographicCard from "@/components/ui/holographic-card";

const certificates = [
  {
    id: "cyber-crime-internship",
    category: "Internships",
    title: "Offline Internship at Cyber Crime Police Station",
    issuer: "Ranchi, Jharkhand",
    date: "May 2026",
    link: "https://drive.google.com/file/d/1yz1gwq0e2qLun2euNp38D9HMP15gdbHW/view?usp=drivesdk",
    image: "/certificates/cyber-crime-internship.jpg",
    details: [
      "Successfully completed offline Internship from May 01, 2026 to May 28, 2026.",
      "Authorized by the Deputy Superintendent of Police, Cyber Crime Police Station."
    ]
  },
  {
    id: "mad-forensics-csi",
    category: "Achievements",
    title: "Crime Scene Investigation and Evidence",
    issuer: "Mad Forensics",
    date: "July 26, 2026",
    image: "/certificates/mad-forensics.jpg",
    details: [
      "Successfully participated in the webinar on Crime Scene Investigation and Evidence.",
      "Certificate ID: MF26/CSI/049"
    ]
  },
  {
    id: "forensisco-ambassador",
    category: "Achievements",
    title: "Forensisco Campus Ambassador",
    issuer: "FORENSISCO & CyberSisco",
    date: "July 2026",
    image: "/certificates/forensisco-ambassador.jpg",
    link: "https://www.linkedin.com/posts/forensisco_campusambassador-forensisco-cybersisco-activity-7488174184762634240-r4h7",
    details: [
      "Collaborating with a like-minded community working toward common goals.",
      "Continuing to grow skills and knowledge in forensic science.",
      "Exploring deeper dimensions of the forensic world.",
      "Contributing to building a safer, more informed tomorrow."
    ]
  },
  {
    id: "be10x-ai",
    category: "Achievements",
    title: "AI Tools & ChatGPT Workshop",
    issuer: "be10x",
    date: "July 12, 2026",
    image: "/certificates/be10x-ai.png",
    details: [
      "Create presentations using AI in under 5 min.",
      "Analyse data using AI in under 30 min.",
      "Code and Debug using AI in under 10 min."
    ]
  },
  {
    id: "forensisco-psychology",
    category: "Achievements",
    title: "Introduction to Forensic Psychology",
    issuer: "FORENSISCO",
    date: "July 11, 2026",
    image: "/certificates/forensisco-psychology.png",
    details: [
      "Successfully participated in the Introduction to Forensic Psychology webinar.",
      "Certificate ID: FSCO-2026-202"
    ]
  },
  {
    id: "pramaan-2026",
    category: "Awards",
    title: "Forensic Fest Pramaan 3.0",
    issuer: "Parul University",
    date: "February 26-27, 2026",
    image: "/certificates/pramaan-2026.png",
    details: [
      "Certificate of Appreciation for contribution to the Forensic Fest Pramaan 3.0.",
      "Department of Forensic Science, Parul Institute of Applied Sciences."
    ]
  },
  {
    id: "pramaan-2025",
    category: "Awards",
    title: "Forensic Fest Pramaan 2025",
    issuer: "Parul University",
    date: "February 26-27, 2025",
    image: "/certificates/pramaan-2025.png",
    details: [
      "Certificate of Appreciation for contribution to the Forensic Fest Pramaan 2025.",
      "Department of Forensic Science, Parul Institute of Applied Sciences."
    ]
  }
];

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { title: "Internships", icon: <Briefcase className="text-accent-primary" size={24} /> },
    { title: "Achievements", icon: <Star className="text-accent-primary" size={24} /> },
    { title: "Awards", icon: <Award className="text-accent-primary" size={24} /> }
  ];

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-primary/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-sm font-mono mb-4">
            <Award size={16} />
            <span>04. Recognition</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 font-display tracking-wide">
            Awards, Achievements & Internships
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-accent-primary to-fuchsia-500 mt-6 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
        </motion.div>

        <div className="flex flex-col gap-24">
          {categories.map(({ title: category, icon }) => {
            const categoryCerts = certificates.filter(c => c.category === category);
            if (categoryCerts.length === 0) return null;

            return (
              <div key={category} className="relative">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-10"
                >
                  <div className="p-3 bg-slate-900 border border-accent-primary/30 rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.15)] relative">
                    <div className="absolute inset-0 bg-accent-primary/10 rounded-xl animate-pulse"></div>
                    <div className="relative z-10">{icon}</div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-100 font-display">
                    {category}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-accent-primary/60 via-fuchsia-500/30 to-transparent ml-4 md:ml-8"></div>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {categoryCerts.map((cert, idx) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <HolographicCard className="h-full group relative rounded-xl">
                        {/* Neon Ambient Glow */}
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-accent-primary/30 to-fuchsia-600/30 rounded-xl blur opacity-20 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        
                        <div className="relative flex flex-col h-full bg-slate-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5">
                          {/* Image Container */}
                          <div 
                            className="relative w-full aspect-[4/5] md:aspect-[3/2] overflow-hidden bg-slate-950 cursor-pointer border-b border-glass-border"
                            onClick={() => setSelectedImage(cert.image)}
                          >
                            <Image
                              src={cert.image}
                              alt={cert.title}
                              fill
                              className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-accent-primary/0 group-hover:bg-accent-primary/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <div className="bg-slate-900/80 backdrop-blur-md p-3 rounded-full text-white border border-accent-primary/50 shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                                <Maximize2 size={24} />
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="text-xl font-bold text-slate-100">{cert.title}</h4>
                              {cert.link && (
                                <a 
                                  href={cert.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="p-2 bg-slate-800/50 hover:bg-accent-primary/20 hover:text-accent-primary rounded-md transition-colors text-slate-400"
                                  title="View Original Post"
                                >
                                  <ExternalLink size={18} />
                                </a>
                              )}
                            </div>
                            
                            <div className="flex items-center gap-2 mb-4 font-mono text-xs">
                              <span className="text-accent-secondary">{cert.issuer}</span>
                              <span className="text-slate-600">•</span>
                              <span className="text-slate-400">{cert.date}</span>
                            </div>

                            {cert.details && cert.details.length > 0 && (
                              <ul className="flex flex-col gap-2 mt-auto pt-4 border-t border-glass-border/50">
                                {cert.details.map((detail, i) => (
                                  <li key={i} className="text-sm text-slate-300 pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-accent-primary before:font-mono leading-relaxed">
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </HolographicCard>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-lg p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl max-h-full aspect-auto flex justify-center h-[90vh]">
            <Image
              src={selectedImage}
              alt="Fullscreen Certificate"
              fill
              className="object-contain"
            />
            <button 
              className="absolute top-0 right-0 md:-right-12 p-2 bg-slate-800 text-white rounded-full hover:bg-red-500/80 transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
