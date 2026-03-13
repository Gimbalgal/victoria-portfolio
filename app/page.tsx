import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Wordpress from "@/components/Wordpress"
import Skills from "@/components/Skills"
import Resume from "@/components/Resume"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Project from "@/components/Project"

export default function Home() {
  return (
    <main className="pt-24">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Wordpress />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </main>
  )
}
