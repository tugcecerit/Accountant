import React from "react";
import Homeimg from "../images/home1.png"

const Home = () => {
    return (
        <section className="anasayfa w-full object-fill h-screen mx-auto overflow-hidden max-sm:flex items-center justify-center">
        <img src={Homeimg} className="cover" alt="Home"></img>
        </section>
    )
}

export default Home;