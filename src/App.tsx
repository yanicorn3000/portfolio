import Contact from "./contact/Contact";
import NavBar from "./header/NavBar";
import Hero from "./hero/Hero";
import Projects from "./projects/Projects";

const App = () => {
  return (
    <>
      <NavBar />;
      <Hero />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
