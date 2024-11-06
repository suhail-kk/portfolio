import React, { useEffect } from "react";
import Aos from "aos";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "./components/About";
import Works from "./components/works";
import Footer from "./components/Footer";
import Header from "./components/header";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Articles from "./components/Articles";
import Experiances from "./components/Experiances";
import SocialMedia from "./components/SocialMedia";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <main>
      <section>
        <div className="relative">
          <div className="w-full z-50 flex h-fit justify-center items-start mt-4 md:h-[100vh] md:w-fit md:fixed md:items-center md:right-4">
            <Header />
          </div>
        </div>
      </section>
      <section id="home">
        <Landing />
      </section>
      <section id="me">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experiance-education">
        <Experiances />
      </section>
      <section id="works">
        <Works />
      </section>
      <section id="articles">
        <Articles />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="social-link">
        <SocialMedia />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}

export default App;