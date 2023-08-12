import React from "react";
import Home from "../components/HomeSection1"
import CardsGrid from '../components/HomeSection2';
import Links from '../components/HomeSection3'

const Homepage = () => {
    return (
        <div className="App">
          <section id='section-1' className="w-full h-screen object-scale-down object-center mx-auto overflow-hidden max-sm: bg-[#141311]">
          <Home />
          </section>
          <section id='section-2' className="w-full flex justify-center items-center">
            <CardsGrid />
          </section>
          <section id='section-3' className="w-full flex justify-center items-center">
            <Links />
          </section>
        </div>
      );
}

export default Homepage;