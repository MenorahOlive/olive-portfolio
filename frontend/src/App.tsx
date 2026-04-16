import NavBar from "./components/sections/NavBar";
import Hero from "./components/sections/Hero";
import AboutMe from "./components/sections/AboutMe";
import ProfessionalExperience from "./components/sections/ProfessionalExperience";
import MajorSkills from "./components/sections/MajorSkills";
import ProgrammingLanguages from "./components/sections/ProgrammingLanguages";
import FrontendTechnologies from "./components/sections/FrontendTechnologies";
import BackendTechnologies from "./components/sections/BackendTechnologies";
import IDEandTools from "./components/sections/IDEandTools";
import Projects from "./components/sections/Projects";
import Footer from "./components/sections/Footer";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster position="top-center" richColors />
      <NavBar />
      <Hero />
      <AboutMe />
      <ProfessionalExperience />
      <MajorSkills />
      <ProgrammingLanguages />
      <FrontendTechnologies />
      <BackendTechnologies />
      <IDEandTools />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
