import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import img1 from '../assets/img1.png'
import fash from '../assets/fashion.png'
import img3 from '../assets/img3.png'
import img2 from '../assets/img2.png'

// Image-led art direction: editorial photography, device frames and layered campaign imagery.
const photos = {
  social: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=85',
  fashion: fash,
  fashion1: img1,
  portrait: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85',
  creator: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85',
  studio: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85',
  product: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85',
  architecture: img3,
  travel: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=85',
  food: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=85'
}

export function Orb({ small = false, variant = 'purple' }) {
  return <div className={`editorial-collage ${small ? 'editorial-collage-small' : ''} collage-${variant}`}>
    <div className="collage-photo collage-photo-a"><img src={photos.portrait} alt="Creative portrait campaign" /></div>
    <div className="collage-photo collage-photo-b"><img src={img1} alt="Fashion campaign photography" /></div>
    <div className="collage-photo collage-photo-c"><img src={photos.product} alt="Colourful product campaign" /></div>
    <div className="collage-word">MAKE<br /><i>IT</i><br />MATTER.</div>
    <span className="collage-index">WS—STUDIO / 2026</span>
  </div>
}
export function BrowserMockup({ variant = 'purple', title = 'WEBSARTHAK / DIGITAL' }) {
  const img = variant === 'teal' ? photos.architecture : variant === 'lime' ? photos.product : photos.studio
  return <div className={`browser-mock image-browser ${variant}`}>
    <div className="browser-bar"><span className="browser-dots"><i /><i /><i /></span><span>{title}</span><span className="browser-menu">•••</span></div>
    <div className="browser-screen"><img src={img} alt="Website design preview" /><div className="browser-screen-copy"><small>DESIGN THAT MOVES YOU</small><b>MAKE<br />SOME<br /><i>NOISE.</i></b></div></div>
  </div>
}
export function PhoneStack() {
  return <div className="phone-stack image-phone-stack">
    {[photos.fashion, photos.portrait, photos.travel].map((src, i) => <div className={`phone-image phone-image-${i}`} key={src}><div className="phone-topline">9:41　●●●</div><img src={src} alt="Social campaign preview" /><div className="phone-caption"><b>WEBSARTHAK</b><span>Creative that connects ↗</span></div></div>)}
    <div className="float-tag">✳ CONTENT THAT CONNECTS</div>
  </div>
}
export function ProjectArt({ kind = 'fashion' }) {
  const map = { fashion: photos.fashion, flora: photos.fashion1, social: photos.portrait, tech: photos.architecture, travel: photos.travel, product: photos.product }
  return <div className={`project-art project-image-art art-${kind}`}><img src={map[kind] || photos.creator} alt={`${kind} campaign photography`} /><div className="project-image-shade" /><span className="project-image-label">{kind.toUpperCase()} / CREATIVE CAMPAIGN</span><ArrowUpRight className="project-art-arrow" /></div>
}
export function SectionLabel({ children }) { return <div className="section-label"><span className="label-dot"></span>{children}</div> }
export function CTAButton({ to = '/contact', children = 'Start a project', dark = false }) { return <a className={`button ${dark ? 'button-outline' : 'button-lime'}`} href={to}>{children}<ArrowUpRight size={16} /></a> }
