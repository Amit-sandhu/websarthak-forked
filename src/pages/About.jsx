import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { SectionLabel, Orb } from '../components/Visuals'
export default function About(){return <div className="page inner-page">
 <section className="about-hero section-grid"><div><SectionLabel>ABOUT WEBSARTHAK</SectionLabel><h1>A creative studio<br/>for <em>ambitious</em><br/>brands.</h1><p>We believe the internet is too interesting for forgettable digital experiences. We help businesses show up with clarity, character and craft.</p></div><div className="about-orb"><Orb variant='lime'/><span>THINK<br/>MAKE<br/><em>MATTER.</em></span></div></section>
 <section className="about-statement section-pad"><SectionLabel>OUR POINT OF VIEW</SectionLabel><h2>Good design is not decoration. It's a way to make people <em>feel, understand and act.</em></h2></section>
 <section className="values-section section-pad"><div className="section-head"><div><SectionLabel>WHAT WE BELIEVE</SectionLabel><h2>Small details.<br/><em>Big difference.</em></h2></div><p>We keep the process collaborative and the work intentional. Every decision should have a reason.</p></div><div className="values-grid">{[['01','Curiosity','Ask better questions before jumping to answers.'],['02','Clarity','Make complex things feel simple and useful.'],['03','Craft','Sweat the details that make the whole thing work.']].map(x=><div className="value" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></section>
 <section className="big-cta"><SectionLabel>GOOD PEOPLE. GOOD IDEAS.</SectionLabel><h2>Let's make<br/><em>something matter.</em></h2><Link to="/contact" className="button button-dark">Work with us <ArrowUpRight/></Link></section>
 </div>}