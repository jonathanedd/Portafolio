import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Home />
      <AboutMe />
      <Nav />
    </div>
  );
}

export default App;
