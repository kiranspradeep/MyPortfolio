import { useState, useEffect } from "react";
import "./styles/App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import StarryBackground from "./components/StarryBackground"; // dark mode background
import StarryBackgroundLight from "./components/StarryBackgroundLight"; // light mode background
import ThemeToggle from "./components/ThemeToggle";

function App() {
  // Default theme dark
  const [theme, setTheme] = useState("dark");

  // Optional: persist theme across sessions
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) setTheme(storedTheme);
  }, []);
  
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`relative min-h-screen font-sans app ${theme}`}>
      {/* Background */}
      {theme === "dark" ? <StarryBackground /> : <StarryBackgroundLight />}

      {/* Toggle Button */}
      <ThemeToggle theme={theme} setTheme={setTheme} />

      {/* Content */}
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="education"><Education /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;


// import { useState } from "react";
// import "./styles/App.css";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Education from "./components/Education";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// import StarryBackground from "./components/StarryBackground"; // dark mode background
// import StarryBackgroundLight from "./components/StarryBackgroundLight"; // light mode background
// import ThemeToggle from "./components/ThemeToggle";

// function App() {
//   const [theme, setTheme] = useState("dark"); // default dark

//   return (
//     <div className="relative min-h-screen font-sans">
//       {/* Background */}
//       {theme === "dark" ? <StarryBackground /> : <StarryBackgroundLight />}

//       {/* Toggle Button */}
//       <ThemeToggle theme={theme} setTheme={setTheme} />

//       {/* Content */}
//       <Navbar />
//       <section id="hero"><Hero /></section>
//       <section id="about"><About /></section>
//       <section id="skills"><Skills /></section>
//       <section id="projects"><Projects /></section>
//       <section id="education"><Education /></section>
//       <section id="contact"><Contact /></section>
//       <Footer />
//     </div>
//   );
// }

// export default App;
