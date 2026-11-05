import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion, transform } from 'framer-motion'
import { Orb, BrowserMockup, PhoneStack, ProjectArt, SectionLabel } from '../components/Visuals'

const services = [['01', 'Web development', 'Distinctive digital homes, designed to turn first impressions into action.', '/services/web-development'], ['02', 'Social media marketing', 'Scroll-stopping content and clear strategy that make people care.', '/services/social-media'], ['03', 'Graphic design & branding', 'A recognisable visual world built around what makes you different.', '/services']]
const projects = [['NOVA / Fashion', 'Website · Creative direction', 'fashion'], ['Bloom Botanics', 'Social media · Branding', 'flora'], ['LOUDER Studio', 'Campaign · Content', 'social']]
export default function Home() {
  return <div className="page home-page">
    <section className="hero section-grid hero-editorial">
      <div className="hero-glow"></div>
      <div className="hero-copy">
        <SectionLabel>INDEPENDENT CREATIVE DIGITAL AGENCY / INDIA + WORLDWIDE</SectionLabel>
        <h1>MAKE<br /><em>DIGITAL</em><br />MATTER<span className="lime-period">.</span></h1>
        <div className="hero-bottomline"><Link className="button button-purple" to="/contact">Let's build something <ArrowUpRight size={19} /></Link><p>We design high-impact websites and create social-first brands that refuse to blend in.</p></div>
        <div className="hero-meta"><div><b>01</b><span>One focused creative partner</span></div><div><b>∞</b><span>Ideas without the template</span></div></div>
      </div>
      <div className="hero-visual hero-photo-visual">
        <div className="hero-photo-main"><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=90" alt="Editorial fashion campaign" /></div>
        <div className="hero-phone phone-one"><div className="phone-ui"><span>● WEBSARTHAK</span><img src="src/assets/img1.png" alt="Fashion social content" /><b>MAKE<br />THE SCROLL<br /><i>STOP.</i></b></div></div>
        <div className="hero-phone phone-two"><div className="phone-ui"><span>● WS / CAMPAIGN</span><img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=700&q=85" alt="Food brand campaign" /><b>GOOD<br />THINGS<br /><i>GROW.</i></b></div></div>
        <div className="hero-visual-tag">CREATIVE DIRECTION<br />WEB / SOCIAL / BRAND</div><div className="hero-index">01 — 08</div>
      </div>
      <div className="hero-scroll">SCROLL TO EXPLORE <ArrowDown size={14} /></div>
    </section>
    <section className="ticker"><div className="ticker-track">{Array.from({ length: 2 }).map((_, i) => <span key={i}>WEB DEVELOPMENT <b>✳</b> SOCIAL-FIRST CONTENT <b>✳</b> CREATIVE DIRECTION <b>✳</b> BRAND IDENTITIES <b>✳</b></span>)}</div></section>
    <section className="services-section section-pad">
      <div className="section-head"><div><SectionLabel>WHAT WE DO</SectionLabel><h2>Big thinking.<br /><em>Bigger impact.</em></h2></div><p>We bring strategy, design and technology together to make brands impossible to ignore — online and everywhere their audience spends time.</p></div>
      <div className="service-feature-visual"><Orb variant="purple" /><div className="service-feature-note">IDEAS BUILT TO<br /><em>BE REMEMBERED.</em></div></div>
      <div className="service-list">{services.map(([n, title, desc, url]) => <Link to={url} className="service-row" key={n}><span className="service-number">{n}</span><h3>{title}</h3><p>{desc}</p><span className="row-arrow"><ArrowUpRight /></span></Link>)}</div>
    </section>
    <section className="intro-section section-pad"><div className="intro-visual"><BrowserMockup /><div className="intro-stamp">IDEAS<br />INTO<br /><em>IMPACT</em></div></div><div className="intro-copy"><SectionLabel>THE WEBSARTHAK WAY</SectionLabel><h2>Not here to<br />blend in. <em>Here to<br />move things.</em></h2><p>WebSarthak is a creative digital studio for ambitious businesses. We combine sharp thinking, expressive design and practical technology to make every digital touchpoint count.</p><Link to="/about" className="text-link">Get to know us <ArrowUpRight size={16} /></Link></div></section>
    <section className="process-section section-pad"><SectionLabel>HOW WE MAKE IT HAPPEN</SectionLabel><div className="process-title"><h2>From first thought<br />to <em>fully formed.</em></h2><p>Clear steps. Open communication. No mystery in the process.</p></div><div className="process-grid">{[['01', 'Discover', 'Understand the business, audience and opportunity.'], ['02', 'Shape', 'Build a clear strategy and creative direction.'], ['03', 'Create', 'Design, develop, test and refine every detail.'], ['04', 'Launch', 'Go live, learn and keep making it better.']].map(x => <div className="process-item" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></section>
    <section className="big-cta"><div className="cta-glow"></div><SectionLabel>HAVE A GOOD ONE IN MIND?</SectionLabel><h2>Let's make<br /><em>something matter.</em></h2><Link to="/contact" className="button button-dark">Tell us about it <ArrowUpRight size={16} /></Link><div className="cta-orbit">✳</div></section>
  </div>
}