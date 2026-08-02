import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Ayush Kumar — Forensic Science & Cybersecurity Portfolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #030408 0%, #080e1a 50%, #030408 100%)',
          fontFamily: 'monospace',
          padding: '60px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid background pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Cyan glow blob */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-60px',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Top badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 18px',
            border: '1px solid rgba(0,229,255,0.3)',
            borderRadius: '99px',
            background: 'rgba(0,229,255,0.05)',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#00e5ff',
            }}
          />
          <span style={{ color: '#00e5ff', fontSize: '14px', letterSpacing: '3px' }}>
            SYSTEM: PROFILE LOADED
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '88px',
            fontWeight: 900,
            lineHeight: 1,
            color: '#f1f5f9',
            marginBottom: '8px',
            letterSpacing: '-2px',
          }}
        >
          Ayush Kumar
        </div>

        {/* Keyword highlight */}
        <div
          style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#00e5ff',
            letterSpacing: '8px',
            marginBottom: '28px',
            textTransform: 'uppercase',
          }}
        >
          Forensic Science Portfolio
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '18px',
            color: '#94a3b8',
            maxWidth: '680px',
            lineHeight: 1.6,
            borderLeft: '3px solid #00e5ff',
            paddingLeft: '20px',
            marginBottom: '48px',
          }}
        >
          Digital Forensics · Applied Forensic Science · OSINT · Cybersecurity
          <br />
          B.Sc. Forensic Science (Hons.) — Parul University, Gujarat
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '40px' }}>
          {[
            { num: '50+', label: 'THM Rooms' },
            { num: 'Top 15%', label: 'Global Rank' },
            { num: '8.4+', label: 'CGPA' },
            { num: '6+', label: 'Case Studies' },
          ].map((s) => (
            <div key={s.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '28px', fontWeight: 800, color: '#00e5ff' }}>{s.num}</span>
              <span style={{ fontSize: '11px', color: '#64748b', letterSpacing: '2px', textTransform: 'uppercase' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            fontSize: '14px',
            color: 'rgba(0,229,255,0.4)',
            letterSpacing: '1px',
          }}
        >
          ayush-kumar.in
        </div>

        {/* Corner brackets */}
        <div style={{ position: 'absolute', top: '24px', left: '24px', width: '24px', height: '24px', borderTop: '2px solid rgba(0,229,255,0.4)', borderLeft: '2px solid rgba(0,229,255,0.4)' }} />
        <div style={{ position: 'absolute', top: '24px', right: '24px', width: '24px', height: '24px', borderTop: '2px solid rgba(0,229,255,0.4)', borderRight: '2px solid rgba(0,229,255,0.4)' }} />
        <div style={{ position: 'absolute', bottom: '24px', left: '24px', width: '24px', height: '24px', borderBottom: '2px solid rgba(0,229,255,0.4)', borderLeft: '2px solid rgba(0,229,255,0.4)' }} />
        <div style={{ position: 'absolute', bottom: '24px', right: '24px', width: '24px', height: '24px', borderBottom: '2px solid rgba(0,229,255,0.4)', borderRight: '2px solid rgba(0,229,255,0.4)' }} />
      </div>
    ),
    { ...size },
  );
}
