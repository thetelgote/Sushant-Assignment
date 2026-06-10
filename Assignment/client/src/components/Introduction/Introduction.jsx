import React from 'react'
import { FiEye, FiZap, FiLock } from 'react-icons/fi'

const cards = [
  { icon: <FiEye size={24} />, title: 'Real-Time Threat Detection', desc: 'Continuously monitors URLs and web content for malicious patterns using machine learning models trained on millions of threats.' },
  { icon: <FiZap size={24} />, title: 'Instant AI Analysis', desc: 'Get answers to any cybersecurity question in seconds. Our AI assistant is trained on the latest threat intelligence data.' },
  { icon: <FiLock size={24} />, title: 'Zero-Trust Architecture', desc: 'Every request is treated as potentially untrusted. Multi-layered verification ensures maximum protection for your assets.' },
]

export default function Introduction() {
  return (
    <section style={{ padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }} id="introduction">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-label">What is NetraSecure?</div>
          <h2 className="section-title">Cybersecurity, <span style={{ color: '#00f5d4' }}>Reimagined</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            NetraSecure combines cutting-edge AI with real-world threat intelligence to give you enterprise-grade
            security that's accessible to everyone.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {cards.map(c => (
            <div key={c.title} className="card" style={{ padding: '2rem' }}>
              <div style={{
                width: '52px', height: '52px', borderRadius: '12px',
                background: 'rgba(0,245,212,0.08)', border: '1px solid rgba(0,245,212,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#00f5d4', marginBottom: '1.25rem'
              }}>
                {c.icon}
              </div>
              <h3 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.05rem' }}>{c.title}</h3>
              <p style={{ color: '#a0aec0', fontSize: '0.9rem', lineHeight: 1.7 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}