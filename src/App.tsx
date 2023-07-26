import { useEffect, useRef } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import About from "./components/first_section_about";
import Projects from "./components/projects_section";
import Skills from "./components/skills_section";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  const appRef = useRef(null);
  /*COLOCAR EL GRADIENTE AL INICIO*/
  useEffect(() => {
    const setGradiantBackground = () => {
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;

      const mouseX = Math.round((winWidth / 2) * 100);
      const mouseY = Math.round((winHeight / 2) * 100);

      if (appRef.current) {
        appRef.current.style.setProperty("--mouse-x", mouseX.toString() + "%");
        appRef.current.style.setProperty("--mouse-y", mouseY.toString() + "%");
      }
    };
    /*USAR GRADIENTE AL MOVER EL MOUSE*/
    setGradiantBackground();

    const moveGradiant = (event) => {
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;

      const mouseX = Math.round((event.pageX / winWidth) * 100);
      const mouseY = Math.round((event.pageY / winHeight) * 100);

      if (appRef.current) {
        appRef.current.style.setProperty("--mouse-x", mouseX.toString() + "%");
        appRef.current.style.setProperty("--mouse-y", mouseY.toString() + "%");
      }
    };
    document.addEventListener("mousemove", moveGradiant);
    return () => {
      document.removeEventListener("mousemove", moveGradiant);
    };
  });

  return (
    <>
      <BrowserRouter>
        <div className="app" id="app" ref={appRef} data-scroll-container>
          <div className="blink justify-center flex align-center"></div>
        </div>
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />

        <h1 className="custom-font">Welcome!</h1>
      </BrowserRouter>
    </>
  );
}

export default App;
