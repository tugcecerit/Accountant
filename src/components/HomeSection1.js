import React from "react";
import Homeimg from "../images/home2.png";
import Homeimg2 from "../images/home1.png";

const Home = () => {
    return (
        <section className="anasayfa w-full object-fill h-screen mx-auto overflow-hidden max-sm:flex items-center justify-center">
            <img
                src={Homeimg}
                className="cover md:hidden"
                alt="Home"
            />
            <img
                src={Homeimg2}
                className="cover hidden md:block"
                alt="Home"
            />
        </section>
    );
};

export default Home;
