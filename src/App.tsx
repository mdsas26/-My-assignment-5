import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TechnologySection from "./components/TechnologySection"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechnologySection />
      <Footer />

      <ToastContainer position="top-right" />
    </>
  )
}

export default App