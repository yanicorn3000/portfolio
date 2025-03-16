import Contact from "./contact/Contact";
import NavBar from "./header/NavBar";
import Hero from "./hero/Hero";
import Projects from "./projects/Projects";
import Footer from "./footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <NavBar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
