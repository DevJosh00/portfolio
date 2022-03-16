import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import Projects from "./components/Projects";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects /> 
      <About />
      <Skill /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
