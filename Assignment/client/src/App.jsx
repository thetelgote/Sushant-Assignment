import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Introduction from './components/Introduction/Introduction'
import Features from './components/Features/Features'
import WhyChoose from './components/WhyChoose/WhyChoose'
import Showcase from './components/Showcase/Showcase'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Trust from './components/Trust/Trust'
import UrlScanner from './components/UrlScanner/UrlScanner'
import Chatbot from './components/Chatbot/Chatbot'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Features />
        <WhyChoose />
        <Showcase />
        <HowItWorks />
        <Trust />
        <UrlScanner />
        <Chatbot />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="dark"
        toastStyle={{
          background: '#111118',
          border: '1px solid rgba(255,255,255,0.08)',
          color: '#fff',
        }}
      />
    </>
  )
}