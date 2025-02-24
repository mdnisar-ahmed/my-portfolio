import Navbar from "@/components/navbar"
import Home from "@/components/home"
import About from "@/components/about"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Education />
        {/* <Projects /> */}
        <Contact />
      </main>
    </div>
  )
}

