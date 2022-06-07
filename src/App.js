import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
