import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import "./index.css";

export default function App() {
  return (
    <>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Toolbox</a>
        <a href="#contact">Contact</a>
      </nav>

      <Hero />
      <About />
      <Projects />
    </>
  );
}