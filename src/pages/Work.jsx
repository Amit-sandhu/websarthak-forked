import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { SectionLabel, ProjectArt } from '../components/Visuals'
const data=[['NOVA / Fashion','Website · Creative direction','Websites','fashion'],['Bloom Botanics','Social media · Branding','Social Media','flora'],['LOUDER Studio','Campaign · Content','Social Media','social'],['KERNEL / Digital','Website · UI design','Websites','tech']]
export default function Work(){const [filter,setFilter]=useState('All');const filtered=data.filter(x=>filter==='All'||x[2]===filter);return <div className="page inner-page">
 <section className="work-hero section-pad"><SectionLabel>THE WORK / SELECTED PROJECTS</SectionLabel><h1>Selected<br/><em>work.</em></h1><p>A collection of projects where strategy, creativity and technology come together.</p><div className="filter-row">{['All','Websites','Social Media','Branding'].map(f=><button className={filter===f?'filter active':'filter'} onClick={()=>setFilter(f)} key={f}>{f}</button>)}</div></section>
 <section className="work-gallery section-pad"><div className="work-gallery-grid">{filtered.map((x,i)=><Link to="/contact" className="work-tile" key={x[0]}><ProjectArt kind={x[3]}/><div className="project-info"><div><h3>{x[0]}</h3><span>{x[1]}</span></div><ArrowUpRight/></div></Link>)}</div></section>
 <section className="big-cta"><SectionLabel>YOUR PROJECT COULD BE NEXT</SectionLabel><h2>Let's make<br/><em>something memorable.</em></h2><Link to="/contact" className="button button-dark">Start a project <ArrowUpRight/></Link></section>
 </div>}