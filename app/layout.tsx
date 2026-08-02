import type { Metadata, Viewport } from 'next';
import { Rajdhani, Orbitron, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import BootAnimation from '@/components/ui/BootAnimation';
const rajdhani = Rajdhani({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-rajdhani'
});

const orbitron = Orbitron({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700', '900'],
  variable: '--font-orbitron'
});

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500'],
  variable: '--font-jetbrains'
});

const BASE_URL = 'https://ayush-kumar.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Primary keyword: "Ayush Kumar forensic" ──────────────────────────
  title: {
    default: 'Ayush Kumar Forensic | Digital & Applied Forensic Science Portfolio',
    template: '%s | Ayush Kumar Forensic',
  },
  description:
    'Ayush Kumar forensic portfolio — a B.Sc. Forensic Science student specialising in digital forensics, applied forensic science, OSINT, cyber investigation, forensic anthropology, questioned documents, and cybersecurity at Parul University.',

  keywords: [
    // ── Core brand keyword (both forms) ──
    'Ayush Kumar forensic',
    'Ayush Kumar digital forensic',
    'Ayush Kumar applied forensic',
    'Ayush Kumar forensic science',
    'Ayush Kumar cybersecurity',
    'Ayush Kumar OSINT',
    'Ayush Kumar Parul University',
    'Forensisco Campus Ambassador',
    'Cybersisco',
    // ── Discipline keywords ──
    'digital forensics',
    'applied forensic science',
    'forensic science portfolio',
    'cyber forensics',
    'DFIR',
    'digital evidence',
    'cybercrime investigation',
    'OSINT analyst',
    'forensic anthropology',
    'forensic odontology',
    'questioned document examination',
    'crime scene analysis',
    'fingerprint analysis',
    'forensic video analysis',
    'criminal investigation',
    'criminology',
    // ── Platform & institution ──
    'TryHackMe Top 15%',
    'Parul Institute of Applied Sciences',
    'B.Sc. Forensic Science Honours',
    'NCC cadet',
    'cyber investigator',
    'information security',
  ],

  authors: [{ name: 'Ayush Kumar', url: BASE_URL }],
  creator: 'Ayush Kumar',
  publisher: 'Ayush Kumar',

  // ── Canonical & alternates ────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Robots ───────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Open Graph ───────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    title: 'Ayush Kumar Forensic | Digital & Applied Forensic Science Portfolio',
    description:
      'Ayush Kumar forensic portfolio — digital forensics, applied forensic science, OSINT, cybersecurity, and crime-scene investigation by a top-ranked Forensic Science student at Parul University.',
    siteName: 'Ayush Kumar Forensic Portfolio',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Ayush Kumar — Forensic Science & Cybersecurity Portfolio',
      },
    ],
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Ayush Kumar Forensic | Digital & Applied Forensic Science',
    description:
      'Ayush Kumar forensic portfolio — digital forensics, applied forensic science, OSINT & cybersecurity.',
    images: ['/opengraph-image'],
  },

  referrer: 'origin-when-cross-origin',
  category: 'portfolio',
  icons: {
    icon: '/icon.png',
  },
};

// ── Viewport (themeColor / colorScheme belong here in Next.js 15) ─────────────
export const viewport: Viewport = {
  themeColor: '#00e5ff',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" prefix="og: https://ogp.me/ns#">
      <body className={`${rajdhani.variable} ${orbitron.variable} ${jetbrains.variable} font-sans antialiased`}>
        <BootAnimation />
        {children}
      </body>
    </html>
  );
}
