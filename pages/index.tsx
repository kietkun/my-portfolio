import About from "@/Components/About";
import Experiences from "@/Components/Experiences";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import React from "react";

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [nav, setNav] = useState(false);
  // const openNav = () => setNav(true);
  // const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        {/* Hero */}
        <Hero />
        <div className="relative z-[30]">
          {/* About */}
          <About />
          {/* Experience */}
          <Experiences />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default index;
