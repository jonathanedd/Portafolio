import "./App.css";
// import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Nav from "./components/navbar/Nav";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <NavBar /> */}

      <Home />
      <AboutMe />

      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
