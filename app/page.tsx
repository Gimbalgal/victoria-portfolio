import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Project"
import Wordpress from "@/components/Wordpress"
import Skills from "@/components/Skills"
import Resume from "@/components/Resume"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Project from "@/components/Project"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Wordpress />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}