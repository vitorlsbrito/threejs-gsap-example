import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Perfomance from "./components/Perfomance";
import Showcase from "./components/three/Showcase";
import ProductViewer from "./components/ProductViewer";
import Highlights from "./components/Hightlights";
import Features from "./components/Features";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Perfomance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
};

export default App;
