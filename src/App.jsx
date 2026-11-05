import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import WebDevelopment from './pages/WebDevelopment'
import SocialMedia from './pages/SocialMedia'
// import Work from './pages/Work'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
export default function App() {
    return <Layout><Routes>
        <Route path="/" element={<Home />} /><Route path="/services" element={<Services />} /><Route path="/services/web-development" element={<WebDevelopment />} /><Route path="/services/social-media" element={<SocialMedia />} /><Route path="/about" element={<About />} /><Route path="/pricing" element={<Pricing />} /><Route path="/contact" element={<Contact />} /><Route path="/faq" element={<FAQ />} /><Route path="*" element={<Navigate to="/" replace />} />
    </Routes></Layout>
}