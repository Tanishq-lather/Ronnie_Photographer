import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <>
            {/* Theme toggle */}
            <ThemeToggle /> 
            {/* Navbar */}
            <Navbar />

            {/* Main content */}
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />

            {/* footer */}
            <Footer />
        </>
    )
}